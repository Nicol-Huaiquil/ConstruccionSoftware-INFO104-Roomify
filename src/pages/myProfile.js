import {
  Box,
  Text,
  Spinner,
  VStack,
  Avatar,
  Button,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
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
    campus: "",
    degree: "",
    description: "",
    pic: "",
  });
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
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
              icon={<AiOutlineArrowLeft size="4vh" color="white" />}
              onClick={() => {
                push("/home");
              }}
            ></IconButton>
          </GridItem>
          <GridItem className="centeredFlex" colSpan={2}>
            <Text fontSize="3vh" textAlign="center">
              Mi Perfil
            </Text>
          </GridItem>
        </Grid>
      </Box>
      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box id="myProfile" className="centeredFlex h2 gray1">
          <VStack spacing="2.5vh" py="2.5vh">
            <Avatar bg="teal.500" size="2xl" src={myProfile.pic} />
            <VStack spacing="0">
              <Text>{myProfile.name}</Text>
              <Text>{myProfile.age} años</Text>
              <Text>{myProfile.degree}</Text>
              <Text>Campus {myProfile.campus}</Text>
              <Text>—</Text>
              <Text>{myProfile.description}</Text>
            </VStack>
            <Button
              bg="green.300"
              width="100%"
              height="100%"
              p="2vh"
              onClick={() => {
                push("/editProfile");
              }}
            >
              <Text fontSize="3vh">Editar perfil</Text>
            </Button>
          </VStack>
        </Box>
      )}
    </>
  );
}
