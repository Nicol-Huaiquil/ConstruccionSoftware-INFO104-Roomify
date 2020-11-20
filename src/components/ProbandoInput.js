import { Button, Flex, Input, Stack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { HiCursorClick } from "react-icons/hi";

export const ProbandoInput = () => {
  const [valueInput, setValueInput] = useState("default");
  const toast = useToast();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stack
          shadow="md"
          borderWidth="1px"
          width="fit-content"
          padding="20px"
          borderRadius="10px"
        >
          <Input
            width="400px"
            value={valueInput}
            onChange={({ target: { value } }) => {
              setValueInput(value);
            }}
          />
          <Flex>
            <Button
              colorScheme="red"
              width="250px"
              type="submit"
              leftIcon={<HiCursorClick size="30px" />}
              onClick={() => {
                toast({
                  title: valueInput,
                  duration: 1000,
                });
              }}
            >
              Click me
            </Button>
            <Button
              colorScheme="blue"
              width="250px"
              //leftIcon={<HiCursorClick size="30px" />}
              onClick={() => {
                toast({
                  title: "xdxd",
                  duration: 1000,
                });
              }}
            >
              Otro
            </Button>
          </Flex>
        </Stack>
      </form>
    </>
  );
};
