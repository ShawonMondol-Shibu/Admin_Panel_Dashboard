import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function OrderType() {
    return (
        <>
            <Popover>
                <PopoverTrigger className='flex gap-2 items-center'>Order Type <ChevronDown /> </PopoverTrigger>
                <PopoverContent>
                    <h2 className='text-lg font-bold'>Select Order Type</h2>
                </PopoverContent>
            </Popover>
        </>
    )
}
