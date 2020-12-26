import { Avatar, VStack, Text } from "@chakra-ui/react";

export const ProfileDisplay = ({ profile }) => {
  return (
    <VStack spacing="2.5vh" py="6vh" px="10vw">
      <Avatar bg="teal.500" size="2xl" src={profile.pic} />
      <VStack spacing="0">
        <Text>{profile.name}</Text>
        <Text>{profile.age} años</Text>
        <Text>{profile.degree}</Text>
        <Text>Campus {profile.campus}</Text>
        <Text>{profile.hasCabin ? "Tiene cabaña" : "No tiene cabaña"}</Text>
        <Text>—</Text>
        <Text textAlign="center">{profile.description}</Text>
      </VStack>
    </VStack>
  );
};
