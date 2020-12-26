import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import {
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { Menu } from "../components/Menu";

export const HomeTopBar = ({ uId }) => {
  const styles = {
    Bar: {
      height: "10vh",
      backgroundColor: "#679beb",
    },
    Grid: {
      height: "10vh",
    },
    GridItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const [myProfile, setMyProfile] = useState({
    name: "",
    pic: "",
  });

  useEffect(() => {
    if (!uId) return;

    axios
      .post("/api/getProfile", {
        id: uId,
      })
      .then(({ data }) => {
        setMyProfile(data);
      });
  }, [uId]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box style={styles.Bar}>
      <Grid style={styles.Grid} templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem style={styles.GridItem} colStart={2} colSpan={2}>
          <Image src="logoLetras.png" height="10vh" />
        </GridItem>
        <GridItem style={styles.GridItem} colStart={4}>
          <IconButton
            bg="#679beb"
            width="8vh"
            height="8vh"
            aria-label="Abrir menú"
            icon={<TiThMenu size="6vh" color="white" />}
            ref={btnRef}
            onClick={onOpen}
          ></IconButton>
        </GridItem>
      </Grid>
      <Menu
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        pic={myProfile.pic}
        name={myProfile.name}
      />
    </Box>
  );
};
