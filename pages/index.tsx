import { Button, ButtonGroup, Center, Heading, Image, Link, SimpleGrid, Stack, Text, useColorMode } from '@chakra-ui/react'
import useMediaQuery from '../hooks/useMediaQuery'
import type { NextPage } from 'next'
import Container from '../Components/Container'
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const isLargerThan1100 = useMediaQuery(1100);
  const isLargerThan768 = useMediaQuery(768);
  return (
    <>
      <Container>
        <Stack spacing={16} alignItems={"center"} mt={"6vh"}>
          <Center>
            <Heading fontSize={"display3"}>
              We are
            </Heading>
          </Center>
          <SimpleGrid columns={3} alignContent={"center"} alignItems={"center"}>
            <Center>
              <Heading fontSize={"display2"}>
                Lofu
              </Heading>
            </Center>
            <Center>
              <Image src={colorMode === "dark" ? "https://i.imgur.com/i1fl6pR.gif" : "https://i.imgur.com/aeUkZeH.gif"} w={"255px"} h={"256px"} />
            </Center>
            <Center>
              <Heading fontSize={"display2"}>
                Studio
              </Heading>
            </Center>
          </SimpleGrid>
          <Text fontSize={"display3"}>
            Making cool shit that performs.
          </Text>
          <ButtonGroup spacing={8}>
            <Link href={"https://lofu.studio/github"} isExternal>
              <Button leftIcon={<AiFillGithub />} p={4}>
                Github
              </Button>
            </Link>
            <Link href={"https://lofu.studio/discord"} isExternal>
              <Button leftIcon={<FaDiscord />} p={4}>
                Discord
              </Button>
            </Link>
            <Link href={"https://lofu.studio/twitter"} isExternal>
              <Button leftIcon={<FaTwitter />} p={4}>
                Twitter
              </Button>
            </Link>
            <Link href={"https://lofu.studio/instagram"} isExternal>
              <Button leftIcon={<FaInstagram />} p={4}>
                Instagram
              </Button>
            </Link>
            <Link href={"https://lofu.studio/twitch"} isExternal>
              <Button leftIcon={<FaTwitch />} p={4}>
                Twitch
              </Button>
            </Link>
            <Link href={"https://lofu.studio/youtube"} isExternal>
              <Button leftIcon={<FaYoutube />} p={4}>
                Youtube
              </Button>
            </Link>
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  )
}

export default Home
