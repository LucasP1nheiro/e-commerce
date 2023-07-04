import React, { useState } from 'react'

import {BiMenuAltLeft} from 'react-icons/bi'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { Button } from '../ui/button'
import Logo from './Logo'
import { CategoriesAccordion } from './CategoriesAccordion'

const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleSheetClose = () => {
    setIsSheetOpen(false)
  }

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={() => setIsSheetOpen(prev => !prev)}
    >
        <SheetTrigger>
          <Button
            className='cursor-pointer border hover:bg-white/10 flex items-center p-1 md:hidden'
            size="icon"
            asChild
          >
            <BiMenuAltLeft />
          </Button>
        </SheetTrigger>
        <SheetContent 
            className=" overflow-scroll overflow-x-hidden flex flex-col gap-12"
            side="left"
        >
            <SheetHeader className="flex flex-row items-center gap-4 py-2 border-b">
                <SheetTitle>
                  <Logo handleSheetClose={handleSheetClose}/>
                </SheetTitle>
            </SheetHeader>
            <CategoriesAccordion handleSheetClose={handleSheetClose}/>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu