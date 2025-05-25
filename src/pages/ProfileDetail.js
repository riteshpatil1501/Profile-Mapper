import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('profiles');
    if (stored) {
      const found = JSON.parse(stored).find((p) => String(p.id) === id);
      // Simulate loading delay (optional)
      setTimeout(() => setProfile(found), 1000);
    }
  }, [id]);

  if (!profile) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <ClipLoader color="#007bff" size={50} />
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
        ← Back
      </button>
      <h2>{profile.name}</h2>
      <img
        src={profile.imageData}
        alt={profile.name}
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '10px' }}>{profile.description}</p>
      <p><strong>Latitude:</strong> {profile.lat}</p>
      <p><strong>Longitude:</strong> {profile.lng}</p>
      <p><strong>Contact:</strong> {profile.contact || 'N/A'}</p>
      <p><strong>Interests:</strong> {profile.interests || 'N/A'}</p>
    </div>
  );
};

export default ProfileDetail;




