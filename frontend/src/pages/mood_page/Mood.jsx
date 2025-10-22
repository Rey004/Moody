import React, { useEffect, useState } from 'react'
import './Mood.css'
import Mood_card from '../../components/mood_card/Mood_card'
import axios from 'axios'

const Mood = () => {
  const [moods, setMoods] = useState([])

  const getMood = async () => {
    try {
      const response = await axios.get('/api/moods')
      const payload = response.data
      const items = Array.isArray(payload) ? payload : (payload?.moods || payload?.data || [])
      setMoods(items || [])
    } catch (err) {
      console.error('Error fetching moods:', err)
    }
  }

  useEffect(() => {
    getMood()
  }, [])

  useEffect(() => {
    const onCreated = (e) => {
      const created = e.detail;
      if (!created) return;
      setMoods((prev) => {
        const next = [created, ...prev];
        // optional: keep newest first if date exists
        return next.sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0));
      });
    };
    window.addEventListener('mood:created', onCreated);
    return () => window.removeEventListener('mood:created', onCreated);
  }, [])

  return (
    <div className='mood'>
      <div className="search_container">
        <input type="text" placeholder='Search by date or mood...' />
        <div className="filter_container">
        <select name="filter" id="filter">
          <option value="all">All</option>
          <option value="happy">Happy</option>
        </select>
      </div>
      </div>
      <div className="mood_wrapper">
        <div className="mood_container">
        {moods.map((m) => (
          <Mood_card
            key={m._id || `${m.date}-${m.mood}-${m.note}-${m.emoji}`}
            date={m.date}
            mood={m.mood}
            note={m.note}
            emoji={m.emoji}
          />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Mood
