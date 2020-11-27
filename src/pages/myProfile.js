import { Box, Text, Spinner, Avatar } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

//let uId = "24836"; // Rodolfo Seguel
//let uId = "28374"; // Gustavo Reyes
let uId = "14125"; // Matilde Valera
//let uId = "25098"; // Daniela Vega
//let uId = "98000"; //Nicolás García
//let uId = "84061"; // Trinidad Vásquez

export default function Settings() {
  const [profile, setProfile] = useState({
    name: "",
    age: 0,
    campus: "",
    degree: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post("/api/obtenerPerfil", {
        id: uId,
      })
      .then(({ data }) => {
        setProfile(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box id="myProfileHeader">
        <Text fontSize="lg" textAlign="center">
          My Profile
        </Text>
      </Box>
      {loading ? (
        <Box id="loadingMyProfile">
          <Spinner />
        </Box>
      ) : (
        <Box id="myProfile">
          <ul>
            <li>
              <Avatar bg="teal.500" size="2xl" m="4%" />
            </li>
            <li>{JSON.stringify(profile.name, null, 2).slice(1, -1)}</li>
            <li>{JSON.stringify(profile.age, null, 2)} años</li>
            <li>{JSON.stringify(profile.degree, null, 2).slice(1, -1)}</li>
            <li>
              Campus {JSON.stringify(profile.campus, null, 2).slice(1, -1)}
            </li>
            <li>—</li>
            <li>{JSON.stringify(profile.description, null, 2).slice(1, -1)}</li>
          </ul>
        </Box>
      )}
    </>
  );
}
