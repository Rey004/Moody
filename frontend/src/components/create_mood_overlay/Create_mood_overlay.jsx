import React, { useRef, useState } from 'react'
import './Create_mood_overlay.css'
import axios from 'axios';

const Create_mood_overlay = ({ onClose }) => {

  const modalRef = useRef();

  const [date, setDate] = useState('');
  const [emoji, setEmoji] = useState('');
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  }

  const handleAdd = (e) => {
    e.preventDefault();
    axios.post('/api/moods', {
      date,
      emoji,
      mood,
      note
    })
    .then(response => {
      console.log('Mood added:', response.data);
      onClose();
    })
    .catch(error => {
      console.error('Error adding mood:', error);
    });
  }

  return (
    <div ref={modalRef} onClick={closeModal} className='create_mood_overlay'>
      <div className="create_mood_container" role="dialog" aria-modal="true">
        <div className="overlay_header">
          <h2>Create Mood</h2>
          <button className="icon_close" aria-label="Close" onClick={onClose}>✕</button>
        </div>

  <form className="overlay_form" onSubmit={handleAdd}>
                <div className="form_row_grid">
                  <div className="form_row">
                    <label htmlFor="date">Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} id="date" type="date" required />
                  </div>

                  <div className="form_row">
                    <label htmlFor="emoji">Emoji</label>
                    <input value={emoji} onChange={(e) => setEmoji(e.target.value)} id="emoji" type="text" placeholder="e.g., 😊" required />
                  </div>
                </div>
           <div className="form_row">
            <label htmlFor="mood">Mood</label>
            <input value={mood} onChange={(e) => setMood(e.target.value)} id="mood" type="text" placeholder="e.g., Happy" required />
          </div>

          <div className="form_row">
            <label htmlFor="note">Note</label>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} id="note" rows="5" placeholder="How are you feeling today?" required />
          </div>
          <div className="actions">
            <button type="button" className="btn btn_ghost" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn_primary" onClick={handleAdd}>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create_mood_overlay
