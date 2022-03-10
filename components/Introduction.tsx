import { Heading, Stack, Center, SimpleGrid, Image, Flex, Button } from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord, FaTwitch } from "react-icons/fa"
import NextLink from 'next/link';
import { useColorMode } from '@chakra-ui/react';
import useMediaQuery from '../hook/useMediaQuery';

export default function Introduction() {
    const isLargerThan767 = useMediaQuery(767);
    const isLargerThan600 = useMediaQuery(600);
    const isLargerThan1100 = useMediaQuery(1100);

    const { colorMode } = useColorMode();

    return (
        <>
            <Stack>
                <Center>
                    <Heading fontSize={'display2'} mb={{ base: "10px", md: "3vw" }}>
                        We are...
                    </Heading>
                </Center>
                <SimpleGrid columns={isLargerThan767 ? 3 : 1} spacing={4}>
                    <Center>
                        <Heading fontSize={'display'}>
                            Lofu
                        </Heading>
                    </Center>
                    <Center>
                        <Image src={colorMode === 'light' ? 'https://i.imgur.com/aeUkZeH.gif' : 'https://i.imgur.com/i1fl6pR.gif'} w={isLargerThan1100 ? '256px' : '128px'} h={isLargerThan1100 ? '256px' : '128px'} />
                    </Center>
                    <Center>
                        <Heading fontSize={'display'}>
                            Studio
                        </Heading>
                    </Center>
                </SimpleGrid>
                <SimpleGrid pt="8%" columns={isLargerThan1100 ? 6 : 3} spacing={'5vw'}>
                    <NextLink href='https://github.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<AiOutlineGithub />} size={isLargerThan600 ? "md" : "sm"}>
                            GitHub
                        </Button>
                    </NextLink>
                    <NextLink href='https://twitter.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<AiOutlineTwitter />} size={isLargerThan600 ? "md" : "sm"}>
                            Twitter
                        </Button>
                    </NextLink>
                    <NextLink href='https://instagram.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<AiOutlineInstagram />} size={isLargerThan600 ? "md" : "sm"}>
                            Instagram
                        </Button>
                    </NextLink>
                    <NextLink href='https://lofu.studio/discord' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<FaDiscord />} size={isLargerThan600 ? "md" : "sm"}>
                            Discord
                        </Button>
                    </NextLink>
                    <NextLink href='https://twitch.tv/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<FaTwitch />} size={isLargerThan600 ? "md" : "sm"}>
                            Twitch
                        </Button>
                    </NextLink>
                    <NextLink href='mailto:hello@lofu.studio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan1100 ? 'xl' : '4xl'} leftIcon={<AiOutlineMail />} size={isLargerThan600 ? "md" : "sm"}>
                            E-Mail
                        </Button>
                    </NextLink>
                </SimpleGrid>
            </Stack>
        </>
    )
}