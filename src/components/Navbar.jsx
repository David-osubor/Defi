import { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


function Navbar() {
  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black">
       <div className="container mx-auto px-4 flex justify-between items-center h-full">
      <div >
        <h1 className="text-[#00deff]">DEFI</h1>
        </div>
      <div className='hidden lg:block'>
        <ul className="flex text-white cursor-pointer">
          <li>Platform</li>
          <li>Developers</li>
          <li>Community</li>
          <li>About</li>
          <button>Use Defi</button>
        </ul>

      </div>
            {/* mobile navber */}
          <div onClick={handleNav} className='lg:hidden'>
                {nav ? <AiOutlineClose size={30} className='text-white'/> :
                <AiOutlineMenu size={30} className='text-white'/>}
           

           <div className={nav ? `w-full bg-black text-white absolute top-[80px] left-0 flex justify-center text-center` :
          `absolute left-[-100%]`
          }>
           <ul className="text-xl cursor-pointer">
          <li>Platform</li>
          <li>Developers</li>
          <li>Community</li>
          <li>About</li>
          <button className='m-8'>Use Defi</button>
        </ul>
        </div>
           </div>
      </div>
    </div>
  )
}

export default Navbar