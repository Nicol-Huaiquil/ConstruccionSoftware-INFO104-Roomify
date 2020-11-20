import { Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/composicion",
    text: "Composicion",
  },
  {
    path: "/pagina1",
    text: "Pagina 1",
  },
  {
    path: "/taller",
    text: "Taller",
  },
];

export const Navigation = ({ children }) => {
  const { push, pathname } = useRouter();
  return (
    <Stack>
      <Tabs
        index={routes.findIndex((ruta) => ruta.path === pathname)}
        alignSelf="center"
      >
        <TabList>
          {routes.map((ruta) => {
            return (
              <Tab
                key={ruta.path}
                onClick={() => {
                  push(ruta.path);
                }}
              >
                {ruta.text}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
      {children}
    </Stack>
  );
};

export const NavigationManual = ({ children }) => {
  const { push, pathname } = useRouter();
  return (
    <Stack>
      <Tabs
        index={["/composicion", "/pagina1", "/taller"].indexOf(pathname)}
        alignSelf="center"
      >
        <TabList>
          {/*
          #0
         */}
          <Tab
            onClick={() => {
              push("/composicion");
            }}
          >
            Composicion
          </Tab>
          {/*
          #1
         */}
          <Tab
            onClick={() => {
              push("/pagina1");
            }}
          >
            Pagina 1
          </Tab>
          {/*
          #2
         */}
          <Tab
            onClick={() => {
              push("/taller");
            }}
          >
            Taller
          </Tab>
        </TabList>
      </Tabs>
      {children}
    </Stack>
  );
};
