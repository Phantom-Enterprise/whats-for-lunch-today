import { useState, useEffect } from 'react';
import ResultCard from './ResultCard';
import { getRestaurants, restaurants as defaultRestaurants } from '../data/restaurants';
import styles from './LunchSelector.module.css';

export default function LunchSelector() {
    const [selectedLunch, setSelectedLunch] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [restaurantData, setRestaurantData] = useState(defaultRestaurants);
    const [locationStatus, setLocationStatus] = useState(null); // null, 'loading', 'success', 'error'
    const [showList, setShowList] = useState(false);
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
                setShowList(true); // Show the list after location is found
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

            // If location is enabled (restaurants have distance), prioritize nearby options
            let selected;
            if (locationStatus === 'success' && filtered[0].distance) {
                // Take the top 5 closest restaurants from filtered list (already sorted by distance)
                const nearbyOptions = filtered.slice(0, Math.min(5, filtered.length));

                // Weighted random: heavily favor the closest options
                // Assign weights: closest gets 5, next gets 4, etc.
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
                // No location - pick randomly from all filtered
                selected = filtered[Math.floor(Math.random() * filtered.length)];
            }

            setSelectedLunch(selected);
            setIsSpinning(false);
        }, 1500);
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
                        Pick My Lunch! 🎲
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
