import { Box, Spinner, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { ProfileDisplay } from "../components/ProfileDisplay";

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
        id: "28374",
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
      <TopBar title="" route="/bookmarkedProfiles" />

      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box id="myProfile" className="centeredFlex h2 gray1">
          <VStack spacing="2.5vh" py="2.5vh">
            <ProfileDisplay profile={myProfile} />
          </VStack>
        </Box>
      )}
    </>
  );
}
