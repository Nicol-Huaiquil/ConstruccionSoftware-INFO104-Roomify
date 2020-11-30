import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Text,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    axios
      .post("/api/obtenerPerfilesGuardados", {
        uId: uId,
      })
      .then(({ data }) => {
        setProfiles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box className="h1 gray2">
        <Grid className="h1" templateColumns="repeat(4, 1fr)" gap={4}>
          <GridItem className="centeredFlex">
            <IconButton
              bg="#868686"
              width="7vh"
              height="7vh"
              type="submit"
              aria-label="Volver"
              icon={<AiOutlineArrowLeft size="4vh" color="white" />}
              onClick={() => {
                push("/home");
              }}
            ></IconButton>
          </GridItem>
          <GridItem className="centeredFlex" colSpan={2}>
            <Text fontSize="3vh" textAlign="center">
              Perfiles Guardados
            </Text>
          </GridItem>
        </Grid>
      </Box>
      {loading ? (
        <Box className="centeredFlex h2 gray1">
          <Spinner />
        </Box>
      ) : (
        <Box className="centeredFlex h2 gray1">
          <Text textAlign="center">Nada por ahora.</Text>
        </Box>
      )}
    </>
  );
}
