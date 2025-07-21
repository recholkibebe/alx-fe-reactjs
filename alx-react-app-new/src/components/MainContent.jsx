import React from 'react';
import UserProfile from './UserProfile';

const MainContent = () => {
	  return (
		      <main style={{ backgroundColor: '#e8f0fe', padding: '30px', minHeight: '300px' }}>
		        <UserProfile name="Alice" age={25} bio="Loves hiking and photography." />
		        <UserProfile name="Brian" age={32} bio="Food blogger and street explorer." />
		        <UserProfile name="Cynthia" age={29} bio="History teacher and museum lover." />
		      </main>
		    );
};

export default MainContent;


