import Mood from "../models/mood.model.js";

// list moods
export async function getMoods(req, res) {
    try {
        const moods = await Mood.find().sort({ date: -1 });
        res.json({ moods });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch moods", error: err.message });
    }
}

// create mood
export async function createMood(req, res) {
    try {
        const moodItem = await Mood.create({
            emoji: req.body.emoji,
            mood: req.body.mood,
            note: req.body.note,
            date: req.body.date,
        });

        res.status(201).json({ message: "mood added successfully", mood: moodItem });
    } catch (err) {
        res.status(500).json({ message: "Failed to create mood", error: err.message });
    }
}

// update mood (simple): updates any fields provided in req.body
export async function updateMood(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: "Missing mood id" });

        const updatedMood = await Mood.findByIdAndUpdate(id, req.body, { 
            new: true,
            runValidators: true, 
        });

        if (!updatedMood) return res.status(404).json({ message: "Mood not found" });

        res.json({ message: "mood updated successfully", mood: updatedMood });
    } catch (err) {
        res.status(500).json({ message: "Failed to update mood", error: err.message });
    }
}

// delete mood
export async function deleteMood(req, res) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ message: "Missing mood id" });

        const deleted = await Mood.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Mood not found" });

        res.json({ message: "mood deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete mood", error: err.message });
    }
}
