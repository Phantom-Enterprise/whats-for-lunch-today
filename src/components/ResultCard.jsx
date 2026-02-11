import styles from './ResultCard.module.css';

export default function ResultCard({ restaurant, onReset }) {
    if (!restaurant) return null;

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {restaurant.image && <img src={restaurant.image} alt={restaurant.name} className={styles.image} />}
                <div className={styles.emoji}>{restaurant.emoji}</div>
            </div>
            <div className={styles.content}>
                <h2 className={styles.name}>{restaurant.name}</h2>
                <div className={styles.details}>
                    <span className={styles.badge}>{restaurant.cuisine}</span>
                    <span className={styles.badge}>{restaurant.price}</span>
                    <span className={styles.rating}>⭐ {restaurant.rating}</span>
                </div>
                <p className={styles.distance}>📍 {restaurant.distance} away</p>

                {restaurant.deal && (
                    <div className={styles.deal}>
                        🏷️ {restaurant.deal}
                    </div>
                )}

                <div className={styles.linkButtons}>
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mapLink}
                    >
                        📍 Directions
                    </a>

                    <a
                        href={restaurant.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.menuLink}
                    >
                        📋 Menu
                    </a>
                </div>

                <button onClick={onReset} className={styles.button}>
                    Spin Again 🔄
                </button>
            </div>
        </div>
    );
}
