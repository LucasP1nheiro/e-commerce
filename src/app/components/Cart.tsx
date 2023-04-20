import  {AiOutlineShoppingCart}  from 'react-icons/ai'
import {IsModalOpenContext} from '../context/IsModalOpenContext'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'

const Cart = () => {
    const { isModalOpen, setIsModalOpen } = useContext(IsModalOpenContext)
    const { cart } = useContext(CartContext)

    const handleCartSize = () => {
        if (cart.length < 10) return cart.length

        return "9+"
    }

  return (
      <div
          onClick={() => setIsModalOpen(true)}
          className='flex items-center justify-center text-center cursor-pointer'
      >
          <AiOutlineShoppingCart size={32} fill='#990011FF' />
          <p className="bg-strongRed h-8 w-8 p-[6px] rounded-full text-white text-sm relative right-2 bottom-4 z-50">
              {handleCartSize()}
          </p>
      </div>
  )
}

export default Cart