import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
  Spinner,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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

  const [minAge, setMinAge] = useState(17);
  const [maxAge, setMaxAge] = useState(40);

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
            color1="#679beb"
            color2="#679beb"
            title="Opciones de búsqueda"
          />

          <Box className="h2 gray1" p="5vh">
            <VStack spacing="2vh" align="stretch">
              <Box className="option">
                <Text>Rango de edad a buscar</Text>
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                  <GridItem colSpan={2} h="10">
                    <NumberInput
                      defaultValue={17}
                      min={18}
                      max={40}
                      onChange={(ev) => {
                        setMinAge(ev);
                      }}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper children="+" />
                        <NumberDecrementStepper children="-" />
                      </NumberInputStepper>
                    </NumberInput>
                  </GridItem>

                  <GridItem className="centeredFlex">
                    <Text>-</Text>
                  </GridItem>

                  <GridItem colStart={4} colEnd={6} h="10">
                    <NumberInput
                      defaultValue={40}
                      min={18}
                      max={40}
                      onChange={(ev) => {
                        setMaxAge(ev);
                      }}
                      /*onChange={(ev) => {
                        setPreferences({
                          ...preferences,
                          ageRange: ev.target.value,
                        });
                      }}*/
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper children="+" />
                        <NumberDecrementStepper children="-" />
                      </NumberInputStepper>
                    </NumberInput>
                  </GridItem>
                </Grid>
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
                    preferences.ageRange = [minAge, maxAge];
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
