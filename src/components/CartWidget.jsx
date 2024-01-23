import { Icon } from "@chakra-ui/icons"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';


const CartWidget = () => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <Icon as={FaCartShopping} /> {cartContext.getQty()}
    </div>
  )
}

export default CartWidget