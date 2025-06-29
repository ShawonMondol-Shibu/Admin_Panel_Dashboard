import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function OrderStatus() {
    return (
        <>
            <Popover>
                <PopoverTrigger className='flex gap-2 items-center'>Order Status <ChevronDown /> </PopoverTrigger>
                <PopoverContent>
                    hello
                </PopoverContent>
            </Popover>
        </>
    )
}
