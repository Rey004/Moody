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
        <button className="create_mood" onClick={() => setShowModal(true)}>Create Mood</button>
        <button className="view_mood" onClick={navigateToMoods}>View Mood</button>
      </div>
      {showModal && (
        <Create_mood_overlay onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}

export default Bottom_navbar
