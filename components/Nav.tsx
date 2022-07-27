import { Button, Center, color, Divider, Flex, IconButton, Image, Stack, Tooltip, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@primer/octicons-react';
import Link from 'next/link';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Nav() {
    const { colorMode, setColorMode } = useColorMode();
    const isLargerThan768 = useMediaQuery(768);
    return (
        <>
            <Flex
                zIndex={"99"}
                position="fixed"
                w="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                px={["4vw", "4vw", "2vw"]}
                py={{ base: "1.5vh", md: "3vh" }}
                backgroundColor={colorMode === "light" ? "rgba(245, 245, 247, 0.9)" : "rgba(0, 0, 0, 0.9)"}
                backdropFilter="blur(5px)"
                borderBottom={"1px"}
                borderColor={colorMode === "light" ? "gray.200" : "gray.700"}
            >
                <Stack isInline spacing={[4, 8, 12]}>
                    <Center>
                        <Image src={colorMode === "dark" ? "https://i.imgur.com/DnfgdWr.png" : "https://i.imgur.com/8f6X3H8.png"} width={{ base: "32px", md: "48px" }} height={{ base: "32px", md: "48px" }} />
                    </Center>
                    <Center height={{ base: "25px", md: "50px" }}>
                        <Divider orientation='vertical' color={colorMode === "light" ? "gray.200" : "gray.700"} />
                    </Center>
                    <Flex align={"center"} justify={"center"}>
                        <Stack isInline spacing={8} display={isLargerThan768 ? "block" : "none"} alignItems={"center"}>
                            <Link href="/">
                                <Button variant={"ghost"} p="4" fontSize={"16px"}>
                                    Home
                                </Button>
                            </Link>
                            <Link href="/projects">
                                <Button variant={"ghost"}>
                                    Projects
                                </Button>
                            </Link>
                            <Link href="/blog">
                                <Button variant={"ghost"}>
                                    Blog
                                </Button>
                            </Link>
                        </Stack>
                    </Flex>
                </Stack>
                <Stack isInline spacing={[4, 4, 8]}>
                    <IconButton aria-label='Theme' variant={"ghost"} onClick={() => { colorMode === "dark" ? setColorMode("light") : setColorMode("dark") }}>
                        {colorMode === "dark" ? <MoonIcon size={24} /> : <SunIcon size={24} />}
                    </IconButton>
                    <Button variant={"outline"}>
                        Log in
                    </Button>
                </Stack>
            </Flex>
        </>
    )
}