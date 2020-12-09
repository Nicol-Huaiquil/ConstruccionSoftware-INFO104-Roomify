import { Box, Text, Spinner, VStack, Avatar, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { ProfileDisplay } from "../components/ProfileDisplay";

import { uId } from "./index.js";

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
      <TopBar color1="#679beb" color2="#679beb" title="Mi Perfil" />

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box id="myProfile" className="centeredFlex h2 gray1">
          <VStack spacing="2.5vh" py="2.5vh">
            <ProfileDisplay profile={myProfile} />
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
