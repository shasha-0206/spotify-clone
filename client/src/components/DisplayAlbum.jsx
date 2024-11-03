import { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/frontend-assets/assets';
import { Playercontext } from '../context/Playercontext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    
    const {playWithId} = useContext(Playercontext)

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img src={albumData.image} className='w-48 rounded' alt="Album cover" />
                <div className='flex flex-col'>
                    <p className='text-sm text-gray-400'>Playlist</p>
                    <h2 className='text-4xl font-bold mb-2 md:text-6xl'>{albumData.name}</h2>
                    <h4 className='text-gray-300 mb-2'>{albumData.desc}</h4>
                    <p className='mt-1 text-gray-400'>
                        <img className='inline-block w-5 mr-1' src={assets.spotify_logo} alt="Spotify logo"/>
                        <b className="font-semibold">Spotify</b>
                        <span> · 2,31,54 likes · </span>
                        <b>50 songs, </b>
                        about 2 hr 30 mins
                    </p>
                </div>
            </div>

            {/* Header for songs list */}
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-8 px-2 text-gray-400 text-sm'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img src={assets.clock_icon} className='m-auto w-4' alt="Clock icon" />
            </div>
            <hr className='border-gray-700 my-2' />

            {/* Songs list */}
            {
                songsData.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-gray-400 hover:bg-gray-800/30 cursor-pointer'>
                        <div className='flex items-center text-white'>
                            <span className='mr-4 text-gray-400'>{index + 1}</span>
                            <img src={item.image} className='inline w-10 mr-3' alt="Song thumbnail" />
                            <span>{item.name}</span>
                        </div>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbum;
