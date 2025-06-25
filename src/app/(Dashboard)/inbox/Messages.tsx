import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MdMoveToInbox } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import React from 'react'
import { Search, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';



export default function Messages() {
    const sectionIcons = [MdMoveToInbox, RiErrorWarningFill, IoMdTrash]
    return (
        <div>
            <div className='flex justify-between items-center p-6'>
                <span className='flex items-center w-fit bg-[var(--colorWhite)] px-4 border rounded-2xl'>
                    <Search size={16} />
                    <Input type="search" placeholder='Search mail' className='outline-none border-none shadow-none focus-within:outline-0 focus:outline-0' />
                </span>

                <span className='flex items-center w-fit  border rounded-xl'>
                    {
                        sectionIcons.map((Icon, _) => <Button key={_} variant={"secondary"} size={'icon'} className='p-2' asChild>
                            <Icon size={16} className='' />
                        </Button>)
                    }
                </span>
            </div>

            <div>
                <div className='flex items-center justify-between w-full px-10'>
                    <span className='grid grid-cols-3 justify-center items-center'>
                        <Input type="checkbox" size={5} />
                        <Star />
                        <span className='text-sm font-bold'>Jullu Jalal</span>
                    </span>

                    <span className='flex items-center gap-4 text-sm font-semibold'>
                        <Badge className='text-xs font-semibold'>Primary</Badge>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </span>

                    <span>8:38AM</span>
                </div>
            </div>
        </div>
    )
}
