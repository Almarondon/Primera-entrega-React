import { Button, ButtonGroup } from '@chakra-ui/react'
import useCounter from '../hooks/useCounter'

const ItemCount = () => {
    const counter = useCounter();

    const sumar = () => {
        counter.suma()
    }

    const restar = () => {
        counter.resta()
    }

    return (
        <ButtonGroup>
            <Button colorScheme='teal' onClick={sumar}>
                +
            </Button>
            <Button>
                Agregar ({counter.contador})
            </Button>
            <Button colorScheme='teal' onClick={restar}>
                -
            </Button>
        </ButtonGroup>
    )
}

export default ItemCount