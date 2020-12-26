import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { TopBar } from "../components/TopBar";

import {
  NameInput,
  CampusInput,
  GenderInput,
  DegreeInput,
  HasCabinInput,
  DescriptionInput,
} from "../components/Inputs";

export default function SignUp() {
  const { push } = useRouter();

  const [globalData, setGlobalData] = useState({
    n: 0,
  });

  useEffect(() => {
    axios.post("/api/getGlobalData").then(({ data }) => {
      setGlobalData(data);
    });
  }, []);

  const [newUser, setNewUser] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [newProfile, setNewProfile] = useState({
    id: "",
    pic: "",
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
  });

  const newPreferences = {
    id: "",
    ageRange: [18, 35],
    profilesFromCampus: "a",
    profilesWithCabin: "a",
  };

  const newBookmarked = {
    id: "",
    bookmarked: [],
  };

  return (
    <>
      <TopBar title="Crear cuenta" route="/" />
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <Box className="h2 gray1" pb="3vh">
          <Text fontSize="2.5vh" p="2.5vh">
            Datos de usuario
          </Text>

          <VStack spacing="2vh" px="5vh" align="stretch">
            <Box>
              <FormControl isRequired>
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                  type="email"
                  value={newUser.email}
                  bg="white"
                  borderWidth="2px"
                  borderColor="#dcdcdc"
                  onChange={(ev) => {
                    setNewUser({
                      ...newUser,
                      email: ev.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  pr="4.5rem"
                  type="password"
                  bg="white"
                  borderWidth="2px"
                  borderColor="#dcdcdc"
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl isRequired>
                <FormLabel>Confirmar contraseña</FormLabel>
                <Input
                  pr="4.5rem"
                  type="password"
                  value={newUser.password}
                  bg="white"
                  borderWidth="2px"
                  borderColor="#dcdcdc"
                  onChange={(ev) => {
                    setNewUser({
                      ...newUser,
                      password: ev.target.value,
                    });
                  }}
                />
              </FormControl>
            </Box>
          </VStack>

          <Text fontSize="2.5vh" p="2.5vh">
            Datos personales
          </Text>

          <VStack spacing="2vh" px="5vh" align="stretch">
            <NameInput
              isRequired={true}
              value={newProfile.name}
              onChange={(ev) => {
                setNewProfile({
                  ...newProfile,
                  name: ev.target.value,
                });
              }}
            />

            <Box>
              <FormControl isRequired>
                <FormLabel>Edad</FormLabel>
                <NumberInput min={18} max={40}>
                  <NumberInputField
                    value={newProfile.age}
                    bg="white"
                    borderWidth="2px"
                    borderColor="#dcdcdc"
                    onChange={(ev) => {
                      setNewProfile({
                        ...newProfile,
                        age: parseInt(ev.target.value),
                      });
                    }}
                  />
                </NumberInput>
              </FormControl>
            </Box>

            <GenderInput
              isRequired={true}
              value={newProfile.gender}
              onChange={(value) => {
                setNewProfile({
                  ...newProfile,
                  gender: value.toString(),
                });
              }}
            />

            <CampusInput
              isRequired={true}
              value={newProfile.campus}
              onChange={(ev) => {
                setNewProfile({
                  ...newProfile,
                  campus: ev.target.value,
                });
              }}
            />

            <DegreeInput
              isRequired={true}
              value={newProfile.degree}
              onChange={(ev) => {
                setNewProfile({
                  ...newProfile,
                  degree: ev.target.value,
                });
              }}
            />

            <HasCabinInput
              isRequired={true}
              value={newProfile.hasCabin ? "s" : "n"}
              onChange={(value) => {
                setNewProfile({
                  ...newProfile,
                  hasCabin: value === "s",
                });
              }}
            />

            <DescriptionInput
              value={newProfile.description}
              onChange={(ev) => {
                setNewProfile({
                  ...newProfile,
                  description: ev.target.value,
                });
              }}
            />
            <Box display="flex" justifyContent="flex-end">
              <Button
                colorScheme="green"
                onClick={async () => {
                  await axios.post("/api/createAccount", {
                    user: newUser,
                    profile: newProfile,
                    preferences: newPreferences,
                    bookmarked: newBookmarked,
                    globalData: globalData,
                  });
                  push("/");
                }}
              >
                Crear
              </Button>
            </Box>
          </VStack>
        </Box>
      </form>
    </>
  );
}
