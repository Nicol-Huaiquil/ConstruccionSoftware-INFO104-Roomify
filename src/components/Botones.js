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
        <Button bg="#2980b9" width="50px" height="50px" type="submit"></Button>
        <Button bg="#ad1fe2" width="50px" height="50px" type="submit"></Button>
        <Button bg="#1fe25f" width="50px" height="50px" type="submit"></Button>
        <Button bg="#2980b9" width="50px" height="50px" type="submit"></Button>
      </Flex>
    </Stack>
  );
};
