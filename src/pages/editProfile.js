import {
  Box,
  Flex,
  Text,
  Spinner,
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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("/api/obtenerPerfil", {
        id: uId,
      })
      .then(({ data }) => {
        setProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box id="editProfileHeader">
        <Text fontSize="lg" textAlign="center">
          Editar Perfil
        </Text>
      </Box>

      {loading ? (
        <Box id="loadingMyProfile">
          <Spinner />
        </Box>
      ) : (
        <Box id="editProfile">
          <Box className="option">
            <FormControl id="name">
              <FormLabel>Nombre</FormLabel>
              <Input defaultValue={profile.name} />
            </FormControl>
          </Box>

          <Box className="option">
            <FormControl id="age">
              <FormLabel>Edad</FormLabel>
              <NumberInput defaultValue={profile.age}>
                <NumberInputField />
              </NumberInput>
            </FormControl>
          </Box>

          <Box className="option">
            <FormControl id="gender" as="fieldset">
              <FormLabel as="legend">Género</FormLabel>
              <RadioGroup defaultValue={profile.gender}>
                <ul>
                  <li>
                    <Radio value="m">Masculino</Radio>
                  </li>
                  <li>
                    <Radio value="f">Femenino</Radio>
                  </li>
                  <li>
                    <Radio value="o">Otro</Radio>
                  </li>
                  <li>
                    <Radio value="n">Prefiero no responder</Radio>
                  </li>
                </ul>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className="option">
            <FormControl id="campus">
              <FormLabel>Campus</FormLabel>
              <Select
                placeholder="Seleccionar campus"
                defaultValue={"Campus " + profile.campus}
              >
                <option>Campus Isla Teja</option>
                <option>Campus Miraflores</option>
              </Select>
            </FormControl>
          </Box>

          <Box className="option">
            <FormControl id="degree">
              <FormLabel>Carrera</FormLabel>
              <Select
                placeholder="Seleccionar carrera"
                defaultValue={profile.degree}
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

          <Box className="option">
            <FormControl id="hasCabin" as="fieldset">
              <FormLabel as="legend">Tengo cabaña</FormLabel>
              <RadioGroup defaultValue={profile.hasCabin ? "s" : "n"}>
                <ul>
                  <li>
                    <Radio value="s">Sí</Radio>
                  </li>
                  <li>
                    <Radio value="n">No</Radio>
                  </li>
                </ul>
              </RadioGroup>
            </FormControl>
          </Box>

          <Box className="option">
            <FormControl id="description">
              <FormLabel>Descripción</FormLabel>
              <Textarea placeholder="..." defaultValue={profile.description} />
            </FormControl>
          </Box>

          <Flex py="4%" px="8%" justify="right">
            <Button colorScheme="green">Guardar</Button>
          </Flex>
        </Box>
      )}
    </>
  );
}
