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
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  useEffect(() => {
    axios
      .post("/api/obtenerPerfiles", {
        uId: uId,
      })
      .then(({ data }) => {
        setApiData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  //const dataString = JSON.stringify(data);
  //setApiData(dataString);

  return (
    <>
      <Roomify>
        <div>
          <Stack padding="20px">
            {loading && <Spinner />}
            {apiData ? <Text>{JSON.stringify(apiData, null, 2)}</Text> : null}
          </Stack>
        </div>
        <div></div>
        <div id="bottomButtons">
          <Stack
            alignItems="center"
            //direction="row"
            //shadow="md"
            //borderWidth="1px"
            //width="fit-content"
            //padding="10px"
            //borderRadius="10px"
            //alignSelf="center"
          >
            <Flex>
              <Button
                //colorScheme="blue"
                bg="#2980b9"
                width="50px"
                height="50px"
                type="submit"
                margin="10px"
                padding="0px"
              >
                <AiOutlineArrowLeft size="30px" color="white" />
              </Button>
              <Button
                //colorScheme="purple"
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
                //colorScheme="green"
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
                //colorScheme="blue"
                bg="#2980b9"
                width="50px"
                height="50px"
                type="submit"
                margin="10px"
                padding="0px"
              >
                <AiOutlineArrowRight size="30px" color="white" />
              </Button>
            </Flex>
          </Stack>
        </div>
      </Roomify>
    </>
  );
}
//export default Home;
