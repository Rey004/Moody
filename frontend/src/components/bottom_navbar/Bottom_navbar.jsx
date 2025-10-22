import React, { useState } from 'react'
import './Bottom_navbar.css'
import Create_mood_overlay from '../create_mood_overlay/Create_mood_overlay';

const Bottom_navbar = () => {
  const navigateToMoods = () => {
    window.location.href = '/moods';
  };

  const [showModal, setShowModal] = useState(false)

  return (
    <div className='bottom_navbar'>
      <div className="bottom_navbar_container">
        <button className="create_mood" onClick={() => setShowModal(true)}>
          <img src="../../assets/Plus.svg" alt="Plus" className="plus_icon" />
          Add Mood
        </button>
        <div className="nav_icon">
          <img src="../../assets/Music.svg" alt="" />
          <img src="../../assets/Bar Chart.svg" alt="" />
          <img src="../../assets/Landscape.svg" alt="" />
          <img src="../../assets/Settings.svg" alt="" />
        </div>
        <button className="view_mood" onClick={navigateToMoods}>
          <img src="../../assets/Grinning Face.svg" alt="Eye" className="smile_icon" />
          All Mood
        </button>
      </div>
      {showModal && (
        <Create_mood_overlay onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default Bottom_navbar
