import { Box, Spinner, VStack, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import {
  NameInput,
  CampusInput,
  GenderInput,
  DegreeInput,
  HasCabinInput,
  DescriptionInput,
} from "../components/Inputs";

import { uId } from "./home.js";

export default function Settings() {
  const [myProfile, setMyProfile] = useState({
    name: "",
    age: 0,
    gender: "",
    campus: "",
    degree: "",
    hasCabin: false,
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  useEffect(() => {
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
  }, []);

  return (
    <>
      <TopBar title="Editar Perfil" route="/my_profile" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Box className="h2 gray1" px="4vh" py="3vh">
          <VStack spacing="2vh" align="stretch">
            <NameInput
              isRequired={false}
              value={myProfile.name}
              onChange={(ev) => {
                setMyProfile({
                  ...myProfile,
                  name: ev.target.value,
                });
              }}
            />

            <GenderInput
              isRequired={false}
              value={myProfile.gender}
              onChange={(value) => {
                setMyProfile({
                  ...myProfile,
                  gender: value.toString(),
                });
              }}
            />

            <CampusInput
              isRequired={false}
              value={myProfile.campus}
              onChange={(ev) => {
                setMyProfile({
                  ...myProfile,
                  campus: ev.target.value,
                });
              }}
            />

            <DegreeInput
              isRequired={false}
              value={myProfile.degree}
              onChange={(ev) => {
                setMyProfile({
                  ...myProfile,
                  degree: ev.target.value,
                });
              }}
            />

            <HasCabinInput
              isRequired={false}
              value={myProfile.hasCabin ? "s" : "n"}
              onChange={(value) => {
                setMyProfile({
                  ...myProfile,
                  hasCabin: value === "s",
                });
              }}
            />

            <DescriptionInput
              value={myProfile.description}
              onChange={(ev) => {
                setMyProfile({
                  ...myProfile,
                  description: ev.target.value,
                });
              }}
            />

            <Box display="flex" justifyContent="flex-end">
              <Button
                colorScheme="green"
                onClick={async () => {
                  await axios.post("/api/saveProfileChanges", myProfile);
                  push("/my_profile");
                }}
              >
                Guardar
              </Button>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
}
