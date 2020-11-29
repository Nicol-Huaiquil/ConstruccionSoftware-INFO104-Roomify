import React from "react";
import {
  Button,
  Flex,
  Stack,
  Spinner,
  Avatar,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [myProfile, setMyProfile] = useState({
    pic: "",
  });
  const [loading, setLoading] = useState(true);
  //const [success, setSuccess] = useState(false);
  const [id, setId] = useState();
  const [index, setIndex] = useState(0);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { push, pathname } = useRouter();
  useEffect(() => {
    axios
      .post("/api/obtenerPerfiles", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .post("/api/obtenerPerfil", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      });
  }, []);

  useEffect(() => {
    axios
      .post("/api/marcarPerfil", {
        uId: uId,
        id: id,
      })
      .then(({ data }) => {
        showToast(data);
      });
  }, [id]);

  function increaseIndex() {
    profiles[index + 1] ? setIndex(index + 1) : setIndex(0);
  }

  function decreaseIndex() {
    profiles[index - 1] ? setIndex(index - 1) : setIndex(profiles.length - 1);
  }

  function showToast(success) {
    if (success) {
      toast({
        title: "Perfil guardado",
        duration: 1000,
        position: "top",
        status: "success",
      });
      setId(undefined); // parche
    }
  }

  return (
    <>
      {loading ? (
        <div id="loadingHome">
          <Spinner />
        </div>
      ) : (
        <>
          <div id="topBar">
            <Button
              bg="#679beb"
              width="8vh"
              height="8vh"
              padding="0px"
              margin="2vh"
              ref={btnRef}
              onClick={onOpen}
            >
              <TiThMenu size="6vh" color="white" />
            </Button>
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
                          push("/myProfile");
                        }}
                      >
                        <>
                          <Avatar
                            bg="teal.500"
                            width="60px"
                            height="60px"
                            src={myProfile.pic}
                          />
                          <Text fontSize="3vh"> Ver perfil</Text>
                        </>
                      </Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1}>
                      <Button bg="orange.300" width="100%" height="100%">
                        <AiFillMessage size="9vh" />
                      </Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1}>
                      <Button
                        bg="green.400"
                        width="100%"
                        height="100%"
                        onClick={() => {
                          push("/bookmarkedProfiles");
                        }}
                      >
                        <BsFillBookmarkFill size="9vh" />
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
                        <IoMdSettings size="10vh" />
                      </Button>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1}>
                      <Button bg="purple.500" width="100%" height="100%">
                        XD
                      </Button>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                      <Button bg="red.500" width="100%" height="100%">
                        <CgLogOut size="6vh" color="white" />
                        <Text fontSize="xl" color="white" m="1vh">
                          Cerrar sesión
                        </Text>
                      </Button>
                    </GridItem>
                  </Grid>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </div>
          <div id="home">
            {profiles[index] ? (
              <ul>
                <li>
                  <Avatar
                    bg="teal.500"
                    size="2xl"
                    m="4%"
                    src={profiles[index].pic}
                  />
                </li>
                <li>{profiles[index].name}</li>
                <li>{profiles[index].age} años</li>
                <li>{profiles[index].degree}</li>
                <li>Campus {profiles[index].campus}</li>
                <li>—</li>
                <li>{profiles[index].description}</li>
              </ul>
            ) : (
              <ul>
                <li>No hay perfiles para mostrar.</li>
              </ul>
            )}
          </div>
          <div id="bottomBar">
            <Stack alignItems="center">
              <Flex>
                <Button
                  bg="#50EBA1"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    decreaseIndex();
                  }}
                >
                  <AiOutlineArrowLeft size="30px" color="white" />
                </Button>

                <Button
                  bg="#EB8273"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    setId(profiles[index].id);
                  }}
                >
                  <BsFillBookmarkFill size="30px" color="white" />
                </Button>

                <Button
                  bg="#EBB344"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    toast({
                      title: "Solicitud de mensaje enviada",
                      duration: 1000,
                      position: "top",
                    });
                  }}
                >
                  <AiFillMessage size="30px" color="white" />
                </Button>

                <Button
                  bg="#50EBA1"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    increaseIndex();
                  }}
                >
                  <AiOutlineArrowRight size="30px" color="white" />
                </Button>
              </Flex>
            </Stack>
          </div>
        </>
      )}
    </>
  );
}
//export default Home;
