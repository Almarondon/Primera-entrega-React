import { Card, Container, Image, Stack, CardBody, Heading, Text, CardFooter, Button, HStack } from '@chakra-ui/react'

export const ItemDetail = (props) => {
    const { product, onClickBack, onClickAdd } = props;

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
                    alt={product.name}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{product.name}</Heading>

                        <Text py='2'>
                            {product.description}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <HStack>
                            <Button variant='solid' colorScheme='green' onClick={onClickAdd}>
                                Agregar al carrito
                            </Button>
                            <Button variant='solid' colorScheme='blue' onClick={onClickBack}>
                                Atras
                            </Button>
                        </HStack>
                    </CardFooter>
                </Stack>
            </Card>
        </Container>
    )
}