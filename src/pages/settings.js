import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Text,
  Switch,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Settings() {
  const { push } = useRouter();
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
              icon={<AiOutlineArrowLeft size="4vh" color="white" />}
              onClick={() => {
                push("/home");
              }}
            ></IconButton>
          </GridItem>
          <GridItem className="centeredFlex" colSpan={2}>
            <Text fontSize="3vh" textAlign="center">
              Opciones
            </Text>
          </GridItem>
        </Grid>
      </Box>

      <Box className="gray1" p="5vh">
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
