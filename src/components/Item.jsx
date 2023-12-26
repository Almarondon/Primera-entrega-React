import { Card, CardBody, Stack, Heading, Image, Divider, CardFooter, Text, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ id, titulo, descripcion, precio, imageSrc }) => {
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
        <ItemCount />
      </CardFooter>
    </Card>)
}

export default Item