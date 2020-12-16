import { Box, Spinner } from "@chakra-ui/react";

export const LoadingScreen = () => {
  return (
    <Box className="centeredFlex h2 gray1">
      <Spinner />
    </Box>
  );
};
