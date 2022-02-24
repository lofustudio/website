import React from "react";
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  useColorMode,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  ButtonGroup,
  Avatar
} from "@chakra-ui/react";
import NextLink from "next/link";
import useMediaQuery from "../hook/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs"
import { VscAccount } from "react-icons/vsc";
import { useSession, signOut, signIn } from "next-auth/react";

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: session } = useSession();

  const { colorMode, toggleColorMode } = useColorMode()

  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            lofu.studio
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid borderColor"
        >
          <NextLink href="/">
            <a>
              <Text fontSize='lg' fontWeight={'bold'}>Lofu</Text>
            </a>
          </NextLink>
          {isLargerThan768 ? (
            <Box>
              <NextLink href={"/"} passHref>
                <Button as="a" variant={"ghost"} p="4" ml="3vw" fontSize={"16px"}>
                  Home
                </Button>
              </NextLink>
              <NextLink href={"/projects"} passHref>
                <Button as="a" variant={"ghost"} p="4" ml="3vw" fontSize={"16px"}>
                  Projects
                </Button>
              </NextLink>
              <NextLink href={"/blog"} passHref>
                <Button as="a" variant={"ghost"} p="4" ml="3vw" fontSize={"16px"}>
                  Blog
                </Button>
              </NextLink>
              {session ? (
                <Popover
                  placement='bottom'
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <Button variant={'ghost'} p="4" ml="3vw" fontSize={"16px"}>
                      <Avatar size="sm" name={session.user.name} src={session.user.image} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <ButtonGroup spacing={4}>
                        <Button variant={"solid"} onClick={() => signOut({ callbackUrl: '/', redirect: true })}>Sign Out</Button>
                        <NextLink href={"/profile"} passHref>
                          <Button variant={"solid"}>
                            Profile
                          </Button>
                        </NextLink>
                      </ButtonGroup>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ) : (
                <NextLink href={'/api/auth/signin'} passHref>
                  <Button as="a" variant={"solid"} p="4" ml="3vw" fontSize={'16px'}>
                    Sign In
                  </Button>
                </NextLink>
              )}
              <Button
                variant="ghost"
                p="4"
                ml="3vw"
                fontSize={"16px"}
                onClick={toggleColorMode}
              >
                {colorMode === "dark" ? <BsMoonFill /> : <BsFillSunFill />}
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                variant="ghost"
                p="4"
                ml="3vw"
                fontSize={"16px"}
              >
                {session ? (
                  <Popover
                    placement='left'
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Avatar as='a' size="sm" name={session.user.name} src={session.user.image} />
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <ButtonGroup spacing={4}>
                          <Button variant={"solid"} onClick={() => signOut({ callbackUrl: '/', redirect: true })}>Sign Out</Button>
                          <NextLink href={"/profile"} passHref>
                            <Button variant={"solid"}>
                              Profile
                            </Button>
                          </NextLink>
                        </ButtonGroup>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <NextLink href={'/api/auth/signin'} passHref>
                    <VscAccount />
                  </NextLink>
                )}
              </Button>
              <Button
                variant="ghost"
                p="4"
                ml="3vw"
                fontSize={"16px"}
                onClick={onOpen}
              >
                <AiOutlineMenu />
              </Button>
              <NavbarDrawer />
            </Box>
          )}
        </Flex>
      </Slide>
    </Box>
  );
}