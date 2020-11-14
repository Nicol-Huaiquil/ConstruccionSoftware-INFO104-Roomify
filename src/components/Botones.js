import { Button, Flex, Input, Stack, useToast } from "@chakra-ui/core";

export const Botones = () => {
  return (
    <Stack
      shadow="md"
      borderWidth="1px"
      width="fit-content"
      padding="20px"
      borderRadius="10px"
      alignSelf="center"
    >
      <Flex>
        <Button
          colorScheme="red"
          width="50px"
          height="50px"
          type="submit"
        ></Button>
        <Button
          colorScheme="yellow"
          width="50px"
          height="50px"
          type="submit"
        ></Button>
        <Button
          colorScheme="green"
          width="50px"
          height="50px"
          type="submit"
        ></Button>
        <Button
          colorScheme="pink"
          width="50px"
          height="50px"
          type="submit"
        ></Button>
      </Flex>
    </Stack>
  );
};
