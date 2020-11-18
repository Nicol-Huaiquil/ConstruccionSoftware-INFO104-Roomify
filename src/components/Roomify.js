import { Stack, Tab, TabList, Tabs } from "@chakra-ui/core";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/home",
    text: "Home",
  },
  {
    path: "/ejemplos",
    text: "Ejemplos",
  },
];

export const Roomify = ({ children }) => {
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

export const RoomifyManual = ({ children }) => {
  const { push, pathname } = useRouter();
  return (
    <Stack>
      <Tabs
        index={["/home", "/pagina1", "/taller"].indexOf(pathname)}
        alignSelf="center"
      >
        <TabList>
          <Tab
            onclick={() => {
              push("/home");
            }}
          >
            Home
          </Tab>
        </TabList>
      </Tabs>
      {children}
    </Stack>
  );
};
