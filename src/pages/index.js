import React, { useEffect } from "react";
import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function LogIn() {
  const { push } = useRouter();

  useEffect(() => {
    const uIdStorage = localStorage.getItem("user_id");

    if (uIdStorage) {
      push("/home");
    }
  }, []);

  const toast = useToast();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validUser = () => {
    axios
      .post("/api/validateLogIn", {
        email: user.email,
        password: user.password,
      })
      .then(({ data }) => {
        if (data) {
          localStorage.setItem("user_id", data);
          push("/home");
        } else {
          toast({
            title: "Correo electrónico o contraseña incorrecta",
            duration: 1000,
            position: "top",
            status: "error",
          });
        }
      });
  };

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
              <Input
                type="email"
                placeholder="example@email.com"
                bg="white"
                value={user.email}
                onChange={(ev) => {
                  setUser({
                    ...user,
                    email: ev.target.value,
                  });
                }}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type="password"
                placeholder="***"
                bg="white"
                value={user.password}
                onChange={(ev) => {
                  setUser({
                    ...user,
                    password: ev.target.value,
                  });
                }}
              />
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              bg="#466ba3"
              onClick={() => {
                validUser();
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
                push("/sign_up");
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
