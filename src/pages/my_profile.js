import { Box, Button, Flex, VStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import { ProfileDisplay } from "../components/ProfileDisplay";
import { useProfileId } from "../auth";

export default function Settings() {
  const { push } = useRouter();
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    campus: "",
    degree: "",
    description: "",
    pic: "",
  });
  const [loading, setLoading] = useState(true);

  const uId = useProfileId();
  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getProfile", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uId]);

  return (
    <>
      <TopBar title="Mi Perfil" route="/" />

      {loading ? (
        <LoadingScreen h="90vh" />
      ) : (
        <Box className="h2 gray1">
          <VStack spacing="6vh" py="6vh">
            <ProfileDisplay profile={myProfile} />
            <Flex justifyContent="center">
              <Button
                bg="green.300"
                p="3.5vh"
                onClick={() => {
                  push("/edit_profile");
                }}
              >
                <Text fontSize="3vh">Editar perfil</Text>
              </Button>
            </Flex>
          </VStack>
        </Box>
      )}
    </>
  );
}
