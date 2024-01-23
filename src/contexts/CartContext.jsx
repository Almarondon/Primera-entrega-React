import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const cartItem = {
            item,
            qty,
        }

        const items = cartList.filter(r => r.item.id !== item.id);
        items.push(cartItem)

        console.log(items);
        setCartList(items);
    }

    const getQtyByProductId = (id) => {
        return cartList
            .filter(r => r.item.id === id)
            .map(r => r.qty)
            .reduce((pv, cv) => pv + cv, 0);
    }

    const getQty = () => {
        const qty = cartList.map(r => r.qty).reduce((pv, cv) => (pv + cv), 0);
        return qty;
    }

    const updateCart = (id, qty) => {
        const cartItemFounded = cartList.find(r => r.item.id == id);

        if (cartItemFounded) {
            const items = cartList.filter(r => r.item.id !== id);

            if (qty > 0) {
                const cartItem = {
                    item: cartItemFounded.item,
                    qty,
                }

                items.push(cartItem);
            }

            console.log(items);

            setCartList(items);
        }
    }

    const cleanCart = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, updateCart, cleanCart, getQty, getQtyByProductId }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
