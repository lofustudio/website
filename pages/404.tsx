import Head from "next/head";
import { Flex, Heading, Stack } from "@chakra-ui/react";
import Container from "../Components/Container";

export default function ErrorPage() {
    return (
        <>
            <Container>
                <Head>
                    <title>404</title>
                </Head>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    height={"auto"}
                >
                    <Stack alignItems="center">
                        <Heading fontSize="display">404</Heading>
                        <Heading fontSize={{ base: "md", md: "2xl", lg: "4xl" }} textAlign={"center"}>
                            The requested page doesn&apos;t exist or you don&apos;t have access
                            to it.
                        </Heading>
                    </Stack>
                </Flex>
            </Container>
        </>
    );
}
