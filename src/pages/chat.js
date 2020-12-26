import {
  Box,
  Text,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
//import axios from "axios";
import { useState } from "react";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";

export default function Chat() {
  const [loading, setLoading] = useState(false);

  /*
  const getProfiles = () => {
    axios
      .post("/api/getChats", {
        uId: uId,
      })
      .then(({ data }) => {
        setChats(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(getProfiles, []);
*/

  const messages = [
    {
      text: "Hola",
      atRight: true,
    },
    {
      text: "Qué tal? Xd",
      atRight: false,
    },
    {
      text: "Bien bien y tu?",
      atRight: true,
    },
    {
      text: "Bien igual",
      atRight: false,
    },
    {
      text: "Leí que tienes cabaña",
      atRight: true,
    },
    {
      text: "Efectivamente",
      atRight: false,
    },
    {
      text: "Falta gente?",
      atRight: true,
    },
    {
      text: "No xd",
      atRight: false,
    },
    {
      text: "Lorem",
      atRight: true,
    },
    {
      text: "Ipsum dolor sit amet. Dolor sit amet. Lorem ipsum.",
      atRight: true,
    },
    {
      text: "Dolor",
      atRight: true,
    },
    {
      text: "Sit",
      atRight: false,
    },
    {
      text:
        "Amet. Lorem ipsum dolor sit amet. Ipsum dolor sit amet. Dolor sit amet.",
      atRight: false,
    },
    {
      text: "Ipsum lorem ipsum lorem",
      atRight: true,
    },
    {
      text: "Dolor sit",
      atRight: false,
    },
    {
      text:
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      atRight: false,
    },
    {
      text: "Amet. Lorem ipsum",
      atRight: true,
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingScreen h="90vh" />
      ) : (
        <Box className="h2 gray1">
          <Box bg="gray.400" minHeight="92vh" paddingBottom="8vh">
            <TopBar title="" route="/messages" />
            {messages.length === 0 && <Text>No hay perfiles guardados.</Text>}
            {messages.map((message) => {
              return (
                <Flex
                  justifyContent={message.atRight ? "right" : "left"}
                  key={message.text}
                  m="1vh"
                  p="1vh"
                >
                  <Box
                    display="inline-block"
                    borderRadius={7}
                    shadow="md"
                    borderWidth="1px"
                    p="1vh"
                    bg="gray.100"
                    maxWidth="80%"
                  >
                    <Text fontSize="2.8vh">{message.text}</Text>
                  </Box>
                </Flex>
              );
            })}
          </Box>
          <Grid
            bg="gray.400"
            h="8vh"
            width="100vw"
            templateColumns="repeat(7, 1fr)"
            bottom={0}
            position="fixed"
          >
            <GridItem className="centeredFlex" paddingLeft="1vh" colSpan={6}>
              <Input bg="white" shadow="md" borderWidth="1px"></Input>
            </GridItem>
            <GridItem className="centeredFlex" colSpan={1}>
              <Button
                bg="gray.300"
                type="submit"
                h="6vh"
                w="6vh"
                shadow="md"
                borderWidth="1px"
              ></Button>
            </GridItem>
          </Grid>
        </Box>
      )}
    </>
  );
}
