import { Heading, Stack } from "@chakra-ui/core";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";

export default function IndexPage() {
  return (
    <Stack spacing="45px" padding="10px">
      <Heading>Hello World</Heading>
      <ProbandoJavascript />
      <ProbandoAPI />
      <ProbandoListas />
      <ProbandoInput />
    </Stack>
  );
}
