import Head from 'next/head'
import { Box, Center, Flex, Spinner, Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import { useSession } from 'next-auth/react';

export default function IndexPage() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') {
    return (
      <>
        <Flex
          as="header"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          width="100%"
          position="fixed"
          top="0"
          left="0"
          zIndex="99"
        >
          <Box
            as="span"
            role="img"
            aria-label="loading"
            fontSize="32px"
          >
            <Center>
              <Spinner size="xl" />
            </Center>
          </Box>
        </Flex>
      </>
    )
  }
  
    return (
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
}