import { Box, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { TopBar } from "../components/TopBar";
import { useProfileId } from "../auth";
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

  const uId = useProfileId();
  useEffect(() => {
    const idStorage = localStorage.getItem("viewed_id");

    if (idStorage) {
      setId(idStorage);
    } else {
      push("/bookmarked_profiles");
    }
  }, []);

  useEffect(() => {
    if (!uId) return;

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
      <TopBar title="Perfil guardado" route="/bookmarked_profiles" />

      {loading ? (
        <LoadingScreen h="90vh" />
      ) : (
        <Box className="h2 gray1">
          <ProfileDisplay profile={myProfile} />
        </Box>
      )}
    </>
  );
}
