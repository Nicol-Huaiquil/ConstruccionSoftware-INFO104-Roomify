import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { TopBar } from "../components/TopBar";
let uId = "14125"; // Matilde Valera

export default function Settings() {
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
    preferences: {
      ageRange: [0, 0],
      sameCampus: "",
      profilesWithCabin: "",
    },
  });
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
    axios
      .post("/api/obtenerPerfil", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <TopBar color1="#868686" color2="#aaaaaa" title="Opciones de búsqueda" />

      <Box className="h2 gray1" p="5vh">
        <VStack spacing="2vh" align="stretch">
          <Box className="option">
            <Text>Rango de edad a buscar</Text>
          </Box>

          <Box>
            <FormControl id="pCampus">
              <FormLabel>Mostrar perfiles de campus:</FormLabel>
              <Select
                placeholder="Seleccionar campus"
                value={myProfile.preferences.sameCampus}
                onChange={(ev) => {
                  setMyProfile({
                    ...myProfile,
                    preferences.sameCampus: ev.target.value,
                  });
                }}
              >
                <option value="Isla Teja">Isla Teja</option>
                <option value="Miraflores">Miraflores</option>
                <option value="Ambos">Ambos</option>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl id="cabaña">
              <FormLabel>Mostrar perfiles con cabaña</FormLabel>
              <Select>
                <option value="CabañaSi">Si</option>
                <option value="CabañaNo">No</option>
                <option value="CabañaAmbos">Ambos</option>
              </Select>
            </FormControl>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button
              colorScheme="green"
              onClick={async () => {
                await axios.post("/api/editarPerfil", myProfile);
                push("/myProfile");
              }}
            >
              Guardar
            </Button>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
