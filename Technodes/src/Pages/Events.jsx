import React from 'react'
import EventCards from '../components/EventCards'

function Events() {
  return (
    <div className="p-10 w-full mt-20">
        <p className='text-5xl font-bold text-center'>Events
        </p>
        <div className='flex flex-wrap justify-center'>
            <div>
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
            </div>
        </div>
    </div>
  )
}

export default Events
