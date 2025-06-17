import Card from '@/components/shared/Card'
import Slider from '@/components/shared/Slider'
import React from 'react'

export default function Page() {
  return (
    <div>
      
      <h1 className='text-3xl font-bold mb-8'>Products</h1>
      <Slider/>
      <div className="flex items-center my-10">
        <Card/>
      </div>
    </div>
  )
}
