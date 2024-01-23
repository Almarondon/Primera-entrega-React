import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import {
    List,
    ListItem,
    Card,
    Stack,
    CardBody,
    HStack,
    Text,
    Container,
    Grid,
    GridItem,
    Button
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const CheckoutContainer = () => {
    const toast = useToast()
    const cartContext = useContext(CartContext);

    const getTotal = () => {
        return cartContext.cartList
            .map(r => r.qty * r.item.price)
            .reduce((pv, cv) => pv + cv, 0);
    }

    const onClickBack = () => {
        history.back();
    }

    const onClickPay = () => {
        toast({
            title: 'Se realizara el pago',
            description: "Se redireccionara al portal de pagos",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }


    return <Container>
        <List spacing={3}>
            {cartContext.cartList.map(({ item, qty }, index) => {
                console.log(item);
                return (
                    <ListItem key={`item-${index}`}>
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                        >
                            <CardBody>
                                <Stack mt={5}>
                                    <Grid templateColumns='repeat(6, 1fr)' gap={10}>
                                        <GridItem w='100%'>
                                            <Text as='b'>Producto</Text>
                                        </GridItem>
                                        <GridItem w='100%'>{item.name}</GridItem>
                                        <GridItem w='100%'>
                                            <Text as='b'>Cantidad</Text>
                                        </GridItem>
                                        <GridItem w='100%'>{qty}</GridItem>
                                        <GridItem w='100%'>
                                            <Text as='b'>Total</Text>
                                        </GridItem>
                                        <GridItem w='100%'>{item.price * qty}</GridItem>
                                    </Grid>
                                </Stack>
                            </CardBody>
                        </Card>
                    </ListItem>
                )
            })}

        </List>
        <Stack mt={10}>
            <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                <GridItem textAlign={'right'} w='100%'>
                    <Text fontSize='4xl' as='b'>Total</Text>
                </GridItem>
                <GridItem textAlign={'left'} w='100%'>
                    <Text fontSize='4xl'>{getTotal()}</Text>
                </GridItem>
            </Grid>
        </Stack>
        <HStack>
            <Button variant='solid' colorScheme='green' onClick={onClickBack}>
                Atras
            </Button>
            <Button variant='solid' colorScheme='blue' onClick={onClickPay}>
                Pagar
            </Button>
        </HStack>
    </Container>
}

export default CheckoutContainer;