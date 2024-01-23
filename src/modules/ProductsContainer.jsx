import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Container } from '@chakra-ui/react'
import ItemList from "../components/ItemList"
import { fetchProducts } from "../api/services";

const ProductsContainer = () => {
    const params = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        fetchProducts(params.categoryId).then(r => {
            setProducts(r);
        })
    }, [ params ])

    return (
        <Container maxW='container.xl'>
            <ItemList productos={products} />
        </Container>
    )
}

export default ProductsContainer
