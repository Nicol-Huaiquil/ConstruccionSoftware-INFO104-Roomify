import React from "react";
import {
  Image,
  Box,
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
        <Box className="centeredFlex">
          <Image src="logoLetras.png" height="10vh" />
        </Box>
        <Box my={4} textAlign="left">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
            }}
          >
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="example@email.com" bg="white" />
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
            <Button
              width="full"
              mt={4}
              type="submit"
              bg="#466ba3"
              onClick={() => {
                push("/signUp");
              }}
            >
              Crear cuenta
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
