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
import { useState } from "react";

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

  const [newUser, setNewUser] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [newProfile, setNewProfile] = useState({
    id: "",
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
    bookmarked: [],
    pic: "",
  });

  const newPreferences = {
    id: "",
    ageRange: [18, 35],
    sameCampus: "a",
    profilesWithCabin: "a",
  };

  return (
    <>
      <TopBar title="Crear cuenta" route="/" />

      <Box className="h2 gray1">
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
              <Input pr="4.5rem" type="password" />
            </FormControl>
          </Box>

          <Box>
            <FormControl isRequired>
              <FormLabel>Confirmar contraseña</FormLabel>
              <Input
                pr="4.5rem"
                type="password"
                value={newUser.password}
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
        </VStack>

        <Box display="flex" justifyContent="flex-end">
          <Button
            colorScheme="green"
            onClick={async () => {
              await axios.post("/api/createAccount", {
                user: newUser,
                profile: newProfile,
                preferences: newPreferences,
              });
              push("/");
            }}
          >
            Crear
          </Button>
        </Box>
      </Box>
    </>
  );
}
