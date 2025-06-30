import PageTitle from '@/components/ui/page-title'
import React from 'react'
import Invoice from './invoice'

export default function Page() {
  return (
    <div>
      <PageTitle> Invoice</PageTitle>
    <main>
      <Invoice/>
    </main>
    </div>
  )
}
