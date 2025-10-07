import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
    emoji: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
},{ timestamps: true });

const Mood = mongoose.model("Mood", moodSchema);
export default Mood;