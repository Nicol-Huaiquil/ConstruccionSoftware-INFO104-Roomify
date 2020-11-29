import {
  Box,
  Text,
  Spinner,
  Avatar,
  Button,
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
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
    campus: "",
    degree: "",
    description: "",
    pic: "",
  });
  const { push, pathname } = useRouter();
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
      <Box id="myProfileHeader">
        <Grid
          h="10vh"
          templateRows="repeat (1,1fr)"
          templateColumns="repeat (6,1fr)"
          gap={0}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Button
              bg="#50EBA1"
              width="50px"
              height="50px"
              type="submit"
              margin="10px"
              padding="0px"
              onClick={() => {
                push("/home");
              }}
            >
              <AiOutlineArrowLeft size="30px" color="white" />
            </Button>
          </GridItem>
          <GridItem rowSpan={1} colSpan={4}>
            <Text fontSize="lg" textAlign="center">
              My Profile
            </Text>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}></GridItem>
        </Grid>
      </Box>
      {loading ? (
        <Box id="loadingMyProfile">
          <Spinner />
        </Box>
      ) : (
        <Box id="myProfile">
          <ul>
            <li>
              <Avatar bg="teal.500" size="2xl" m="4%" src={profile.pic} />
            </li>

            <li>{JSON.stringify(profile.name, null, 2).slice(1, -1)}</li>
            <li>{JSON.stringify(profile.age, null, 2)} años</li>
            <li>{JSON.stringify(profile.degree, null, 2).slice(1, -1)}</li>
            <li>
              Campus {JSON.stringify(profile.campus, null, 2).slice(1, -1)}
            </li>
            <li>—</li>
            <li>{JSON.stringify(profile.description, null, 2).slice(1, -1)}</li>
            <li>
              <Button
                bg="green.300"
                width="100%"
                height="100%"
                my="1vh"
                padding="2vh"
                onClick={() => {
                  push("/editProfile");
                }}
              >
                <Text fontSize="3vh">Editar perfil</Text>
              </Button>
            </li>
          </ul>
        </Box>
      )}
    </>
  );
}
