import { Container } from '@chakra-ui/react'

const HomeContainer = ({ greeting }) => {

    return (
        <Container maxW='container.xl'>
            {greeting}
        </Container>
    )
}

export default HomeContainer
