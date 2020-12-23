import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import { ProfileDisplay } from "../components/ProfileDisplay";

import { useRouter } from "next/router";

export default function ViewProfile() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(true);
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    campus: "",
    degree: "",
    description: "",
    pic: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    const idStorage = localStorage.getItem("viewed_id");

    if (idStorage) {
      setId(idStorage);
    } else {
      push("/bookmarked_profiles");
    }
  }, []);

  useEffect(() => {
    axios
      .post("/api/getProfile", {
        id: id,
      })
      .then(({ data }) => {
        setMyProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <TopBar title="" route="/bookmarked_profiles" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Box className="centeredFlex h2 gray1">
          <VStack spacing="2.5vh" py="2.5vh">
            <ProfileDisplay profile={myProfile} />
          </VStack>
        </Box>
      )}
    </>
  );
}
