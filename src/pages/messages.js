import {
  Box,
  Text,
  IconButton,
  Grid,
  GridItem,
  useToast,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

import { TopBar } from "../components/TopBar";
import { LoadingScreen } from "../components/LoadingScreen";

import { uId } from "./index.js";

export default function Messages() {
  const chats = [
    {
      name: "Pedro Sánchez",
      pic: "",
      messages: ["Hola", "Bro", "Dale"],
    },
    {
      name: "Nicolás Torres",
      pic: "",
      messages: ["Wena", "Man", "Ok"],
    },
  ];
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const { push } = useRouter();

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

  return (
    <>
      <TopBar title="Mensajes" route="/" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <Box className="h2 gray1">
          {chats.length === 0 && <Text>No hay chats.</Text>}
          {chats.map((chat) => {
            return (
              <VStack key={chat._id} p="2vh" spacing="2vh" align="stretch">
                <Box shadow="md" borderWidth="1px" borderRadius="5px">
                  <Grid
                    w="100%"
                    templateColumns="repeat(4,1fr)"
                    onClick={() => {
                      push("/chat");
                    }}
                  >
                    <GridItem display="flex" alignItems="center" padding="2vh">
                      <Avatar
                        bg="teal.500"
                        height="10vh"
                        width="10vh"
                        src={chat.pic}
                      />
                    </GridItem>
                    <GridItem display="flex" colSpan={3}>
                      <VStack py="2vh" align="stretch">
                        <Text fontSize="2.8vh">{chat.name}</Text>
                        <Text fontSize="1.8vh">{chat.messages.slice(-1)}</Text>
                      </VStack>
                    </GridItem>
                  </Grid>
                </Box>
              </VStack>
            );
          })}
        </Box>
      )}
    </>
  );
}
