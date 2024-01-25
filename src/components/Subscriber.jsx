

function Subscriber() {
  return (
    <div className='w-full py-16 px-8 bg-black text-white flex justify-center flex-col items-center text-center'>
      <h1>Join Our Defi Community</h1>
      <div className='py-4'>
         <input type="email" placeholder='Enter your email' className="p-3 rounded-3xl mr-2" />
         <button className="mt-2 md:mt-0">Sign Up</button>
      </div>
      <div className='flex items-center justify-center'>
          <input type="checkbox" className='md:mr-2 '/>
          <p className="">Yes, i agree to recieve email communications from Defi</p>
    </div>
    </div>
  )
}

export default Subscriber