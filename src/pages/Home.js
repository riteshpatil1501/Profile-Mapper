import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MapComponent from '../components/MapComponent';
import styles from './ProfileCard.module.css';

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = localStorage.getItem('profiles');
    if (storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    }
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to Profile Mapper</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />

      {/* Responsive Profile Cards */}
      <div className={styles.cardGrid}>
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className={styles.profileCard}
            onClick={() => handleViewDetails(profile.id)}
          >
            {profile.imageData && (
              <img
                src={profile.imageData}
                alt={profile.name}
                className={styles.profileImage}
              />
            )}
            <h4 className={styles.profileName}>{profile.name}</h4>
            <p className={styles.profileDesc}>{profile.description}</p>

            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering card click
                setMapCenter({ lat: profile.lat, lng: profile.lng });
              }}
              className={`${styles.cardButton} ${styles.summaryBtn}`}
            >
              Summary
            </button>
          </div>
        ))}
      </div>

      <MapComponent markers={filteredProfiles} centerOn={mapCenter} />
    </div>
  );
};

export default Home;



















