import React, { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Box, HStack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useProfileId } from "../auth";
import { HomeTopBar } from "../components/HomeTopBar";
import { LoadingScreen } from "../components/LoadingScreen";
import { ProfileDisplay } from "../components/ProfileDisplay";
import { SquareButton } from "../components/SquareButton";

export default function Home() {
  const uId = useProfileId();

  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getProfiles", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uId]);

  const [index, setIndex] = useState(0);

  const nextProfile = () => {
    if (index + 1 < profiles.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const previousProfile = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(profiles.length - 1);
    }
  };

  const toast = useToast();

  return (
    <>
      {loading ? (
        <LoadingScreen h="100vh" />
      ) : (
        <>
          <HomeTopBar uId={uId} />

          <Box id="home" py="6vh">
            {profiles ? (
              <ProfileDisplay profile={profiles[index]} />
            ) : (
              <Text>No hay perfiles para mostrar.</Text>
            )}
          </Box>

          <Box id="buttonBar" className="centeredFlex">
            <HStack spacing="3vw">
              <SquareButton
                color="#50EBA1"
                icon={<IoIosArrowBack size="4.7vh" color="white" />}
                label="Anterior"
                onClick={() => {
                  previousProfile();
                }}
              />
              <SquareButton
                color="#EB8273"
                icon={<BsFillBookmarkFill size="4.7vh" color="white" />}
                label="Guardar perfil"
                onClick={() => {
                  axios
                    .post("/api/bookmarkProfile", {
                      uId: uId,
                      id: profiles[index].id,
                    })
                    .then(() => {
                      toast({
                        title: "Perfil guardado",
                        duration: 1000,
                        position: "top",
                        status: "success",
                      });
                    });
                }}
              />
              <SquareButton
                color="#EBB344"
                icon={<AiFillMessage size="4.7vh" color="white" />}
                label="Solicitar contacto"
                onClick={() => {
                  toast({
                    title: "Solicitud de mensaje enviada",
                    duration: 1000,
                    position: "top",
                  });
                }}
              />
              <SquareButton
                color="#50EBA1"
                icon={<IoIosArrowForward size="4.7vh" color="white" />}
                label="Siguiente"
                onClick={() => {
                  nextProfile();
                }}
              />
            </HStack>
          </Box>
        </>
      )}
    </>
  );
}
