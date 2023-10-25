import React from 'react'
import EventCard from './EventCard'

export default function EventCards() {
  return (
    <section id='events' className='bg-[#293140]'>
    <div className='layout py-20'>
      <h1 className='h1'> Events </h1>
      <hr className='styled-hr my-6' />
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {eventsData2.map((event) => (
          <EventCard {...event} key={event.image} />
        ))}
      </div>
    </div>
  </section>
  )
}



// Event Data section for the Event Cards   

const eventsData2 = [
    {
      title: 'Hacktoberfest 2021',
      description:
        'Hacktoberfest is an annual month-long celebration of open-source software run by DigitalOcean. It encourages individuals of all skill levels to engage with open-source software during the month of October and is open to everyone in our global community.',
      image: "https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBakVhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ec16f7fc3d72121459ba4bcd45d5073a195ae5b4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--bb74e2531ca3e0ee463ad8c55d04110fcf863b74/MLH@2x-8.png",
      url: 'https://events.mlh.io/events/10181-hack-this-fall-x-hacktoberfest-23-in-person-edition',
      btnText: 'Know more',
    },

  ];