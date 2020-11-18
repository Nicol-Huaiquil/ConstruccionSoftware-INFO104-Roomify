import { Button, Text, useToast } from "@chakra-ui/core";
import Axios from "axios";
import { useState } from "react";

let uId = "24836";

export const Endpoint = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  return (
    <>
      {apiData ? <Text>{JSON.stringify(apiData, null, 2)}</Text> : null}
      <Button
        width="200px"
        isLoading={isLoading}
        onClick={async () => {
          setIsLoading(true);

          // const { data } = await Axios.post("/api/hello_world", {
          const { data } = await Axios.post("/api/obtenerPerfiles", {
            uId: uId,
          });
          setIsLoading(false);

          const dataString = JSON.stringify(data);

          setApiData(dataString);

          toast({
            status: "success",
            title: "Lista de perfiles desplegada",
            duration: 1000,
          });
        }}
        colorScheme="yellow"
      >
        Obtener Perfiles
      </Button>
    </>
  );
};
