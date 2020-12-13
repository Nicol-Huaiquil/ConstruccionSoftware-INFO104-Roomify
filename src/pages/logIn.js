import React from "react";
import {
  Image,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function LogIn() {
  const { push } = useRouter();
  return (
    <Box className="fullscreen centeredFlex" bg="#679beb">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>
            <Image src="logoLetras.png" height="10vh" />
          </Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="example@gmail.com" bg="white" />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="***" bg="white" />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              bg="#466ba3"
              onClick={() => {
                push("/");
              }}
            >
              Ingresar
            </Button>
            <Button width="full" mt={4} type="submit" bg="#466ba3">
              Crear cuenta
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
