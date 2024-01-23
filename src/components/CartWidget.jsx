import { Icon } from "@chakra-ui/icons"
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';
import { useNavigate  } from "react-router-dom"


const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();
  const handlerCart = () => {
    navigate('checkout');
  };

  return (
    <div onClick={handlerCart}>
      <Icon as={FaCartShopping} /> {cartContext.getQty()}
    </div>
  )
}

export default CartWidget