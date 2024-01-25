import React from 'react'

function Subscriber() {
  return (
    <div className='w-full py-a6 px-8 bg-black text-white text-center'>
      <h1>Join Our Defi Community</h1>
      <div className='py-4'>
         <input type="email" placeholder='Enter your email' className="p-3 rounded-3xl mr-2" />
         <button>Sign Up</button>
      </div>
      <div className='flex items-center justify-center '>
          <input type="checkbox" className='mr-3'/>
          <p>Yes, i agree to recieve email communications from Defi</p>
    </div>
    </div>
  )
}

export default Subscriber