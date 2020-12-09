import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  VStack,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Textarea,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { TopBar } from "../components/TopBar";

export default function SignUp() {
  const { push } = useRouter();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [newProfile, setNewProfile] = useState({
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
    ageRange: [18, 40],
    sameCampus: "a",
    profilesWithCabin: "a",
  });

  return (
    <>
      <TopBar color1="#679beb" color2="#679beb" title="Crear cuenta" />

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
          <Box>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                value={newProfile.name}
                onChange={(ev) => {
                  setNewProfile({
                    ...newProfile,
                    name: ev.target.value,
                  });
                }}
              />
            </FormControl>
          </Box>

          <Box>
            <FormControl isRequired>
              <FormLabel>Edad</FormLabel>
              <NumberInput min={18} max={40}>
                <NumberInputField
                  value={newProfile.age}
                  onChange={(ev) => {
                    setNewProfile({
                      ...newProfile,
                      name: ev.target.value,
                    });
                  }}
                />
              </NumberInput>
            </FormControl>
          </Box>

          <Box>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Género</FormLabel>
              <RadioGroup
                value={newProfile.gender}
                onChange={(value) => {
                  setNewProfile({
                    ...newProfile,
                    gender: value.toString(),
                  });
                }}
              >
                <VStack spacing="0" align="stretch">
                  <Radio value="m">Masculino</Radio>
                  <Radio value="f">Femenino</Radio>
                  <Radio value="o">Otro</Radio>
                  <Radio value="n">Prefiero no responder</Radio>
                </VStack>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <FormControl isRequired>
              <FormLabel>Campus</FormLabel>
              <Select
                placeholder="Seleccionar campus"
                value={newProfile.campus}
                onChange={(ev) => {
                  setNewProfile({
                    ...newProfile,
                    campus: ev.target.value,
                  });
                }}
              >
                <option value="Isla Teja">Isla Teja</option>
                <option value="Miraflores">Miraflores</option>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl isRequired>
              <FormLabel>Carrera</FormLabel>
              <Select
                placeholder="Seleccionar carrera"
                value={newProfile.degree}
                onChange={(ev) => {
                  setNewProfile({
                    ...newProfile,
                    degree: ev.target.value,
                  });
                }}
              >
                <option value="Administración Empresas de Turismo">
                  Administración Empresas de Turismo
                </option>
                <option value="Administración Pública">
                  Administración Pública
                </option>
                <option value="Agronomía">Agronomía</option>
                <option value="Antropología">Antropología</option>
                <option value="Arquitectura">Arquitectura</option>
                <option value="Artes Musicales y Sonoras">
                  Artes Musicales y Sonoras
                </option>
                <option value="Auditoría">Auditoría</option>
                <option value="Bachillerato en Cs. de la Ingeniería">
                  Bachillerato en Cs. de la Ingeniería
                </option>
                <option value="Biología Marina">Biología Marina</option>
                <option value="Bioquímica">Bioquímica</option>
                <option value="Creación Audiovisual">
                  Creación Audiovisual
                </option>
                <option value="Derecho">Derecho</option>
                <option value="Diseño">Diseño</option>
                <option value="Enfermería">Enfermería</option>
                <option value="Geografía">Geografía</option>
                <option value="Geología">Geología</option>
                <option value="Ingeniería en Alimentos">
                  Ingeniería en Alimentos
                </option>
                <option value="Ingeniería en Conservación de Recursos Naturales">
                  Ingeniería en Conservación de Recursos Naturales
                </option>
                <option value="Ingeniería Comercial">
                  Ingeniería Comercial
                </option>
                <option value="Ingeniería Civil Acústica">
                  Ingeniería Civil Acústica
                </option>
                <option value="Ingeniería Civil Electrónica">
                  Ingeniería Civil Electrónica
                </option>
                <option value="Ingeniería Civil en Informática">
                  Ingeniería Civil en Informática
                </option>
                <option value="Ingeniería Civil en Obras Civiles">
                  Ingeniería Civil en Obras Civiles
                </option>
                <option value="Ingeniería Civil Industrial">
                  Ingeniería Civil Industrial
                </option>
                <option value="Ingeniería Civil Mecánica">
                  Ingeniería Civil Mecánica
                </option>
                <option value="Ingeniería en Construcción">
                  Ingeniería en Construcción
                </option>
                <option value="Ingeniería Naval">Ingeniería Naval</option>
                <option value="Interpretación Musical">
                  Interpretación Musical
                </option>
                <option value="Kinesiología">Kinesiología</option>
                <option value="Licenciatura en Ciencias con Mención">
                  Licenciatura en Ciencias con Mención
                </option>
                <option value="Licenciatura en Artes Visuales">
                  Licenciatura en Artes Visuales
                </option>
                <option value="Medicina">Medicina</option>
                <option value="Medicina Veterinari">
                  Medicina Veterinaria
                </option>
                <option value="Obstetricia y Puericultura">
                  Obstetricia y Puericultura
                </option>
                <option value="Odontología">Odontología</option>
                <option value="Pedagogía en Comunicación en Lengua Inglesa">
                  Pedagogía en Comunicación en Lengua Inglesa
                </option>
                <option value="Pedagogía en Educación Física, Deportes y Recreación">
                  Pedagogía en Educación Física, Deportes y Recreación
                </option>
                <option value="Pedagogía en Educación Parvularia">
                  Pedagogía en Educación Parvularia
                </option>
                <option value="Pedagogía en Historia y Ciencias Sociales">
                  Pedagogía en Historia y Ciencias Sociales
                </option>
                <option value="Pedagogía en Lenguaje y Comunicación">
                  Pedagogía en Lenguaje y Comunicación
                </option>
                <option value="Periodismo">Periodismo</option>
                <option value="Psicología">Psicología</option>
                <option value="Química y Farmacia">Química y Farmacia</option>
                <option value="Tecnología Médica">Tecnología Médica</option>
                <option value="Terapia Ocupacional">Terapia Ocupacional</option>
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl as="fieldset" isRequired>
              <FormLabel as="legend">Tengo cabaña</FormLabel>
              <RadioGroup
                value=""
                onChange={(value) => {
                  setNewProfile({
                    ...newProfile,
                    hasCabin: value === "s",
                  });
                }}
              >
                <VStack spacing="0" align="stretch">
                  <Radio value="s">Sí</Radio>
                  <Radio value="n">No</Radio>
                </VStack>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                placeholder="..."
                value={newProfile.description}
                onChange={(ev) => {
                  setNewProfile({
                    ...newProfile,
                    description: ev.target.value,
                  });
                }}
              />
            </FormControl>
          </Box>
        </VStack>

        <Box display="flex" justifyContent="flex-end">
          <Button
            colorScheme="green"
            onClick={async () => {
              newProfile.preferences = preferences;
              await axios.post("/api/createProfile", newProfile);
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
