import React from 'react';
import Header from './Header';
import FoodItems from './food_list.js';

const Home = ({children}) => {
  return (
    <div className="container">
    {children}
    <FoodItems />
    </div>
  );
};

export default Home;
