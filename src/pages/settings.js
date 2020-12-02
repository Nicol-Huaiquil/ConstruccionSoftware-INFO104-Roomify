import { Box, Text } from "@chakra-ui/react";

import { TopBar } from "../components/TopBar";

export default function Settings() {
  return (
    <>
      <TopBar color1="#868686" color2="#aaaaaa" title="Opciones" />

      <Box className="h2 gray1" p="5vh">
        <Box className="option">
          <Text>Opción 0</Text>
        </Box>
        <Box className="option">
          <Text>Opción 1</Text>
        </Box>
        <Box className="option">
          <Text>Opción 2</Text>
        </Box>
      </Box>
    </>
  );
}
