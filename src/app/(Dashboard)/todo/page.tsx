import { Button } from '@/components/ui/button'
import PageTitle from '@/components/ui/page-title'
import React from 'react'
import TodoApp from './todoApp'

export default function Page() {
  return (
    <main>
      <div className='flex items-center justify-between' >

      <PageTitle> TO-DO List</PageTitle>
      <Button variant={"default"} size={"lg"} className='bg-(--colorSkyBlue)'>Add New Task</Button>
      </div>
      <TodoApp/>
    </main>
  )
}
