import {
  Box,
  Grid,
  GridItem,
  Button,
  Text,
  Switch,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Settings() {
  const { push, pathname } = useRouter();
  return (
    <>
      <Box id="settingsHeader">
        <Grid
          h="10vh"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={1}
            colSpan={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              bg="#868686"
              width="50px"
              height="50px"
              type="submit"
              padding="0px"
              onClick={() => {
                push("/home");
              }}
            >
              <AiOutlineArrowLeft size="30px" color="white" />
            </Button>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" textAlign="center">
              Opciones
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box id="settings" p="5vh">
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
    </>
  );
}
