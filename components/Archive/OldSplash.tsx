import { Stack, Center, Heading, SimpleGrid, useColorMode, Image, Text } from "@chakra-ui/react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function OldSplash() {
    const { colorMode } = useColorMode();
    const isLargerThan1100 = useMediaQuery(1100);
    const isLargerThan768 = useMediaQuery(768);
    return (
        <>
            <Stack spacing={16} alignItems={"center"} mt={"10vh"}>
                <Stack>
                    <Center>
                        <Heading fontSize={"display3"} pb={isLargerThan1100 ? "2vh" : "0"}>
                            We are
                        </Heading>
                    </Center>
                    <SimpleGrid columns={isLargerThan1100 ? 3 : 1} alignContent={"center"} alignItems={"center"}>
                        <Center>
                            <Heading fontSize={"display2"}>
                                Lofu
                            </Heading>
                        </Center>
                        <Center>
                            <Image src={colorMode === "dark" ? "https://i.imgur.com/i1fl6pR.gif" : "https://i.imgur.com/aeUkZeH.gif"} w={isLargerThan768 ? "256px" : "128px"} h={isLargerThan768 ? "256px" : "128px"} />
                        </Center>
                        <Center>
                            <Heading fontSize={"display2"}>
                                Studio
                            </Heading>
                        </Center>
                    </SimpleGrid>
                </Stack>
                <Text fontSize={"display3"} textAlign={"center"}>
                    Making cool shit that performs.
                </Text>
            </Stack>
        </>
    )
}