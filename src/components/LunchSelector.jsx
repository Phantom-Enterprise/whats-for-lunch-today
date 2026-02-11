import { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import { getRestaurants, restaurants as defaultRestaurants } from '../data/restaurants';
import styles from './LunchSelector.module.css';

export default function LunchSelector() {
    const [selectedLunch, setSelectedLunch] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [restaurantData, setRestaurantData] = useState(defaultRestaurants);
    const [locationStatus, setLocationStatus] = useState(null); // null, 'loading', 'success', 'error'
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

        // Simulate thinking/spinning delay
        setTimeout(() => {
            const filtered = restaurantData.filter(r => {
                const priceMatch = filters.price === 'all' || r.price === filters.price;
                const cuisineMatch = filters.cuisine === 'all' || r.cuisine === filters.cuisine;
                return priceMatch && cuisineMatch;
            });

            if (filtered.length === 0) {
                alert("No restaurants match your filters! Try loosening them.");
                setIsSpinning(false);
                return;
            }

            // If location is used, weigh closer restaurants slightly higher? 
            // For now, let's just pick random from the filtered list which is already sorted by distance if location is on
            // Actually, let's pick randomly to keep the "spin" feel, but the list display helps.
            const random = filtered[Math.floor(Math.random() * filtered.length)];
            setSelectedLunch(random);
            setIsSpinning(false);
        }, 1500);
    };

    return (
        <div className={styles.container}>
            {!selectedLunch && !isSpinning && (
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
                        Pick My Lunch! 🎲
                    </button>
                </div>
            )}

            {isSpinning && (
                <div className={styles.spinner}>
                    <div className={styles.emojiSpinner}>🤔</div>
                    <p>Consulting the food gods...</p>
                </div>
            )}

            {selectedLunch && (
                <ResultCard restaurant={selectedLunch} onReset={() => setSelectedLunch(null)} />
            )}
        </div>
    );
}
