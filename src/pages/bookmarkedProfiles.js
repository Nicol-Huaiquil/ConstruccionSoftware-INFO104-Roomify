import { Box, Grid, GridItem, Button, Text, Spinner } from "@chakra-ui/react";
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
  const { push, pathname } = useRouter();

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
      <Box id="bookmarkedHeader">
        <Grid
          h="10vh"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
        >
          <GridItem
            rowSpan={1}
            colSpan={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              bg="#868686"
              width="50px"
              height="50px"
              type="submit"
              padding="0px"
              onClick={() => {
                push("/home");
              }}
            >
              <AiOutlineArrowLeft size="30px" color="white" />
            </Button>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="lg" textAlign="center">
              Perfiles Guardados
            </Text>
          </GridItem>
        </Grid>
      </Box>
      {loading ? (
        <Box id="loadingBookmarked">
          <Spinner />
        </Box>
      ) : (
        <Box id="bookmarked">
          <Text textAlign="center">Nada por ahora.</Text>
        </Box>
      )}
    </>
  );
}
