import { useNavigate } from "react-router-dom"
import { assets } from "../assets/frontend-assets/assets"

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>

      <div className="w-full flex items-center justify-between font-semibold">

        {/* arrows */}
        <div className="flex items-center gap-2">
          <img onClick={() => navigate(-1)} src={assets.arrow_left} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
          <img onClick={() => navigate(1)} src={assets.arrow_right} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />

        </div>

        {/* three buttons */}
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
          <p className="bg-black text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Install App</p>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer " >S</p>

        </div>

      </div>

      <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>

      </div>

    </>
  )
}

export default Navbar