import React from 'react'
import TeamCards from '../components/TeamCards'

function Team() {
  return (
    <div className='p-10 w-full mt-20'>
        <p className='text-5xl font-bold text-center'>TEAM</p>
        <div className='flex flex-wrap justify-center'>
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
            <TeamCards/>
        </div>
    </div>
  )
}

export default Team
