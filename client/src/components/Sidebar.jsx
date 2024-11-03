import { assets } from '../assets/frontend-assets/assets.js'
const Sidebar = () => {
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
                
                {/* create your playlist section */}
                <div className='p-4 bg-[#242424] rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1 >Create Your First Playlist</h1>
                    <p className='font-light '>Its easy we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
                    
                </div>

                <div className='p-4 bg-[#242424] rounded m-2 font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1 >Lets find some podcast to follow</h1>
                    <p className='font-light '>we will keep you update on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcast</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar