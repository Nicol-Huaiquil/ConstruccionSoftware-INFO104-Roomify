import { Avatar, VStack, Text } from "@chakra-ui/react";

export const ProfileDisplay = ({ profile }) => {
  return (
    <VStack spacing="2.5vh" px="10vw">
      <Avatar bg="teal.500" size="2xl" src={profile.pic} />
      <VStack spacing="0">
        <Text textAlign="center">{profile.name}</Text>
        <Text textAlign="center">{profile.age} años</Text>
        <Text textAlign="center">{profile.degree}</Text>
        <Text textAlign="center"> Campus {profile.campus}</Text>
        <Text textAlign="center">
          {profile.hasCabin ? "Tiene cabaña" : "No tiene cabaña"}
        </Text>
        <Text textAlign="center">—</Text>
        <Text textAlign="center">{profile.description}</Text>
      </VStack>
    </VStack>
  );
};
