import { Button, Flex, Input, Stack, useToast } from "@chakra-ui/core";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

export const Botones = () => {
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
          colorScheme="blue"
          bg="#2980b9"
          width="50px"
          height="50px"
          type="submit"
          margin="10px"
          leftIcon={<AiOutlineArrowLeft size="30px" color="white" />}
        ></Button>
        <Button
          colorScheme="purple"
          bg="#ad1fe2"
          width="50px"
          height="50px"
          type="submit"
          margin="10px"
          leftIcon={<BsFillBookmarkFill size="30px" color="white" />}
        ></Button>
        <Button
          colorScheme="green"
          bg="#1fe25f"
          width="50px"
          height="50px"
          type="submit"
          margin="10px"
          leftIcon={<AiFillMessage size="30px" color="white" />}
        ></Button>
        <Button
          colorScheme="blue"
          bg="#2980b9"
          width="50px"
          height="50px"
          type="submit"
          margin="10px"
          leftIcon={<AiOutlineArrowRight size="30px" color="white" />}
        ></Button>
      </Flex>
    </Stack>
  );
};
