import { Stack, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Estudiantes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("/api/listar_estudiantes", {
        id_estudiante: 2323,
      })
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Stack padding="20px">
      {loading && <Spinner />}
      {data?.map((estudiante, indice) => {
        return (
          <Text
            border="1px solid black"
            borderRadius="5px"
            key={indice}
            whiteSpace="pre-wrap"
            width="fit-content"
            padding="5px"
          >
            {JSON.stringify(estudiante, null, 2)}
          </Text>
        );
      })}
    </Stack>
  );
}
