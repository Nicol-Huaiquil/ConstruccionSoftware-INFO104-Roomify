import { Button, Flex, Stack, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

import { useEffect, useState } from "react";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Home() {
  const [profiles, setProfiles] = useState([]);
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
    profiles[index + 1] ? setIndex(index + 1) : setIndex(0);
  }

  function decreaseIndex() {
    profiles[index - 1] ? setIndex(index - 1) : setIndex(profiles.length - 1);
  }

  return (
    <>
      {loading ? (
        <div id="loadingHome">
          <Spinner />
        </div>
      ) : (
        <div id="home">
          <div id="texto">
            {profiles[index] ? (
              <ul>
                <li>
                  {JSON.stringify(profiles[index].name, null, 2).slice(1, -1)}
                </li>
                <li>{JSON.stringify(profiles[index].age, null, 2)} años</li>
                <li>
                  {JSON.stringify(profiles[index].degree, null, 2).slice(1, -1)}
                </li>
                <li>
                  Campus{" "}
                  {JSON.stringify(profiles[index].campus, null, 2).slice(1, -1)}
                </li>
                <li>
                  {JSON.stringify(profiles[index].description, null, 2).slice(
                    1,
                    -1
                  )}
                </li>
              </ul>
            ) : (
              <ul>
                <li>No hay perfiles para mostrar.</li>
              </ul>
            )}
          </div>
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
    </>
  );
}
//export default Home;
