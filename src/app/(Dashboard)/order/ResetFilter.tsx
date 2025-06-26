import { Button } from '@/components/ui/button'
import { RotateCcw } from 'lucide-react'
import React from 'react'

export default function ResetFilter() {
    return (
        <Button variant={"ghost"} className="flex gap-2 items-center text-red-500" type='reset'>
            <RotateCcw /> Reset Filter
        </Button>
    )
}
