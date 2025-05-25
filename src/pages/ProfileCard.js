import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ profile, onExplore, onBook }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={profile.imageData} alt={profile.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.iconText}>📍 {profile.name}</div>
        <div className={styles.cardRow}>
          <div className={styles.iconText}>📝 {profile.description}</div>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.iconText}>📍 Lat: {profile.lat}</div>
          <div className={styles.iconText}>📍 Lng: {profile.lng}</div>
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.exploreBtn} onClick={onExplore}>Explore</button>
          <button className={styles.bookNowBtn} onClick={() => onBook(profile)}>Show on Map</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
