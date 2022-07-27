import { Heading, Stack, useColorMode, Text, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useState } from 'react';
import Container from '../../Components/Container';
import { FaSearch } from "react-icons/fa";
import Head from 'next/head';

const ProjectPage: NextPage = () => {
    const { colorMode } = useColorMode();
    const [query, setQuery] = useState("");
    return (
        <>
            <Head>
                <title>
                    Projects
                </title>
            </Head>
            <Container>
                <Stack spacing={16} alignItems={"flex-start"}>
                    <Stack align={"flex-start"} spacing={2}>
                        <Heading fontSize={"5xl"}>
                            Projects
                        </Heading>
                        <Text fontSize={"2xl"}>
                            A full list of all projects we have created or worked on.
                        </Text>
                        <InputGroup maxW={"350px"}>
                            <InputRightElement pointerEvents={"none"}>
                                <FaSearch />
                            </InputRightElement>
                            <Input placeholder="Search" type={"search"} value={query} onChange={(e) => setQuery(e.target.value)} />
                        </InputGroup>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}

export default ProjectPage;
