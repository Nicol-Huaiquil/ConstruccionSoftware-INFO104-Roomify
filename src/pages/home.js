import { Button, Flex, Stack, Spinner, Text, useToast } from "@chakra-ui/core";
import { useRouter } from "next/router";
import axios from "axios";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Roomify } from "../components/Roomify";

import { useEffect, useState } from "react";

let uId = "14125";

export default function Home() {
  const [profiles, setProfiles] = useState();
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const toast = useToast();
  useEffect(() => {
    axios
      .post("/api/obtenerPerfiles", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function increaseIndex() {
    profiles[index + 1]
      ? setIndex((index) => index + 1)
      : setIndex((index) => (index = 0));
  }

  function decreaseIndex() {
    profiles[index - 1]
      ? setIndex((index) => index - 1)
      : setIndex((index) => (index = 7)); // el 7 debería ser el largo del arreglo profiles
  }

  return (
    <Roomify>
      {loading ? (
        loading && <Spinner alignSelf="center" />
      ) : (
        <div>
          {profiles ? (
            <div id="texto">
              <div>
                <Text>
                  Nombre: {JSON.stringify(profiles[index].name, null, 2)}
                </Text>
              </div>
              <div>
                <Text>
                  Edad: {JSON.stringify(profiles[index].age, null, 2)} años
                </Text>
              </div>
              <div>
                <Text>
                  Género: {JSON.stringify(profiles[index].gender, null, 2)}
                </Text>
              </div>
              <div>
                <Text>
                  Campus: {JSON.stringify(profiles[index].campus, null, 2)}
                </Text>
              </div>
              <div>
                <Text>
                  Carrera: {JSON.stringify(profiles[index].degree, null, 2)}
                </Text>
              </div>
              <div>
                <Text>
                  Descripción:{" "}
                  {JSON.stringify(profiles[index].description, null, 2)}
                </Text>
              </div>
            </div>
          ) : null}
          <div id="bottomButtons">
            <Stack alignItems="center">
              <Flex>
                <Button
                  bg="#2980b9"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    decreaseIndex();
                  }}
                >
                  <AiOutlineArrowLeft size="30px" color="white" />
                </Button>
                <Button
                  bg="#ad1fe2"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    toast({
                      title: "Perfil guardado",
                      duration: 1000,
                    });
                  }}
                >
                  <BsFillBookmarkFill size="30px" color="white" />
                </Button>
                <Button
                  bg="#1fe25f"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    toast({
                      title: "Solicitud de mensaje enviada",
                      duration: 1000,
                    });
                  }}
                >
                  <AiFillMessage size="30px" color="white" />
                </Button>
                <Button
                  bg="#2980b9"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    increaseIndex();
                  }}
                >
                  <AiOutlineArrowRight size="30px" color="white" />
                </Button>
              </Flex>
            </Stack>
          </div>
        </div>
      )}
    </Roomify>
  );
}
//export default Home;
