import React from "react";
import {
  Box,
  Button,
  IconButton,
  Spinner,
  Avatar,
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  HStack,
  VStack,
  useDisclosure,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillMessage, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import {
  IoMdSettings,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SquareButton } from "../components/SquareButton";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Home() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [myProfile, setMyProfile] = useState({
    name: "",
    pic: "",
  });
  const [id, setId] = useState();
  const [index, setIndex] = useState(0);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { push } = useRouter();

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
        <Box id="loadingHome" className="centeredFlex">
          <Spinner />
        </Box>
      ) : (
        <>
          <Box id="home" className="centeredFlex">
            <VStack spacing="2.5vh" py="2.5vh">
              {profiles[index] ? (
                <>
                  <Avatar bg="teal.500" size="2xl" src={profiles[index].pic} />
                  <VStack spacing="0">
                    <Text>{profiles[index].name}</Text>
                    <Text>{profiles[index].age} años</Text>
                    <Text>{profiles[index].degree}</Text>
                    <Text>Campus {profiles[index].campus}</Text>
                    <Text>—</Text>
                    <Text>{profiles[index].description}</Text>
                  </VStack>
                </>
              ) : (
                <Text>No hay perfiles para mostrar.</Text>
              )}
            </VStack>
          </Box>
          <Box id="topBar">
            <Grid h="10vh" templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem></GridItem>
              <GridItem className="centeredFlex" colSpan={2}>
                <Text fontSize="3vh" textAlign="center"></Text>
              </GridItem>
              <GridItem className="centeredFlex">
                <IconButton
                  bg="#679beb"
                  width="8vh"
                  height="8vh"
                  aria-label="Abrir menú"
                  icon={<TiThMenu size="6vh" color="white" />}
                  ref={btnRef}
                  onClick={onOpen}
                ></IconButton>
              </GridItem>
            </Grid>
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
                        <VStack>
                          <Avatar
                            bg="teal.500"
                            mr="1vh"
                            width="60px"
                            height="60px"
                            src={myProfile.pic}
                          />
                          <Text fontSize="3vh">{myProfile.name}</Text>
                        </VStack>
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
                      <Button
                        bg="purple.500"
                        width="100%"
                        height="100%"
                      ></Button>
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
          </Box>
          <Box id="bottomBar" className="centeredFlex">
            <HStack spacing="3vw">
              <SquareButton
                color="#50EBA1"
                icon={<IoIosArrowBack size="4.7vh" color="white" />}
                label="Anterior"
                onClick={() => {
                  decreaseIndex();
                }}
              />
              <SquareButton
                color="#EB8273"
                icon={<BsFillBookmarkFill size="4.7vh" color="white" />}
                label="Guardar perfil"
                onClick={() => {
                  setId(profiles[index].id);
                }}
              />
              <SquareButton
                color="#EBB344"
                icon={<AiFillMessage size="4.7vh" color="white" />}
                label="Solicitar contacto"
                onClick={() => {
                  toast({
                    title: "Solicitud de mensaje enviada",
                    duration: 1000,
                    position: "top",
                  });
                }}
              />
              <SquareButton
                color="#50EBA1"
                icon={<IoIosArrowForward size="4.7vh" color="white" />}
                label="Siguiente"
                onClick={() => {
                  increaseIndex();
                }}
              />
            </HStack>
          </Box>
        </>
      )}
    </>
  );
}
//export default Home;
