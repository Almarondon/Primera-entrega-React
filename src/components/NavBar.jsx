import CardWidget from "./CartWidget"
import { Flex, Spacer, Box, Image, Link, Select } from '@chakra-ui/react'

import { Link as LinkRouter, useNavigate  } from "react-router-dom"

import almalogo from '../../public/images/almalogo.png'

const NavBar = () => {
    const navigate = useNavigate();

    const changeCategory = (evt) => {
        navigate(`category/${evt.target.value}`)
    }

    return (
        <Flex minWidth='max-content' alignItems='center' marginBottom={3} gap='2' sx={{
            backgroundColor: "rgb(240, 229, 229)"
        }}>
            <Box p={2}>
                <Image
                    fit={"cover"}
                    htmlWidth={200}
                    src={almalogo}
                    alt='Alma'
                />
            </Box>
            <Spacer />
            <Box p={2}>
                <Link variant={"unstyled"} as={LinkRouter} to='/'>Inicio</Link>
            </Box>
            <Box p={2}>
                <Link variant={"unstyled"} as={LinkRouter} to='/products'>Productos</Link>
            </Box>
            <Box p={2}>
                <Select variant={"unstyled"} onChange={changeCategory} placeholder="Categorías">
                    <option value={"hidratantes"}>Hidratantes</option>
                    <option value={"regeneradores"}>Regeneradores</option>
                </Select>
            </Box>
            <Spacer />
            <Box p={2} mr={3}>
                <CardWidget />
            </Box>
        </Flex >
    )
}

export default NavBar