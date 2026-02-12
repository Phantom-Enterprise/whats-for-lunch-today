import styles from './ResultCard.module.css';

export default function ResultCard({ restaurant, onReset }) {
    if (!restaurant) return null;

    return (
        <div className={`${styles.card} glass`}>
            {restaurant.deal && (
                <div className={styles.dealBanner}>
                    <span className={styles.dealIcon}>🎁</span>
                    <span className={styles.dealText}>Exclusive Deal: {restaurant.deal}</span>
                </div>
            )}

            {restaurant.fallbackMessage && (
                <div className={styles.fallbackNote}>
                    <span className={styles.noteIcon}>ℹ️</span>
                    {restaurant.fallbackMessage}
                </div>
            )}

            <div className={styles.imageSection}>
                {restaurant.image && <img src={restaurant.image} alt={restaurant.name} className={styles.bgImage} />}
                <div className={styles.overlay}></div>
                <div className={styles.mainEmoji}>{restaurant.emoji}</div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.name}>{restaurant.name}</h2>
                    <div className={styles.ratingBox}>
                        <span className={styles.ratingStar}>⭐</span>
                        <span className={styles.ratingVal}>{restaurant.rating}</span>
                    </div>
                </div>

                <div className={styles.badgeRow}>
                    <span className={styles.badge}>{restaurant.cuisine}</span>
                    <span className={styles.badge}>{restaurant.price}</span>
                </div>

                <div className={styles.infoRow}>
                    <div className={styles.address}>📍 {restaurant.address}</div>
                    <div className={styles.distance}>{restaurant.distance} away</div>
                </div>

                <div className={styles.actionGrid}>
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryLink}
                    >
                        🗺️ Directions
                    </a>

                    <a
                        href={restaurant.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryLink}
                    >
                        📋 Menu
                    </a>
                </div>

                <button onClick={onReset} className={styles.resetBtn}>
                    🔄 Spin Again
                </button>
            </div>
        </div>
    );
}
