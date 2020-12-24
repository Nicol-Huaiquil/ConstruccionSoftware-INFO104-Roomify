import React from "react";
import {
  Image,
  Box,
  IconButton,
  Spinner,
  useToast,
  HStack,
  VStack,
  useDisclosure,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { AiFillMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useProfileId } from "../auth";
import { ProfileDisplay } from "../components/ProfileDisplay";
import { SquareButton } from "../components/SquareButton";
import { Menu } from "../components/Menu";

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

  const uId = useProfileId();

  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getProfiles", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uId]);

  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getProfile", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      });
  }, [uId]);

  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/bookmarkProfile", {
        uId: uId,
        id: id,
      })
      .then(({ data }) => {
        showToast(data);
      });
  }, [id, uId]);

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
        <Box className="fullscreen centeredFlex">
          <Spinner />
        </Box>
      ) : (
        <>
          <Box id="home">
            <VStack spacing="2.5vh">
              {profiles[index] ? (
                <ProfileDisplay profile={profiles[index]} />
              ) : (
                <Text>No hay perfiles para mostrar.</Text>
              )}
            </VStack>
          </Box>
          <Box id="topBar">
            <Grid h="10vh" templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem className="centeredFlex" colStart={2} colSpan={2}>
                <Image src="logoLetras.png" height="10vh" />
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
            <Menu
              isOpen={isOpen}
              onClose={onClose}
              btnRef={btnRef}
              pic={myProfile.pic}
              name={myProfile.name}
            />
          </Box>
          <Box id="bottomBar" className="centeredFlex" shadow="2xl">
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
