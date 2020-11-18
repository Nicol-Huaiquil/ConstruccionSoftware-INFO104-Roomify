import { Heading, Stack } from "@chakra-ui/core";

import { ProbandoJavascript } from "../components/ProbandoJavascript";
import { ProbandoAPI } from "../components/ProbandoAPI";
import { ProbandoListas } from "../components/ProbandoListas";
import { ProbandoInput } from "../components/ProbandoInput";
import { Roomify } from "../components/Roomify.js";

export default function IndexPage() {
  return (
    <Stack spacing="45px" padding="10px">
      <Roomify />
    </Stack>
  );
}
