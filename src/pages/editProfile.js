import {
  Box,
  Grid,
  GridItem,
  Text,
  Spinner,
  VStack,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Button,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
//import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
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
      <Box className="h1 gray2">
        <Grid className="h1" templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="centeredFlex">
            <IconButton
              bg="#868686"
              width="7vh"
              height="7vh"
              type="submit"
              aria-label="Volver"
              icon={<IoIosArrowBack size="4vh" color="white" />}
              onClick={() => {
                push("/myProfile");
              }}
            ></IconButton>
          </GridItem>
          <GridItem className="centeredFlex" colSpan={2}>
            <Text fontSize="3vh" textAlign="center">
              Editar Perfil
            </Text>
          </GridItem>
        </Grid>
      </Box>

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box className="gray1" px="4vh" py="3vh">
          <VStack spacing="2vh" align="stretch">
            <Box>
              <FormControl id="name">
                <FormLabel>Nombre</FormLabel>
                <Input defaultValue={myProfile.name} />
              </FormControl>
            </Box>

            <Box>
              <FormControl id="age">
                <FormLabel>Edad</FormLabel>
                <NumberInput defaultValue={myProfile.age}>
                  <NumberInputField />
                </NumberInput>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="gender" as="fieldset">
                <FormLabel as="legend">Género</FormLabel>
                <RadioGroup defaultValue={myProfile.gender}>
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
              <FormControl id="campus">
                <FormLabel>Campus</FormLabel>
                <Select
                  placeholder="Seleccionar campus"
                  defaultValue={myProfile.campus}
                >
                  <option>Isla Teja</option>
                  <option>Miraflores</option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="degree">
                <FormLabel>Carrera</FormLabel>
                <Select
                  placeholder="Seleccionar carrera"
                  defaultValue={myProfile.degree}
                >
                  <option>Administración Empresas de Turismo</option>
                  <option>Administración Pública</option>
                  <option>Agronomía</option>
                  <option>Antropología</option>
                  <option>Arquitectura</option>
                  <option>Artes Musicales y Sonoras</option>
                  <option>Auditoría</option>
                  <option>Bachillerato en Cs. de la Ingeniería</option>
                  <option>Biología Marina</option>
                  <option>Bioquímica</option>
                  <option>Creación Audiovisual</option>
                  <option>Derecho</option>
                  <option>Diseño</option>
                  <option>Enfermería</option>
                  <option>Geografía</option>
                  <option>Geología</option>
                  <option>Ingeniería en Alimentos</option>
                  <option>
                    Ingeniería en Conservación de Recursos Naturales
                  </option>
                  <option>Ingeniería Comercial</option>
                  <option>Ingeniería Civil Acústica</option>
                  <option>Ingeniería Civil Electrónica</option>
                  <option>Ingeniería Civil en Informática</option>
                  <option>Ingeniería Civil en Obras Civiles</option>
                  <option>Ingeniería Civil Industrial</option>
                  <option>Ingeniería Civil Mecánica</option>
                  <option>Ingeniería en Construcción</option>
                  <option>Ingeniería Naval</option>
                  <option>Interpretación Musical</option>
                  <option>Kinesiología</option>
                  <option>Licenciatura en Ciencias con Mención</option>
                  <option>Licenciatura en Artes Visuales</option>
                  <option>Medicina</option>
                  <option>Medicina Veterinaria</option>
                  <option>Obstetricia y Puericultura</option>
                  <option>Odontología</option>
                  <option>Pedagogía en Comunicación en Lengua Inglesa</option>
                  <option>
                    Pedagogía en Educación Física, Deportes y Recreación
                  </option>
                  <option>Pedagogía en Educación Parvularia</option>
                  <option>Pedagogía en Historia y Ciencias Sociales</option>
                  <option>Pedagogía en Lenguaje y Comunicación</option>
                  <option>Periodismo</option>
                  <option>Psicología</option>
                  <option>Química y Farmacia</option>
                  <option>Tecnología Médica</option>
                  <option>Terapia Ocupacional</option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="hasCabin" as="fieldset">
                <FormLabel as="legend">Tengo cabaña</FormLabel>
                <RadioGroup defaultValue={myProfile.hasCabin ? "s" : "n"}>
                  <VStack spacing="0" align="stretch">
                    <Radio value="s">Sí</Radio>
                    <Radio value="n">No</Radio>
                  </VStack>
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl id="description">
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  placeholder="..."
                  defaultValue={myProfile.description}
                />
              </FormControl>
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Button
                colorScheme="green"
                onClick={() => {
                  push("/myProfile");
                }}
              >
                Guardar
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
}
