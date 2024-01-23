import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { fetchProductById } from "../api/services";
import { ItemDetail } from "../components/ItemDetail";
import { CartContext } from "../contexts/CartContext";

const ProductDetailContainer = () => {
    const cartContext = useContext(CartContext);
    const params = useParams();
    const back = () => {
        history.back();
    }

    const add = () => {
        const qty = cartContext.getQtyByProductId(product.id);
        cartContext.addToCart(product, qty + 1);
    }

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProductById(params.productId).then(r => {
            setProduct(r);
        });
    }, [params])

    return (
        <ItemDetail product={product} onClickBack={back} onClickAdd={add} />
    )
}

export default ProductDetailContainer
