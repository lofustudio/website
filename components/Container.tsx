import { Flex } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            <Flex
                justifyContent={"flex-start"}
                flexDirection={"column"}
                py={["10vh", "10vh", "16vh", "16vh"]}
                px={["4vw", "4vw", "8vw", "8vw"]}
            >
                {children}
            </Flex>
        </>
    )
}