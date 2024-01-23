import { useContext } from 'react'
import { Card, CardBody, Stack, Heading, Image, Divider, CardFooter, Text, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom'

const Item = ({ id, titulo, descripcion, precio, imageSrc }) => {
  const cartContext = useContext(CartContext);

  const handlerCounter = (qty, operation) => {
    if (operation === "add") {
      cartContext.addToCart({
        id,
        name: titulo,
        description: descripcion,
        price: precio
      }, qty);
    }
    else if (operation === "subtract") {
      cartContext.updateCart(id, qty);
    }
  }

  return (
    <Card maxWidth='sm' height={"460px"}>
      <CardBody>
        <Center>
          <Image
            src={imageSrc}
            style={{
              width: 120
            }}
          />
        </Center>
        <Stack marginTop='6' spacing='3'>
          <Heading size='md'>
            <Link to={`/details/${id}`}>{titulo}</Link>
          </Heading>
          <Text>
            {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={"center"}>
        <ItemCount onClick={handlerCounter} counter={cartContext.getQtyByProductId(id)} />
      </CardFooter>
    </Card>)
}

export default Item