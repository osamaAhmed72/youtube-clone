import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/feed/Feed';

const Home = ({sidebar,searchQuery}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
        <div className={`container ${sidebar?"":"largeContainer"}`}>
            <Feed category={category} searchQuery={searchQuery} />
        </div>
    </>
  )
}

export default Home
