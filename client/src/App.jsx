import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { Playercontext } from './context/Playercontext'
// import SongList from './components/SongList'

const App = () => {

  const {audioRef , track} = useContext(Playercontext);
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex '>
        <Sidebar />
        <Display />
      </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>

    // <SongList />
  )
}

export default App