import {
  Box,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  VStack,
  Select,
  Textarea,
} from "@chakra-ui/react";

export const ImageInput = ({ onChange }) => {
  return (
    <Box>
      <FormLabel>Foto de perfil</FormLabel>
      <input type="file" onChange={onChange} />
    </Box>
  );
};

export const NameInput = ({ isRequired, value, onChange }) => {
  return (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel>Nombre</FormLabel>
        <Input
          value={value}
          onChange={onChange}
          bg="white"
          borderWidth="2px"
          borderColor="#dcdcdc"
        />
      </FormControl>
    </Box>
  );
};

export const GenderInput = ({ isRequired, value, onChange }) => {
  return (
    <Box>
      <FormControl as="fieldset" isRequired={isRequired}>
        <FormLabel as="legend">Género</FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          <VStack spacing="0" align="stretch">
            <Radio value="m" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              Masculino
            </Radio>
            <Radio value="f" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              Femenino
            </Radio>
            <Radio value="o" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              Otro
            </Radio>
            <Radio value="n" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              Prefiero no responder
            </Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export const CampusInput = ({ isRequired, value, onChange }) => {
  return (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel>Campus</FormLabel>
        <Select
          placeholder="Seleccionar campus"
          value={value}
          onChange={onChange}
          bg="white"
          borderWidth="2px"
          borderColor="#dcdcdc"
        >
          <option value="Isla Teja">Isla Teja</option>
          <option value="Miraflores">Miraflores</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export const DegreeInput = ({ isRequired, value, onChange }) => {
  return (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel>Carrera</FormLabel>
        <Select
          placeholder="Seleccionar carrera"
          value={value}
          onChange={onChange}
          bg="white"
          borderWidth="2px"
          borderColor="#dcdcdc"
        >
          <option value="Administración Empresas de Turismo">
            Administración Empresas de Turismo
          </option>
          <option value="Administración Pública">Administración Pública</option>
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
          <option value="Creación Audiovisual">Creación Audiovisual</option>
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
          <option value="Ingeniería Comercial">Ingeniería Comercial</option>
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
          <option value="Interpretación Musical">Interpretación Musical</option>
          <option value="Kinesiología">Kinesiología</option>
          <option value="Licenciatura en Ciencias con Mención">
            Licenciatura en Ciencias con Mención
          </option>
          <option value="Licenciatura en Artes Visuales">
            Licenciatura en Artes Visuales
          </option>
          <option value="Medicina">Medicina</option>
          <option value="Medicina Veterinari">Medicina Veterinaria</option>
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
  );
};

export const HasCabinInput = ({ isRequired, value, onChange }) => {
  return (
    <Box>
      <FormControl isRequired={isRequired}>
        <FormLabel>Tengo cabaña</FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          <VStack spacing="0" align="stretch">
            <Radio value="s" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              Sí
            </Radio>
            <Radio value="n" bg="white" borderWidth="2px" borderColor="#dcdcdc">
              No
            </Radio>
          </VStack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export const DescriptionInput = ({ value, onChange }) => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Descripción</FormLabel>
        <Textarea
          placeholder="..."
          value={value}
          onChange={onChange}
          bg="white"
          borderWidth="2px"
          borderColor="#dcdcdc"
        />
      </FormControl>
    </Box>
  );
};
