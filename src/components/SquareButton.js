import { IconButton } from "@chakra-ui/react";

export const SquareButton = ({ color, icon, label, onClick }) => {
  return (
    <IconButton
      backgroundColor={color}
      width="7.8vh"
      height="7.8vh"
      type="submit"
      aria-label={label}
      icon={icon}
      onClick={onClick}
    />
  );
};
