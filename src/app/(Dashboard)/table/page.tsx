'use client'
import PageTitle from '@/components/ui/page-title'
import React from 'react'
import { OrderList } from '../order/order-data/List'
import { users } from '../order/order-data/data'
import { columns } from '../order/order-data/columns'
import Stock from '../productStock/productStock-data/Stock'

export default function Page() {
  return (
    <div>
      <PageTitle> Table</PageTitle>
      <main className='mt-10'>
<div className=' border-t-2'>
   <OrderList columns={columns} data={users} />
</div>
<div className='border-t-2 pt-10 mt-10'>
  <Stock/>
</div>

      </main>
    </div>
  )
}
