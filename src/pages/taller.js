import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import Image from "next/image";

const NuevaPagina = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Navigation>
      <Stack width="500px" alignSelf="center">
        <Accordion width="500px" hidden={!isVisible}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              paddingBottom={4}
              border="1px solid black"
              borderRadius="15px"
            >
              <Image
                src="/image_1.jpg"
                width="200px"
                height="200px"
                css={{
                  objectFit: "contain",
                }}
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel paddingBottom={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          colorScheme={isVisible ? "red" : "blue"}
        >
          {isVisible ? "Ocultar" : "Mostrar"}
        </Button>
      </Stack>
    </Navigation>
  );
};

export default NuevaPagina;
