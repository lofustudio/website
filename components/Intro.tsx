import { Heading, Stack, Text } from "@chakra-ui/react";

export default function Intro() {
    return (
        <>
            <Stack alignItems={"center"} p={0}>
                <Stack alignItems={"center"}>
                    <Text color={"text"}>
                        or down, that works too but...
                    </Text>
                    <Heading textAlign={"center"} fontSize={"display3"}>
                        Who even are you?!
                    </Heading>
                </Stack>
                <Text fontSize={"xl"} color={"text"} textAlign={"center"} px={[5, 10, 20, 40, 80]}>
                    Founded in 2021, Lofu is currently just two gay ahh knuckleheads messing around with TypeScript, Node and other technologies trying to make a name for ourselfs.
                </Text>
            </Stack>
        </>
    )
}