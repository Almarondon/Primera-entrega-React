import CardWidget from "./CartWidget"
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button, Stack, Image } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"

const NavBar = () => {
    return (
        <Flex sx={{
            backgroundColor: "rgb(240, 229, 229)"
        }}>
            <Box >
                <Stack direction='row'>
                    <Image
                        fit={"cover"}
                        htmlWidth={200}
                        src='https://almarondon.github.io/entrega-final/images/almalogo.png'
                        alt='Dan Abramov'
                    />
                </Stack>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Idiomas
                </MenuButton>
                <MenuList>
                    <MenuItem>🇪🇸 Español</MenuItem>
                    <MenuItem>🇺🇸 English</MenuItem>
                </MenuList>
            </Menu>
            <Box >
                <CardWidget />
            </Box>
        </Flex>
    )
}

export default NavBar