import {
  Box,
  Text,
  Spinner,
  Grid,
  GridItem,
  useToast,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SquareButton } from "../components/SquareButton";
//import { useRouter } from "next/router";
import { BiBookmarkMinus } from "react-icons/bi";
import { TopBar } from "../components/TopBar";

import { uId } from "./index.js";

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const toast = useToast();

  useEffect(() => {
    axios
      .post("/api/obtenerPerfilesGuardados", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TopBar color1="#679beb" color2="#679beb" title="Perfiles Guardados" />

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box className="h2 gray1">
          {profiles.length === 0 && <Text>No hay perfiles guardados.</Text>}
          {profiles.map((perfil) => {
            return (
              <Box
                display="flex"
                key={perfil._id}
                shadow="md"
                borderWidth="1px"
                borderRadius="5px"
                padding="2vh"
              >
                <Grid w="100%" templateColumns="repeat(4,1fr)" gap={4}>
                  <GridItem
                    display="flex"
                    alignItems="center"
                    padding="2vh"
                    colSpan={3}
                  >
                    <HStack>
                      <Avatar bg="teal.500" size="md" src={perfil.pic} />
                      <Text>{perfil.name}</Text>
                    </HStack>
                  </GridItem>
                  <GridItem className="centeredFlex">
                    <SquareButton
                      color="red.500"
                      icon={<BiBookmarkMinus size="4.7vh" color="white" />}
                      label="Eliminar Perfil"
                      onClick={() => {
                        toast({
                          title: "Perfil Eliminado",
                          duration: 1000,
                          position: "top",
                        });
                      }}
                    />
                  </GridItem>
                </Grid>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}
