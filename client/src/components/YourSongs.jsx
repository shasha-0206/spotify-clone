import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function YourSongs() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/songs');
                setSongs(response.data);
            } catch (error) {
                setError("Error fetching songs");
            } finally {
                setLoading(false);
            }
        };
        fetchSongs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Navbar />
            <div className='mt-10 flex flex-col gap-8'>
                <div className='flex gap-4 items-end'>
                    <img src="https://media.wired.com/photos/5926df59f3e2356fd800ab80/master/w_2560%2Cc_limit/GettyImages-543338600-S2.jpg"
                        className='w-48 rounded' alt="Album cover" />
                    <div>
                        <p className='text-sm text-gray-400'>Playlist</p>
                        <h2 className='text-4xl font-bold mb-2'>Your Songs</h2>
                        <p className='mt-1 text-gray-400'>A collection of your uploaded songs</p>
                    </div>
                </div>

                {/* Header for songs list */}
                <div className='grid grid-cols-3 sm:grid-cols-4 mt-8 px-2 text-gray-400 text-sm'>
                    <p><b className='mr-4'>#</b>Title</p>
                    <p>Artist</p>
                    <p className='hidden sm:block'>Date Added</p>
                    <p className='text-center'>Duration</p>
                </div>
                <hr className='border-gray-700 my-2' />

                {/* Songs list */}
                {
                    songs.map((song, index) => (
                        <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-400 hover:bg-gray-800/30 cursor-pointer'>
                            <div className='flex items-center text-white'>
                                <span className='mr-4 text-gray-400'>{index + 1}</span>
                                <img src={song.imageFile} className='inline w-10 mr-3' alt="Song thumbnail" />
                                <span>{song.title}</span>
                            </div>
                            <p className='text-[15px]'>{song.artist}</p>
                            <p className='text-[15px] hidden sm:block'>2 days ago</p>
                            <p className='text-[15px] text-center'>{song.duration}</p>

                            {/* {
                                <audio controls className='text-center'>
                                    <source src={song.audioFile} type="audio/mp3" />
                                </audio>
                            } */}
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default YourSongs;
