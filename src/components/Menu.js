import React from "react";
import {
  Button,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { AiFillMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { MdHelp } from "react-icons/md";
import { useRouter } from "next/router";

export const Menu = ({ isOpen, onClose, btnRef, pic, name }) => {
  const { push } = useRouter();

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <Grid
            h="100vh"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap="1vh"
            margin="1vh"
          >
            <GridItem rowSpan={2} colSpan={2}>
              <Button
                bg="gray.300"
                width="100%"
                height="100%"
                onClick={() => {
                  push("/my_profile");
                }}
              >
                <VStack>
                  <Avatar
                    bg="teal.500"
                    m="0.5vh"
                    width="12vh"
                    height="12vh"
                    src={pic}
                  />
                  <Text fontSize="3vh">{name}</Text>
                </VStack>
              </Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Button
                bg="orange.300"
                width="100%"
                height="100%"
                onClick={() => {
                  push("/messages");
                }}
              >
                <AiFillMessage size="9vh" color="white" />
              </Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Button
                bg="green.400"
                width="100%"
                height="100%"
                onClick={() => {
                  push("/bookmarked_profiles");
                }}
              >
                <BsFillBookmarkFill size="9vh" color="white" />
              </Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Button
                bg="yellow.300"
                width="100%"
                height="100%"
                onClick={() => {
                  push("/settings");
                }}
              >
                <IoMdSettings size="10vh" color="white" />
              </Button>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
              <Button bg="purple.500" width="100%" height="100%">
                <MdHelp size="10vh" color="white" />
              </Button>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2}>
              <Button
                bg="red.500"
                width="100%"
                height="100%"
                onClick={() => {
                  localStorage.removeItem("user_id");
                  push("/log_in");
                }}
              >
                <CgLogOut size="6vh" color="white" />
                <Text fontSize="2.8vh" color="white" m="1vh">
                  Cerrar sesión
                </Text>
              </Button>
            </GridItem>
          </Grid>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
