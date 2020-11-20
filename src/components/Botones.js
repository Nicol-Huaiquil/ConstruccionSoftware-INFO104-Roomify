import { Button, Flex, Stack, useToast } from "@chakra-ui/react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

export const Botones = () => {
  const toast = useToast();
  return (
    <Stack
      direction="row"
      shadow="md"
      borderWidth="1px"
      width="fit-content"
      padding="10px"
      borderRadius="10px"
      alignSelf="center"
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
  );
};
