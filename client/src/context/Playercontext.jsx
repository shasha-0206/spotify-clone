import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";

export const Playercontext = createContext();

const PlayercontextProvider = (props) =>{

    const audioRef = useRef();
    const seekBar = useRef();
    const seekBg = useRef();

    const [track,setTrack] = useState(songsData[0])
    const [playstatus,setPlaystatus] = useState(false)

    const play = () => {
        audioRef.current.play();
        setPlaystatus(true)
    }

    const pause = () => {
        audioRef.current.pause();
        setPlaystatus(false)
    }

    const playWithId =async(id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlaystatus(true)
    }

    const seekSong = async (e) =>{
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration 

    }

    const [time,setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },

        totaltime:{
            second:0,
            minute:0
        }
    })

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playstatus,
        setPlaystatus,
        time,
        setTime,
        play,
        pause,
        playWithId,
        seekSong

    }   

    useEffect(() => {
        setTimeout(() => {

            audioRef.current.ontimeupdate = () =>{
                seekBar.current.style.width = Math.floor(audioRef.current.currentTime/audioRef.current.duration *100) +"%"
                setTime({
                    currentTime:{
                        second:Math.floor(audioRef.current.currentTime%60),
                        minute:Math.floor(audioRef.current.currentTime/60)
                    },
            
                    totaltime:{
                        second:Math.floor(audioRef.current.duration%60),
                        minute:Math.floor(audioRef.current.duration/60)
                    } 
                })

            }
        },1000)
    },[audioRef])

    return (
        <Playercontext.Provider value={contextValue}>
            {props.children}
        </Playercontext.Provider>
    )
}


export default  PlayercontextProvider