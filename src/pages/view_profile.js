import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("/api/getProfile", {
        id: "10003",
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
      <TopBar title="" route="/bookmarked_profiles" />

      {loading ? (
        <LoadingScreen />
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
