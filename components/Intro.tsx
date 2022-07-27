import { Heading, Stack, Text } from "@chakra-ui/react";

export default function Intro() {
    return (
        <>
            <Stack alignItems={"center"} p={0}>
                <Stack alignItems={"center"}>
                    <Text color={"tiny"}>
                        or down, that works too but...
                    </Text>
                    <Heading textAlign={"center"} fontSize={"6xl"}>
                        Who even are you?!
                    </Heading>
                </Stack>
                <Text fontSize={"xl"} color={"text"} textAlign={"center"} px={"80"}>
                    Founded in 2021, Lofu is currently just two knuckleheads messing around with TypeScript, Node and other technologies trying to make a name for ourselfs.
                </Text>
            </Stack>
        </>
    )
}