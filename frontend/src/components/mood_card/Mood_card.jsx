import React from 'react'
import './Mood_card.css'
import View_mood_overlay from '../view_mood_overlay/View_mood_overlay'

// Formats '2025-08-05T00:00:00.000Z' or '2025-08-05' to '05-08-2025'
function formatDateToDDMMYYYY(input) {
    if (!input) return '';
    if (typeof input === 'string') {
        const m = input.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (m) {
            const [, y, mo, d] = m;
            return `${d}-${mo}-${y}`;
        }
    }
    const dt = new Date(input);
    if (isNaN(dt)) return String(input);
    const d = String(dt.getDate()).padStart(2, '0');
    const m = String(dt.getMonth() + 1).padStart(2, '0');
    const y = dt.getFullYear();
    return `${d}-${m}-${y}`;
}

const Mood_card = ({ date, mood, note, emoji }) => {
    const [showDetails, setShowDetails] = React.useState(false);
    
    const displayDate = formatDateToDDMMYYYY(date);

    return (
        <div className='mood_card'>
            <div className="mood_card_emoji">{emoji}</div>
            <div className="mood_card_container">
                <div className="mood_card_date">{displayDate} </div>
                <div className="mood_card_mood">{mood}</div>
                <div className="mood_card_note">{note}</div>
            </div>
            <button className="view_more" value={showDetails} onClick={() => setShowDetails(true)}>
                <img src="../../assets/Down Left Arrow.svg" alt="" />
                View More
            </button>
            {showDetails && <View_mood_overlay onClose={() => setShowDetails(false)} date={date} mood={mood} note={note} />}
        </div>
    )
}

export default Mood_card
