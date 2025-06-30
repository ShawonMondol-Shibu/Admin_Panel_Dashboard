import React from 'react'
import Stock from './productStock-data/Stock'
import PageTitle from '@/components/ui/page-title'

export default function Page() {
  return (
    <div>
      <PageTitle>Product Stock</PageTitle>
      <main className='mt-10'>

      <Stock/>
      </main>
    </div>
  )
}
