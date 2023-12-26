import { useEffect, useState } from "react";
import { Card, Container, Image, Stack, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react'
import { useParams } from "react-router-dom"
import { fetchProductById } from "../api/services";

const ProductDetailContainer = () => {
    const params = useParams();
    const back = () => {
        history.back();
    }

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProductById(params.productId).then(r => {
            setProduct(r);
        });
    }, [params])

    return (
        <Container maxW='container.xl'>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={product.imageSrc}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{product.nombre}</Heading>

                        <Text py='2'>
                            {product.descripcion}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' onClick={back}>
                            Atras
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Container>
    )
}

export default ProductDetailContainer
