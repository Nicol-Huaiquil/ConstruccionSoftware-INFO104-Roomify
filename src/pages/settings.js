import { Box, Text, FormControl, FormLabel, Select } from "@chakra-ui/react";

import { TopBar } from "../components/TopBar";

export default function Settings() {
  return (
    <>
      <TopBar color1="#868686" color2="#aaaaaa" title="Opciones de búsqueda" />

      <Box className="h2 gray1" p="5vh">
        <Box className="option">
          <Text>Rango de edad a buscar</Text>
        </Box>

        <Box>
          <FormControl id="campus">
            <FormLabel>Mostrar perfiles de campus:</FormLabel>
            <Select placeholder="Seleccionar campus">
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
      </Box>
    </>
  );
}
