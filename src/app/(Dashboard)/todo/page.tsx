import { Button } from '@/components/ui/button'
import PageTitle from '@/components/ui/page-title'
import React from 'react'

export default function Page() {
  return (
    <main>
      <div >

      <PageTitle> TO-DO List</PageTitle>
      <Button variant={"default"} className='bg-(--colorSkyBlue)'>Add New Task</Button>
      </div>
    </main>
  )
}
