import { useState, useEffect, useCallback } from 'react';
import ResultCard from './ResultCard';
import { getRestaurants, restaurants as defaultRestaurants } from '../data/restaurants';
import styles from './LunchSelector.module.css';

export default function LunchSelector() {
    const [selectedLunch, setSelectedLunch] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [restaurantData, setRestaurantData] = useState(defaultRestaurants);
    const [locationStatus, setLocationStatus] = useState(null);
    const [showList, setShowList] = useState(false);
    const [spinningSlots, setSpinningSlots] = useState([null, null, null]);
    const [stoppedReels, setStoppedReels] = useState([false, false, false]);
    const [filters, setFilters] = useState({
        price: 'all',
        cuisine: 'all',
    });

    const uniqueCuisines = ['all', ...new Set(restaurantData.map(r => r.cuisine))];
    const prices = ['all', '$', '$$', '$$$'];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const getUserLocation = () => {
        setLocationStatus('loading');
        if (!navigator.geolocation) {
            setLocationStatus('error');
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const nearbyRestaurants = getRestaurants(latitude, longitude);
                setRestaurantData(nearbyRestaurants);
                setLocationStatus('success');
                setShowList(true);
            },
            (error) => {
                console.error("Error getting location:", error);
                setLocationStatus('error');
                alert("Unable to retrieve your location");
            }
        );
    };

    const decideLunch = () => {
        setIsSpinning(true);
        setSelectedLunch(null);
        setStoppedReels([false, false, false]);

        // Get filtered restaurants
        let filtered = restaurantData.filter(r => {
            const priceMatch = filters.price === 'all' || r.price === filters.price;
            const cuisineMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
            return priceMatch && cuisineMatch;
        });

        let fallbackMessage = null;
        if (filtered.length === 0) {
            if (filters.price !== 'all') {
                const relaxed = restaurantData.filter(r => filters.cuisine === 'all' || r.cuisine === filters.cuisine);
                if (relaxed.length > 0) {
                    filtered = relaxed;
                    fallbackMessage = `No ${filters.price} options found. Relaxing price filter...`;
                }
            }
            if (filtered.length === 0 && filters.cuisine !== 'all') {
                const relaxed = restaurantData.filter(r => filters.price === 'all' || r.price === filters.price);
                if (relaxed.length > 0) {
                    filtered = relaxed;
                    fallbackMessage = `No ${filters.cuisine} found. Relaxing cuisine filter...`;
                }
            }
            if (filtered.length === 0) {
                filtered = restaurantData;
                fallbackMessage = "No matches. Showing all open restaurants.";
            }
        }

        // Determine final winner early to sync with reel stops
        let winner;
        if (locationStatus === 'success' && filtered[0]?.distance) {
            const nearbyOptions = filtered.slice(0, Math.min(5, filtered.length));
            const weights = nearbyOptions.map((_, index) => nearbyOptions.length - index);
            const totalWeight = weights.reduce((sum, w) => sum + w, 0);
            let random = Math.random() * totalWeight;
            let winnerIdx = 0;
            for (let i = 0; i < weights.length; i++) {
                random -= weights[i];
                if (random <= 0) { winnerIdx = i; break; }
            }
            winner = nearbyOptions[winnerIdx];
        } else {
            winner = filtered[Math.floor(Math.random() * filtered.length)];
        }
        if (fallbackMessage) winner = { ...winner, fallbackMessage };

        // Start Animation
        const spinRate = 80;
        const interval = setInterval(() => {
            setSpinningSlots(current => {
                return current.map((slot, i) => {
                    if (stoppedReels[i]) return slot;
                    return filtered[Math.floor(Math.random() * filtered.length)];
                });
            });
        }, spinRate);

        // Sequential Stops
        setTimeout(() => setStoppedReels(prev => [true, prev[1], prev[2]]), 1000);
        setTimeout(() => setStoppedReels(prev => [prev[0], true, prev[2]]), 1800);
        setTimeout(() => {
            setStoppedReels([true, true, true]);
            setSpinningSlots([winner, winner, winner]);
            clearInterval(interval);

            // Reveal result card after final stop
            setTimeout(() => {
                setSelectedLunch(winner);
                setIsSpinning(false);
            }, 800);
        }, 2600);
    };

    return (
        <div className={styles.container}>
            {!selectedLunch && !isSpinning && !showList && (
                <div className={`${styles.filters} glass`}>
                    <button
                        onClick={getUserLocation}
                        className={`${styles.locationButton} ${locationStatus === 'success' ? styles.success : ''}`}
                        disabled={locationStatus === 'loading' || locationStatus === 'success'}
                    >
                        {locationStatus === 'loading' ? '📍 Locating...' :
                            locationStatus === 'success' ? '📍 Location Active' :
                                '📍 Use My Location'}
                    </button>

                    <div className={styles.filterGrid}>
                        <div className={styles.filterGroup}>
                            <label>Cuisine</label>
                            <select name="cuisine" value={filters.cuisine} onChange={handleFilterChange}>
                                {uniqueCuisines.map(c => (
                                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.filterGroup}>
                            <label>Price</label>
                            <select name="price" value={filters.price} onChange={handleFilterChange}>
                                {prices.map(p => (
                                    <option key={p} value={p}>{p === 'all' ? 'Any Price' : p}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button onClick={decideLunch} className={styles.spinButton}>
                        🎰 Pull the Lever!
                    </button>
                </div>
            )}

            {showList && !selectedLunch && !isSpinning && (
                <div className={`${styles.restaurantList} glass`}>
                    <div className={styles.listHeader}>
                        <h3>Nearby Eats 📍</h3>
                        <button onClick={() => setShowList(false)} className={styles.iconBtn}>✕</button>
                    </div>
                    <div className={styles.listContainer}>
                        {restaurantData.filter(r => {
                            const pMatch = filters.price === 'all' || r.price === filters.price;
                            const cMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
                            return pMatch && cMatch;
                        }).slice(0, 20).map(r => (
                            <div key={r.id} className={styles.listItem} onClick={() => setSelectedLunch(r)}>
                                <div className={styles.listItemEmoji}>{r.emoji}</div>
                                <div className={styles.listItemInfo}>
                                    <div className={styles.listItemName}>{r.name}</div>
                                    <div className={styles.listItemMeta}>{r.cuisine} • {r.price} • ⭐ {r.rating}</div>
                                </div>
                                <div className={styles.listItemDist}>{r.distance}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isSpinning && (
                <div className={styles.slotMachineBox}>
                    <div className={styles.slotMachineHeader}>🎰</div>
                    <div className={styles.slotMachineFrame}>
                        <div className={styles.slotLights}>
                            {[...Array(6)].map((_, i) => <div key={i} className={styles.lightBulb}></div>)}
                        </div>

                        <div className={styles.slotReels}>
                            {spinningSlots.map((res, i) => (
                                <div key={i} className={`${styles.slotReel} ${stoppedReels[i] ? styles.stopped : styles.spinning}`}>
                                    <div className={styles.reelContent}>
                                        {res && (
                                            <div className={styles.slotItem}>
                                                <div className={styles.slotEmoji}>{res.emoji}</div>
                                                <div className={styles.slotName}>{res.name}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.slotLeverContainer}>
                            <div className={`${styles.leverHandle} ${isSpinning ? styles.pulled : ''}`}></div>
                        </div>
                    </div>
                    <div className={styles.slotStatus}>Crunching the numbers...</div>
                </div>
            )}

            {selectedLunch && (
                <ResultCard restaurant={selectedLunch} onReset={() => setSelectedLunch(null)} />
            )}
        </div>
    );
}
