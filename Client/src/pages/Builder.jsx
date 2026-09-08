import React from 'react'

function Builder({user,setUser}) {
  return (
    <div className='min-h-screen bg-[#f7f8fc] px-4 py-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-[#081028]'>
              Assistant Builder
            </h2>
            <p className='text-gray-500 mt-1'>Customize your virtual assistant</p>
          </div>
        </div>
    </div>
  )
}

export default Builder