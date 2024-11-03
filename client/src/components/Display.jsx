import { useEffect, useRef } from "react";
import DisplayAlbum from "./DisplayAlbum"
import DisplayHome from "./DisplayHome"
import {Route , Routes, useLocation} from 'react-router-dom'
import { albumsData } from "../assets/frontend-assets/assets";

const Display = () => {

  const location = useLocation();
  const displaRef = useRef();
  const isAlbum = location.pathname.includes('album')
  const isAlbumID = isAlbum ? location.pathname.slice(-1):"";
  const bgcolor = albumsData[Number(isAlbumID)].bgColor;

  useEffect(() => {
      if(isAlbum){
        displaRef.current.style.background = `linear-gradient(${bgcolor},#121212)`
      }
      else{
        displaRef.current.style.background = '#121212'

      }
  })
  return (
    <div ref={displaRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
        </Routes>
    </div>


  )
}

export default Display