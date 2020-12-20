import {
  Box,
  Text,
  IconButton,
  Grid,
  GridItem,
  useToast,
  HStack,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import { useProfileId } from "../auth";

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const toast = useToast();
  const { push } = useRouter();

  const uId = useProfileId();

  const getProfiles = () => {
    if (!uId) return;

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
  };
  useEffect(getProfiles, [uId]);

  return (
    <>
      <TopBar title="Perfiles Guardados" route="/home" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Box className="h2 gray1">
          {profiles.length === 0 && <Text>No hay perfiles guardados.</Text>}
          {profiles.map((perfil) => {
            return (
              <VStack key={perfil._id} p="2vh" spacing="2vh" align="stretch">
                <Box shadow="md" borderWidth="1px" borderRadius="5px">
                  <Grid w="100%" templateColumns="repeat(4,1fr)">
                    <GridItem
                      display="flex"
                      alignItems="center"
                      padding="2vh"
                      colSpan={3}
                      onClick={() => {
                        push("/view_profile");
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
                          axios
                            .post("/api/deleteBookmark", {
                              uId: uId,
                              id: perfil.id,
                            })
                            .then(() => {
                              getProfiles();
                              toast({
                                title: "Perfil eliminado",
                                duration: 1000,
                                position: "top",
                                status: "success",
                              });
                            });
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
