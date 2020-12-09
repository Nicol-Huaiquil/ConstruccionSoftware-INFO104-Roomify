import { Box, Text, Spinner, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
//import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

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
