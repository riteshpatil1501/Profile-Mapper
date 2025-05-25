import React, { useState, useEffect } from 'react';
import styles from './AdminPanel.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPanel = ({ onShowOnMap }) => {
  const [profiles, setProfiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [imageData, setImageData] = useState('');
  const [contact, setContact] = useState('');
  const [interests, setInterests] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const savedProfiles = localStorage.getItem('profiles');
    if (savedProfiles) {
      setProfiles(JSON.parse(savedProfiles));
    }
  }, []);

  const saveProfiles = (updatedProfiles) => {
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setLat('');
    setLng('');
    setImageData('');
    setContact('');
    setInterests('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddProfile = () => {
    if (!name || !description || !lat || !lng || !imageData || !contact || !interests) {
      toast.warn('Please fill all fields including uploading an image');
      return;
    }

    const newProfile = {
      id: Date.now(),
      name,
      description,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      imageData,
      contact,
      interests
    };

    const updated = [...profiles, newProfile];
    saveProfiles(updated);
    clearForm();
    toast.success('Profile added!');
  };

  const handleEdit = (index) => {
    const p = profiles[index];
    setName(p.name);
    setDescription(p.description);
    setLat(p.lat);
    setLng(p.lng);
    setImageData(p.imageData);
    setContact(p.contact || '');
    setInterests(p.interests || '');
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (!name || !description || !lat || !lng || !imageData || !contact || !interests) {
      toast.warn('Please fill all fields including uploading an image');
      return;
    }

    const updated = profiles.map((p, i) =>
      i === editingIndex
        ? { ...p, name, description, lat: parseFloat(lat), lng: parseFloat(lng), imageData, contact, interests }
        : p
    );
    saveProfiles(updated);
    clearForm();
    setEditingIndex(null);
    toast.success('Profile updated!');
  };

  const handleDelete = (index) => {
    if (!window.confirm('Are you sure you want to delete this profile?')) return;
    const updated = profiles.filter((_, i) => i !== index);
    saveProfiles(updated);
    toast.error('Profile deleted!');
  };

  const handleShowOnMap = (profile) => {
    if (onShowOnMap) {
      onShowOnMap(profile);
    } else {
      localStorage.setItem('selectedProfile', JSON.stringify(profile));
      toast.info('Profile location saved! View it on the map.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Dashboard</h2>
      <h3>{editingIndex === null ? 'Add New Profile' : 'Edit Profile'}</h3>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <input
          type="number"
          step="any"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="number"
          step="any"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {imageData && <img src={imageData} alt="Preview" className={styles.imagePreview} />}

        {editingIndex === null ? (
          <button className={styles.primaryButton} onClick={handleAddProfile}>
            Add Profile
          </button>
        ) : (
          <>
            <button className={styles.primaryButton} onClick={handleSaveEdit}>
              Save Changes
            </button>
            <button
              className={styles.cancelButton}
              onClick={() => {
                clearForm();
                setEditingIndex(null);
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>

      <h3>Existing Profiles</h3>
      {profiles.length === 0 && <p>No profiles added yet.</p>}

      <ul className={styles.profileList}>
        {profiles.map((p, i) => (
          <li key={p.id} className={styles.profileCard}>
            <img src={p.imageData} alt={p.name} className={styles.cardImage} />
            <div className={styles.cardInfo}>
              <strong>{p.name}</strong> - {p.description}
              <br />
              Contact: {p.contact || 'N/A'}<br />
              Interests: {p.interests || 'N/A'}<br />
              (Lat: {p.lat}, Lng: {p.lng})
            </div>
            <div className={styles.cardActions}>
              <button onClick={() => handleEdit(i)}>Edit</button>
              <button className={styles.deleteButton} onClick={() => handleDelete(i)}>
                Delete
              </button>
              <button onClick={() => handleShowOnMap(p)}>Show on Map</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;











