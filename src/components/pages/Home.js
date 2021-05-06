import React from 'react';
import Users from '../users/Users';
import Search from '../users/Search';

const Home = () => {
  return (
    <div className="home">
      <Search />
      <Users />
    </div>
  );
};

export default Home;
