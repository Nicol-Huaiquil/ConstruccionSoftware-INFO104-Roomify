import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

import { SquareButton } from "./SquareButton";

export const TopBar = ({ title, route }) => {
  const { push } = useRouter();
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

  return (
    <Box style={styles.Bar}>
      <Grid style={styles.Grid} templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem style={styles.GridItem}>
          <SquareButton
            color="#679beb"
            icon={<IoIosArrowBack size="4vh" color="white" />}
            label="Volver"
            onClick={() => {
              push(route);
            }}
          />
        </GridItem>
        <GridItem style={styles.GridItem} colSpan={2}>
          <Text fontSize="3vh" textAlign="center">
            {title}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
