import {
  Button,
  Flex,
  Stack,
  Spinner,
  Avatar,
  useToast,
} from "@chakra-ui/react";
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
  //const [success, setSuccess] = useState(false);
  const [id, setId] = useState();
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

  useEffect(() => {
    axios
      .post("/api/marcarPerfil", {
        uId: uId,
        id: id,
      })
      .then(({ data }) => {
        showToast(data);
      });
  }, [id]);

  function increaseIndex() {
    profiles[index + 1] ? setIndex(index + 1) : setIndex(0);
  }

  function decreaseIndex() {
    profiles[index - 1] ? setIndex(index - 1) : setIndex(profiles.length - 1);
  }

  function showToast(success) {
    if (success) {
      toast({
        title: "Perfil guardado",
        duration: 1000,
        position: "top",
        status: "success",
      });
      setId(undefined); // parche
    }
  }

  return (
    <>
      {loading ? (
        <div id="loadingHome">
          <Spinner />
        </div>
      ) : (
        <>
          <div id="topBar"></div>
          <div id="home">
            {profiles[index] ? (
              <ul>
                <li>
                  <Avatar bg="teal.500" size="2xl" m="4%" />
                </li>
                <li>{profiles[index].name}</li>
                <li>{profiles[index].age} años</li>
                <li>{profiles[index].degree}</li>
                <li>Campus {profiles[index].campus}</li>
                <li>—</li>
                <li>{profiles[index].description}</li>
              </ul>
            ) : (
              <ul>
                <li>No hay perfiles para mostrar.</li>
              </ul>
            )}
          </div>
          <div id="bottomBar">
            <Stack alignItems="center">
              <Flex>
                <Button
                  bg="#50EBA1"
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
                  bg="#EB8273"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    setId(profiles[index].id);
                  }}
                >
                  <BsFillBookmarkFill size="30px" color="white" />
                </Button>

                <Button
                  bg="#EBB344"
                  width="50px"
                  height="50px"
                  type="submit"
                  margin="10px"
                  padding="0px"
                  onClick={() => {
                    toast({
                      title: "Solicitud de mensaje enviada",
                      duration: 1000,
                      position: "top",
                    });
                  }}
                >
                  <AiFillMessage size="30px" color="white" />
                </Button>

                <Button
                  bg="#50EBA1"
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
        </>
      )}
    </>
  );
}
//export default Home;
