import { useState, useEffect } from 'react';
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

        // Get filtered restaurants
        let filtered = restaurantData.filter(r => {
            const priceMatch = filters.price === 'all' || r.price === filters.price;
            const cuisineMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
            return priceMatch && cuisineMatch;
        });

        let fallbackMessage = null;

        // Fallback logic
        if (filtered.length === 0) {
            if (filters.price !== 'all') {
                filtered = restaurantData.filter(r => {
                    const cuisineMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
                    return cuisineMatch;
                });
                if (filtered.length > 0) {
                    fallbackMessage = `No ${filters.price} ${filters.cuisine !== 'all' ? filters.cuisine : ''} restaurants open. Showing other prices.`;
                }
            }

            if (filtered.length === 0 && filters.cuisine !== 'all') {
                filtered = restaurantData.filter(r => {
                    const priceMatch = filters.price === 'all' || r.price === filters.price;
                    return priceMatch;
                });
                if (filtered.length > 0) {
                    fallbackMessage = `No ${filters.cuisine} restaurants open. Showing other cuisines.`;
                }
            }

            if (filtered.length === 0) {
                filtered = restaurantData;
                fallbackMessage = "No restaurants match your filters. Showing all open restaurants nearby.";
            }
        }

        // Animate slot machine reels
        const spinInterval = setInterval(() => {
            setSpinningSlots([
                filtered[Math.floor(Math.random() * filtered.length)],
                filtered[Math.floor(Math.random() * filtered.length)],
                filtered[Math.floor(Math.random() * filtered.length)]
            ]);
        }, 100);

        // Stop spinning after delay and select winner
        setTimeout(() => {
            clearInterval(spinInterval);

            let selected;
            if (locationStatus === 'success' && filtered[0]?.distance) {
                const nearbyOptions = filtered.slice(0, Math.min(5, filtered.length));
                const weights = nearbyOptions.map((_, index) => nearbyOptions.length - index);
                const totalWeight = weights.reduce((sum, w) => sum + w, 0);

                let random = Math.random() * totalWeight;
                let selectedIndex = 0;

                for (let i = 0; i < weights.length; i++) {
                    random -= weights[i];
                    if (random <= 0) {
                        selectedIndex = i;
                        break;
                    }
                }

                selected = nearbyOptions[selectedIndex];
            } else {
                selected = filtered[Math.floor(Math.random() * filtered.length)];
            }

            if (fallbackMessage) {
                selected = { ...selected, fallbackMessage };
            }

            // Final slot reveal
            setSpinningSlots([selected, selected, selected]);

            setTimeout(() => {
                setSelectedLunch(selected);
                setIsSpinning(false);
                setSpinningSlots([null, null, null]);
            }, 500);
        }, 2000);
    };

    const getFilteredRestaurants = () => {
        return restaurantData.filter(r => {
            const priceMatch = filters.price === 'all' || r.price === filters.price;
            const cuisineMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
            return priceMatch && cuisineMatch;
        });
    };

    return (
        <div className={styles.container}>
            {!selectedLunch && !isSpinning && !showList && (
                <div className={styles.filters}>
                    <button
                        onClick={getUserLocation}
                        className={`${styles.locationButton} ${locationStatus === 'success' ? styles.success : ''}`}
                        disabled={locationStatus === 'loading' || locationStatus === 'success'}
                    >
                        {locationStatus === 'loading' ? 'Locating... 🛰️' :
                            locationStatus === 'success' ? 'Location Found! 📍' :
                                'Use My Location 📍'}
                    </button>

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

                    <button onClick={decideLunch} className={styles.spinButton}>
                        🎰 Pull the Lever!
                    </button>
                </div>
            )}

            {showList && !selectedLunch && !isSpinning && (
                <div className={styles.restaurantList}>
                    <h3>Nearby Restaurants 📍</h3>
                    <div className={styles.listContainer}>
                        {getFilteredRestaurants().slice(0, 10).map(restaurant => (
                            <div
                                key={restaurant.id}
                                className={styles.listItem}
                                onClick={() => setSelectedLunch(restaurant)}
                            >
                                <div className={styles.listItemEmoji}>{restaurant.emoji}</div>
                                <div className={styles.listItemInfo}>
                                    <div className={styles.listItemName}>{restaurant.name}</div>
                                    <div className={styles.listItemDetails}>
                                        {restaurant.cuisine} • {restaurant.price} • ⭐ {restaurant.rating}
                                    </div>
                                    {restaurant.deal && (
                                        <div className={styles.listItemDeal}>🏷️ {restaurant.deal}</div>
                                    )}
                                </div>
                                <div className={styles.listItemDistance}>{restaurant.distance}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setShowList(false)} className={styles.backButton}>
                        ← Back to Filters
                    </button>
                </div>
            )}

            {isSpinning && (
                <div className={styles.slotMachine}>
                    <div className={styles.slotMachineTop}>🎰</div>
                    <div className={styles.slotReels}>
                        {spinningSlots.map((restaurant, index) => (
                            <div key={index} className={styles.slotReel}>
                                <div className={styles.slotWindow}>
                                    {restaurant && (
                                        <div className={styles.slotItem}>
                                            <div className={styles.slotEmoji}>{restaurant.emoji}</div>
                                            <div className={styles.slotName}>{restaurant.name}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.slotLever}>
                        <div className={styles.leverHandle}></div>
                    </div>
                    <p className={styles.slotText}>🍀 Finding your perfect lunch... 🍀</p>
                </div>
            )}

            {selectedLunch && (
                <ResultCard restaurant={selectedLunch} onReset={() => setSelectedLunch(null)} />
            )}
        </div>
    );
}
