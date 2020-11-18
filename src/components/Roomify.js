import { Stack, Tab, TabList, Tabs } from "@chakra-ui/core";
import { useRouter } from "next/router";

const routes = [
  {
    path: "/botones",
    text: "Botones",
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
        index={["/composicion", "/pagina1", "/taller"].indexOf(pathname)}
        alignSelf="center"
      >
        <TabList>
          <Tab
            onclick={() => {
              push("/botones");
            }}
          >
            Botones
          </Tab>
        </TabList>
      </Tabs>
      {children}
    </Stack>
  );
};
