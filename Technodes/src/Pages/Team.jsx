const people = [
  {
    name: 'Nishit Bariya',
    role: 'Full Stack Developer', 
    imageUrl:
      'https://avatars.githubusercontent.com/u/85815172?v=4',
  },
  {
    name : "Yash suthar", 
    role : "Full Stack Developer",
    imageUrl : "https://avatars.githubusercontent.com/u/98970491?s=100&v=4" 
  },
  {
    name : "Jayesh Yadav", 
    role : "Full Stack Developer",
    imageUrl : "https://avatars.githubusercontent.com/u/107855172?s=100&v=4" 
  },
  {
    name : "Vinayak vispute",
    role : "Full Stack Developer",
    imageUrl : "https://avatars.githubusercontent.com/u/93467074?s=100&v=4" 
  },
  {
    name : "Kartik Bhatiya",
    role : "Junior Web Developer",
    imageUrl : "https://avatars.githubusercontent.com/u/95977507?v=4"
  },
  
]

export default function Team() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-white">
          We're a group of developers Who Love to Build Project Help to Solve Real World Problems. 
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
