import { Stack, Center, Heading, SimpleGrid, useColorMode, Image, Text } from "@chakra-ui/react";
import useMediaQuery from "../hooks/useMediaQuery";

export default function OldSplash() {
    const { colorMode } = useColorMode();
    const isLargerThan1100 = useMediaQuery(1100);
    const isLargerThan768 = useMediaQuery(768);
    return (
        <>
            <Stack spacing={16} alignItems={"center"} mt={"5vh"}>
                <Stack justifyContent={"center"} alignItems={"center"} mt={isLargerThan768 ? "" : "10vh"}>
                    <Center>
                        <Image src={colorMode === "dark" ? "/assets/dark.png" : "/assets/light.png"} w={isLargerThan768 ? "350px" : "250px"} h={isLargerThan768 ? "350px" : "250px"} />
                    </Center>
                    <Heading fontSize={"display2"} textAlign={"center"}>
                        Lofu Studio
                    </Heading>
                    <Text fontSize={"display3"} textAlign={"center"} color={"text"}>
                        Only up from here.
                    </Text>
                </Stack>
            </Stack>
        </>
    )
}