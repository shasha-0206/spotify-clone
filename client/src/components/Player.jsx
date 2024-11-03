import { useContext } from 'react';
import { assets,  } from '../assets/frontend-assets/assets'
import { Playercontext } from '../context/Playercontext';

const Player = () => {

    const {track,seekBar , seekBg ,playstatus, play , pause ,time ,seekSong} = useContext(Playercontext);
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

        {/* left part */}
        <div className='hidden lg:flex items-center gap-4'>
            <img className ="w-12 " src={track.image} />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>

        </div>
        
        {/* for play and other icons */}
        {/* middle part */}
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} />

                {
                    playstatus?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} />:<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} />
                }   

                <img className='w-4 cursor-pointer' src={assets.next_icon} />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} />

            </div>

            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>

                </div>
                <p>{time.totaltime.minute}:{time.totaltime.second}</p>
            </div>
        </div>

        {/* right part */}
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img src={assets.plays_icon} className='w-4'/>
            <img src={assets.mic_icon} className='w-4'/>
            <img src={assets.queue_icon} className='w-4'/>
            <img src={assets.speaker_icon} className='w-4'/>
            <img src={assets.volume_icon} className='w-4'/>

            <hr className='w-20 bg-slate-50 h-1 rounded'>

            </hr>
            <img src={assets.mini_player_icon} className='w-4'/>
            <img src={assets.zoom_icon} className='w-4'/>

        </div>
    </div>

  )
}

export default Player

