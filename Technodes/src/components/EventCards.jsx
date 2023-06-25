import React from 'react'

function EventCards() {
  return (
    <div className='m-10'>
      <div className=' max-w-sm p-5 border border-gray-700 rounded-lg shadow bg-gray-800'>
        <div className='flex flex-col items-center'>
            <img className='w-52 h-52 mb-3 ' src="https://www.marketconnectionsinc.com/wp-content/uploads/2018/02/Event-icon.png" alt="Event 1 " />
            <h5 className='text-xl font-sans font-bold text-textcolor'>Event 1</h5>
            <h4 className='my-3 font-sans text-textdark'>15-17 May</h4>
        </div>
      </div>
    </div>
  )
}

export default EventCards
