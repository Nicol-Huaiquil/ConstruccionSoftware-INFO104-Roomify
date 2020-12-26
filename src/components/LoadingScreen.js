import { Box, Spinner } from "@chakra-ui/react";

export const LoadingScreen = ({ h }) => {
  return (
    <Box className="centeredFlex gray1" h={h}>
      <Spinner />
    </Box>
  );
};
