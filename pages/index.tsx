import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'

const IndexPage = () => (
  <>
    <Container enableTransition={true}>
      <Head>
        <title>lofu.studio</title>
        <meta name="title" content="lofu.studio" />
      </Head>
      <Stack
        as="main"
        spacing="144px"
        justifyContent="center"
        alignItems="center"
        px={{ base: '5vw', md: '10vw' }}
        mt={{ base: '15vh', md: '22.5vh' }}
      >
        <Introduction />
      </Stack>
    </Container>
  </>
)

export default IndexPage
