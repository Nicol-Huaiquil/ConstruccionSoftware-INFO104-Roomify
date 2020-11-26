import { Box, Text } from "@chakra-ui/react";
import { Switch, Spacer } from "@chakra-ui/react";

export default function Settings() {
  return (
    <Box id="settings">
      <Box id="header">
        <Text fontSize="lg" textAlign="center">
          Opciones
        </Text>
      </Box>
      <Box className="option">
        <Text>Opción 0</Text>
      </Box>
      <Box className="option">
        <Text>Opción 1</Text> <Spacer /> <Switch />
      </Box>
      <Box className="option">
        <Text>Opción 2</Text> <Spacer /> <Switch />
      </Box>
      <Box className="option">
        <Text>Opción 3</Text> <Spacer /> <Switch />
      </Box>
      <Box className="option">
        <Text>Opción 4</Text> <Spacer /> <Switch />
      </Box>
      <Box className="option">
        <Text>Opción 5</Text> <Spacer /> <Switch />
      </Box>
      <Box className="option">
        <Text>Opción 6</Text> <Spacer /> <Switch />
      </Box>
    </Box>
  );
}
