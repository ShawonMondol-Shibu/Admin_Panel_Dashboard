import React from 'react'
import TeamCard from './TeamCard'

export default function Page() {
  const teams = [0,0,0,0,0,0,0,0,0,0,0,0,]
  return (
    <div>
      <h1 className='text-3xl font-bold mb-8'>Team</h1>
      <div className='flex flex-wrap items-center justify-center gap-10 w-full'>

      {
teams.map((team, i)=><TeamCard key={i}/>)
      }
      </div>
    </div>
  )
}
