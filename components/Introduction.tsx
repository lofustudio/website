import { Heading, Stack, Center, SimpleGrid, Image, Flex, Button } from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { FaDiscord, FaTwitch } from "react-icons/fa"
import NextLink from 'next/link';
import useMediaQuery from '../hook/useMediaQuery';

export default function Introduction() {
    const isLargerThan800 = useMediaQuery(800);
    const isLargerThan1100 = useMediaQuery(1100);

    return (
        <>
            <Stack>
                <Center>
                    <Heading fontSize={'display2'} mb="3vw">
                        We are...
                    </Heading>
                </Center>
                <SimpleGrid columns={isLargerThan1100 ? 3 : 1} spacing={4}>
                    <Center>
                        <Heading fontSize={'display'}>
                            Lofu
                        </Heading>
                    </Center>
                    <Center>
                        <Image src={'https://i.imgur.com/MJOdmkv.gif'} w='256px' h='256px' />
                    </Center>
                    <Center>
                        <Heading fontSize={'display'}>
                            Studio
                        </Heading>
                    </Center>
                </SimpleGrid>
                <SimpleGrid pt="8%" columns={isLargerThan1100 ? 6 : 2} spacing={'5vw'}>
                    <NextLink href='https://github.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<AiOutlineGithub />} size={isLargerThan800 ? "md" : "sm"}>
                            GitHub
                        </Button>
                    </NextLink>
                    <NextLink href='https://twitter.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<AiOutlineTwitter />} size={isLargerThan800 ? "md" : "sm"}>
                            Twitter
                        </Button>
                    </NextLink>
                    <NextLink href='https://instagram.com/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<AiOutlineInstagram />} size={isLargerThan800 ? "md" : "sm"}>
                            Instagram
                        </Button>
                    </NextLink>
                    <NextLink href='https://lofu.studio/discord' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<FaDiscord />} size={isLargerThan800 ? "md" : "sm"}>
                            Discord
                        </Button>
                    </NextLink>
                    <NextLink href='https://twitch.tv/lofustudio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<FaTwitch />} size={isLargerThan800 ? "md" : "sm"}>
                            Twitch
                        </Button>
                    </NextLink>
                    <NextLink href='mailto:hello@lofu.studio' passHref>
                        <Button as="a" variant="solid" fontSize={isLargerThan800 ? "20px" : "16px"} leftIcon={<AiOutlineMail />} size={isLargerThan800 ? "lg" : "sm"}>
                            E-Mail
                        </Button>
                    </NextLink>
                </SimpleGrid>
            </Stack>
        </>
    )
}