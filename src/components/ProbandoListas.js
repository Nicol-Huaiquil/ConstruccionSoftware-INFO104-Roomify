import { Text, useToast } from "@chakra-ui/react";
import { useState } from "react";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis luctus fringilla. Aenean nisl neque, pharetra ut ultricies in, lacinia id elit. Nulla scelerisque, lorem id ullamcorper porta, metus felis placerat tortor, suscipit ultricies nibh lorem et metus. Vestibulum pellentesque quis nisl sollicitudin tempor. Vivamus sollicitudin congue laoreet. Suspendisse pharetra nisl non augue iaculis, fermentum placerat felis tristique. Ut faucibus est sed malesuada sollicitudin. Fusce viverra nisi et vestibulum ornare. Integer ultrices eleifend porttitor. Nam tincidunt commodo dignissim. Aliquam ornare varius ipsum, non accumsan nibh iaculis id. Mauris sit amet efficitur velit. Maecenas id ullamcorper mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vel erat faucibus, venenatis nibh ut, eleifend tellus. Proin nec turpis et eros ullamcorper bibendum at in nisi";

const loremLista = lorem.split(" ").slice(0, 8);

const LoremComponent = ({ valor, indice }) => {
  const toast = useToast();
  const [contador, setContador] = useState(0);

  return (
    <Text
      border="1px solid black"
      width="fit-content"
      padding="5px"
      key={indice}
      cursor="pointer"
      onClick={() => {
        setContador(contador + 1);
        toast({
          title: `Hiciste click en "${valor}"`,
        });
      }}
    >
      {indice} - {valor} - Clickeado {contador} veces
    </Text>
  );
};

export const ProbandoListas = () => {
  return (
    <>
      {loremLista.map((valor, indice) => {
        return <LoremComponent key={indice} valor={valor} indice={indice} />;
      })}
    </>
  );
};
