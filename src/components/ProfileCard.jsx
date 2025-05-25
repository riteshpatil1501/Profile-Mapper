import React from 'react';

const ProfileCard = ({ name, photo, description }) => {
  return (
    <div className="profile-card">
      <img src={photo} alt={name} className="profile-photo" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;


