import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

import useCounter from '../hooks/useCounter'

const ItemCount = (props) => {
    const { onClick, counter = 0 } = props
    const [ operation, setOperation ] = useState();
    const { contador, suma, resta } = useCounter(counter);

    useEffect(() => {
        if(typeof onClick !== "undefined") {
            onClick(contador, operation)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contador, operation])

    const sumar = () => {
        suma()
        setOperation("add");
    }

    const restar = () => {
        resta()
        setOperation("subtract")
    }

    return (
        <ButtonGroup>
            <Button colorScheme='teal' onClick={sumar}>
                +
            </Button>
            <Button>
                Agregar ({contador})
            </Button>
            <Button colorScheme='teal' onClick={restar}>
                -
            </Button>
        </ButtonGroup>
    )
}

export default ItemCount