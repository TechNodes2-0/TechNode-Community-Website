import React from 'react'
import TeamCards from '../components/TeamCards'

function Team() {
  return (
    <div className='p-10 w-full pt-20 bg-primary'>
        <p className='text-3xl font-bold text-center'>TEAM</p>
        <div className='flex flex-wrap justify-center max-w-5xl mx-auto'>
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
        </div>
    </div>
  )
}

export default Team
