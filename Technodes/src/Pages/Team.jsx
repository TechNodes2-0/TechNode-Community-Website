import React from 'react'
import TeamCards from '../components/TeamCards'

function Team() {
  return (
    <div className='p-10 w-full mt-20'>
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
