import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/frontend-assets/assets.js'
const Sidebar = () => {

    const navigate = useNavigate()
    const Yoursongs = () =>{
        navigate('/Yoursongs');
    }
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>

            {/* first part contains home and search */}
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>

                {/* for Home  */}
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.home_icon} alt="" />
                    <p className='font-bold'>Home</p>

                </div>

                {/* for search */}
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img className='w-6' src={assets.search_icon} alt="" />
                    <p className='font-bold'>Search</p>

                </div>
            </div>

            {/* second part */}
            <div className='h-[85%] rounded bg-[#121212]'>

                <div className='p-4 flex items-center justify-between'>

                    {/* library */}
                    <div className='flex items-center gap-3 '>
                        <img className="w-8" src={assets.stack_icon} />
                        <p className='font-semibold'>Your Library</p>
                    </div>

                    {/* arrow and plus icons */}
                    <div className='flex items-center gap-3'>
                        <img className="w-5" src={assets.arrow_icon} />
                        <img className="w-5" src={assets.plus_icon} />

                    </div>
                </div>

                {/* liked / Your songs */}
                <div className="sidebar-item flex items-center p-3 rounded-md hover:bg-[#333] cursor-pointer" onClick={Yoursongs} >
                    <img
                        style={{ width: '50px', height: '50px', borderRadius: '4px' }}
                        src="https://media.wired.com/photos/5926df59f3e2356fd800ab80/master/w_2560%2Cc_limit/GettyImages-543338600-S2.jpg"
                        alt="Music"
                    />
                    <div className="ml-4">
                        <p className="text-white font-semibold">Your Songs</p>
                        <p className="text-gray-400 text-sm">PlayList</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar