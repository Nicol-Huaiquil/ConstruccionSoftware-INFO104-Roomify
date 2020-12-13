import {
  Box,
  Text,
  IconButton,
  Spinner,
  Grid,
  GridItem,
  useToast,
  HStack,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
//import { useRouter } from "next/router";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";

import { uId } from "./index.js";

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState();

  const toast = useToast();
  const { push } = useRouter();

  useEffect(() => {
    axios
      .post("/api/getBookmarked", {
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
      .post("/api/deleteBookmark", {
        uId: uId,
        id: id,
      })
      .then(({ data }) => {
        showToast(data);
      });
  }, [id]);

  function showToast(success) {
    if (success) {
      toast({
        title: "Perfil eliminado",
        duration: 1000,
        position: "top",
        status: "success",
      });
      setId(undefined); // parche
    }
  }

  return (
    <>
      <TopBar title="Perfiles Guardados" route="/" />

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box className="h2 gray1">
          {profiles.length === 0 && <Text>No hay perfiles guardados.</Text>}
          {profiles.map((perfil) => {
            return (
              <VStack p="2vh" spacing="2vh" align="stretch">
                <Box
                  key={perfil._id}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="5px"
                >
                  <Grid w="100%" templateColumns="repeat(4,1fr)">
                    <GridItem
                      display="flex"
                      alignItems="center"
                      padding="2vh"
                      colSpan={3}
                      onClick={() => {
                        push("/viewProfile");
                      }}
                    >
                      <HStack spacing="2vh">
                        <Avatar
                          bg="teal.500"
                          height="10vh"
                          width="10vh"
                          src={perfil.pic}
                        />
                        <Text fontSize="2.8vh">{perfil.name}</Text>
                      </HStack>
                    </GridItem>
                    <GridItem className="centeredFlex">
                      <IconButton
                        bg="red.500"
                        height="6vh"
                        width="6vh"
                        icon={<ImCross size="2vh" color="white" />}
                        aria-label="Eliminar Perfil"
                        onClick={() => {
                          setId(perfil.id);
                        }}
                      />
                    </GridItem>
                  </Grid>
                </Box>
              </VStack>
            );
          })}
        </Box>
      )}
    </>
  );
}
