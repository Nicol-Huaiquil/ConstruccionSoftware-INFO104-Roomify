import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
  Spinner,
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
    preferences: {},
  });

  const [preferences, setPreferences] = useState({
    ageRange: [0, 0],
    sameCampus: "",
    profilesWithCabin: "",
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
        setPreferences(data.preferences);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Box id="loadingSettings" className="centeredFlex">
          <Spinner />
        </Box>
      ) : (
        <>
          <TopBar
            color1="#868686"
            color2="#aaaaaa"
            title="Opciones de búsqueda"
          />

          <Box className="h2 gray1" p="5vh">
            <VStack spacing="2vh" align="stretch">
              <Box className="option">
                <Text>Rango de edad a buscar</Text>
              </Box>

              <Box>
                <FormControl id="pCampus">
                  <FormLabel>Mostrar perfiles de campus:</FormLabel>
                  <Select
                    value={preferences.sameCampus}
                    onChange={(ev) => {
                      setPreferences({
                        ...preferences,
                        sameCampus: ev.target.value,
                      });
                    }}
                  >
                    <option value="Isla Teja">Isla Teja</option>
                    <option value="Miraflores">Miraflores</option>
                    <option value="a">Ambos</option>
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <FormControl id="cabin">
                  <FormLabel>Mostrar perfiles con cabaña</FormLabel>
                  <Select
                    value={preferences.profilesWithCabin}
                    onChange={(ev) => {
                      setPreferences({
                        ...preferences,
                        profilesWithCabin: ev.target.value,
                      });
                    }}
                  >
                    <option value="s">Sí</option>
                    <option value="n">No</option>
                    <option value="a">Ambos</option>
                  </Select>
                </FormControl>
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  colorScheme="green"
                  onClick={async () => {
                    myProfile.preferences = preferences;
                    await axios.post("/api/editarPerfil", myProfile);
                    push("/");
                  }}
                >
                  Guardar
                </Button>
              </Box>
            </VStack>
          </Box>
        </>
      )}
    </>
  );
}
