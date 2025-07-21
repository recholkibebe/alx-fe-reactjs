import React from 'react';

const UserProfile = ({ name, age, bio }) => {
	  return (
		      <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
		        <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{name}</h2>
		        <p>Age: <span style={{ fontWeight: 'bold' }}>{age}</span></p>
		        <p>Bio: <span style={{ fontStyle: 'italic' }}>{bio}</span></p>
		      </div>
		    );
};

export default UserProfile;

