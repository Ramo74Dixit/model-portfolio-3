import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='h-[75vh] md:h-[82.25vh] w-full md:w-[40vw] ml-0 flex-shrink-0'>
        <img
          src='./HomeImage.png'
          alt='Home'
          className='h-full w-full object-cover p-4 md:p-0'
        />
      </div>

      {/* Text Section */}
      <div className='h-[9.5vh] md:h-[70vh] flex flex-col justify-center items-center w-full p-4'>
        <h1 className='text-3xl font-[Klee One] text-center'>
          MAGGY MOON
        </h1>
      </div>
    </div>
  )
}

export default Home
