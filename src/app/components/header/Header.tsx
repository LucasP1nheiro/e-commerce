'use client'

import { InputDialog } from './InputDialog'
import Logo from './Logo'
import Dropdown from './Dropdown'
import CartSheet from './CartSheet'
import MobileMenu from './MobileMenu'



const Header = () => {


  return (
    <nav className="w-screen h-[8vh] flex px-8 justify-between md:justify-around items-center fixed z-10 bg-primary top-0 left-0 border-b">
        <div
          className="md:flex items-center justify-center gap-8 hidden w-fit"
        >
          <Logo />
          <Dropdown />
        </div>
        <MobileMenu />
     
      
      <div className="h-full flex gap-4 items-center justify-end md:w-[300px]">
        <InputDialog />
        <CartSheet />
      </div>
    </nav>
  )
}

export default Header