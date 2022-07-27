import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Container from '../Components/Container'
import Intro from '../Components/Intro';
import Splash from '../Components/Splash';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Stack spacing={64}>
          <Splash />
          <Intro />
        </Stack>
      </Container>
    </>
  )
}

export default Home

