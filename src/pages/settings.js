import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Select,
  Button,
  VStack,
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
import { useProfileId } from "../auth";
import { LoadingScreen } from "../components/LoadingScreen";

import { TopBar } from "../components/TopBar";

export default function Settings() {
  const [preferences, setPreferences] = useState({
    ageRange: [18, 35],
    profilesFromCampus: "",
    profilesWithCabin: "",
  });

  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  const uId = useProfileId();
  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getPreferences", {
        id: uId,
      })
      .then(({ data }) => {
        setPreferences(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uId]);

  const [minAge, setMinAge] = useState(preferences.ageRange[0]);
  const [maxAge, setMaxAge] = useState(preferences.ageRange[1]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <TopBar title="Opciones de búsqueda" route="/home" />

          <Box className="h2 gray1" p="5vh">
            <VStack spacing="2vh" align="stretch">
              <Box className="option">
                <Text>Rango de edad a buscar</Text>
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                  <GridItem colSpan={2} h="10">
                    <NumberInput
                      defaultValue={minAge}
                      min={18}
                      max={40}
                      onChange={(ev) => {
                        setMinAge(parseInt(ev));
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
                      defaultValue={maxAge}
                      min={18}
                      max={40}
                      onChange={(ev) => {
                        setMaxAge(parseInt(ev));
                      }}
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
                    value={preferences.profilesFromCampus}
                    onChange={(ev) => {
                      setPreferences({
                        ...preferences,
                        profilesFromCampus: ev.target.value,
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
                    await axios.post("/api/savePreferences", preferences);
                    push("/home");
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
