import { Box, Stack } from "@chakra-ui/react";
import { Navigation } from "../components/Navigation";

const Pagina1 = () => {
  return (
    <>
      <Navigation>
        <Stack padding="5px">
          <Box>Uno</Box>
          <Box>Dos</Box>
        </Stack>
      </Navigation>
    </>
  );
};

export default Pagina1;
