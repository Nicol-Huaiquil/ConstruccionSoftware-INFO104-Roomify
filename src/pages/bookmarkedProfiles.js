import { Box, Text, Spinner, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
//import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";

import { uId } from "./index.js";

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

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
              <VStack
                key={perfil._id}
                shadow="md"
                borderWidth="1px"
                borderRadius="5px"
                padding="10px"
              >
                <Text>{perfil.name}</Text>
              </VStack>
            );
          })}
        </Box>
      )}
    </>
  );
}
