import { Box, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
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
        <Text fontSize="lg" textAlign="center">
          Perfiles Guardados
        </Text>
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
