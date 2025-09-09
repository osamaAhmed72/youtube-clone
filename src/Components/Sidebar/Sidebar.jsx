import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import gaming from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import technology from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import gerard from '../../assets/gerard.png';



const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar? "": "smallSidebar"}`}>
      <div className="shortcutLinks">
        <div className={`sideLinks ${category===0?"activ":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="home icon" />
          <p>Home</p>
        </div>
        <div className={`sideLinks ${category===20?"activ":""}`} onClick={()=>setCategory(20)}>
          <img src={gaming} alt="home icon" />
          <p>Gaming</p>
        </div>
        <div className={`sideLinks ${category===2?"activ":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="home icon" />
          <p>Automobiles</p>
        </div>
        <div className={`sideLinks ${category===17?"activ":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="home icon" />
          <p>Sports</p>
        </div>
        <div className={`sideLinks ${category===24?"activ":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="home icon" />
          <p>Entertainment</p>
        </div>
        <div className={`sideLinks ${category===28?"activ":""}`}onClick={()=>setCategory(28)}>
          <img src={technology} alt="home icon" />
          <p>Technology</p>
        </div>
        <div className={`sideLinks ${category===10?"activ":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="home icon" />
          <p>Music</p>
        </div>
        <div className={`sideLinks ${category===22?"activ":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="home icon" />
          <p>Blogs</p>
        </div>
        <div className={`sideLinks ${category===25?"activ":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="home icon" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribeLink">

        <h3>SUBSCRIBED</h3>
        <div className='sideLinks'>
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className='sideLinks'>
          <img src={simon} alt="" />
          <p>MrBeast</p>
        </div>
        <div className='sideLinks'>
          <img src={tom} alt="" />
          <p>Justin Bieber</p>
        </div>
        <div className='sideLinks'>
          <img src={gerard} alt="" />
          <p>5-Minute Crafts</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
