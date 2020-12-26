import { Box, VStack, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import {
  ImageInput,
  NameInput,
  CampusInput,
  GenderInput,
  DegreeInput,
  HasCabinInput,
  DescriptionInput,
} from "../components/Inputs";
import { useProfileId } from "../auth";

export default function Settings() {
  const [myProfile, setMyProfile] = useState({
    pic: "",
    name: "",
    age: 0,
    gender: "",
    degree: "",
    campus: "",
    hasCabin: false,
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

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
      <TopBar title="Editar Perfil" route="/my_profile" />

      {loading ? (
        <LoadingScreen h="90vh" />
      ) : (
        <Box className="h2 gray1" px="4vh" py="3vh">
          <VStack spacing="2vh" align="stretch">
            <ImageInput
              onChange={(element) => {
                let file = element.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setMyProfile({
                    ...myProfile,
                    pic: reader.result.toString(),
                  });
                };
              }}
            />

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
