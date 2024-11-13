import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Song from './Model/SongSchema.js';
import fs from 'fs'

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
// MongoDB Connection
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL)
    .then(() => console.log('MongoDB connection successful'))
    .catch(error => console.log(`MongoDB connection failed due to ${error}`));


async function uploadOrUpdateSong(title, artist, audioFilePath, imageFilePath, duration) {
    // Read the audio file as binary data
    const audioBuffer = fs.readFileSync(audioFilePath);
    const audioBase64 = audioBuffer.toString('base64');  // Convert audio to base64

    // Read the image file and convert to base64
    const imageBase64 = fs.readFileSync(imageFilePath, { encoding: "base64" });

    try {
        let song = await Song.findOne({ title });

        if (!song) {
            song = new Song({
                title,
                artist,
                audioFile: `data:audio/mp3;base64,${audioBase64}`,  // Store as data URI
                imageFile: `data:image/jpeg;base64,${imageBase64}`,   // Store image as base64
                duration
            });
            await song.save();
            console.log("New song added:", title);
        } else {
            song.artist = artist;
            song.audioFile = `data:audio/mp3;base64,${audioBase64}`;
            song.imageFile = `data:image/jpeg;base64,${imageBase64}`;
            song.duration = duration;
            await song.save();
            console.log("Song updated:", title);
        }
    } catch (err) {
        console.error("Error uploading or updating song:", err);
    }
}

// to add songs
// uploadOrUpdateSong(
//     "Luckanna Mate Nillu",
//     "Anirudh Ravichander",
//      "c:\\Users\\malkh\\Downloads\\Luckkanna Mate Nillu - SenSongsMp3.Co.mp3",
//      "C:\\Users\\malkh\\Desktop\\Camera Roll\\spotify\\Screenshot 2024-11-12 231618.png",
//      "3:30"
// )


// Route to fetch all songs
app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();  // Use async/await instead of callback
        res.json(songs);  // Send song data to frontend
    } catch (err) {
        res.status(500).send("Error retrieving songs: " + err.message);  // Handle any errors
    }
});


app.get('/songs/:id', async (req, res) => {
    try {
        const songId = req.params.id; // Get song ID from the URL params
        const song = await Song.findById(songId); // Query the song from MongoDB using Mongoose

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        // If the song is found, return it
        res.json(song);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
