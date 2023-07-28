import React from 'react'
import EventCards from '../components/EventCards'

function Events() {
  return (
    <div className="p-10 w-full pt-20 bg-primary">
        <p className='text-3xl font-bold text-center'>Upcoming Events
        </p>
        <div className='flex flex-wrap flex-row justify-center max-w-5xl mx-auto '>
          
                <EventCards/>
                <EventCards/>
                <EventCards/>
                <EventCards/>
        </div>
    </div>
  )
}

export default Events
