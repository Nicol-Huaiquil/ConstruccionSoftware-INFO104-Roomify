import { Button, useToast } from "@chakra-ui/core";
import { isEqual } from "lodash";

export const ProbandoJavascript = () => {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast({
          title: "Revisar consola",
        });

        let indefinidoImplicito;
        let indefinidoExplicito = undefined;

        let nulo = null;

        let booleano = true;
        booleano = !booleano;

        let numero = 123;

        numero += 1;

        let string = "hello world";

        const stringCompuesto = `Componer texto "${string}" así`;

        let arrowFunctionComoVariable = (texto) => {
          console.log("Recibi", texto);
        };

        arrowFunctionComoVariable();
        arrowFunctionComoVariable("Hello");
        arrowFunctionComoVariable(1234);

        setTimeout(() => {
          console.log(
            "Esto se imprimió al menos 2 segundos después de haberse llamado 'setTimeout'"
          );
        }, 2000);

        let arreglo = [
          1,
          "a",
          true,
          false,
          null,
          undefined,
          arrowFunctionComoVariable,
        ];

        const objA = { a: 1 };
        const objB = { a: 1 };

        let objetoGrande = {
          indefinidoImplicito: indefinidoImplicito,
          indefinidoExplicito,
          nulo,
          booleano,
          numero,
          string,
          stringCompuesto,
          arreglo,
          arregloMapeado: arreglo.map((valor) => valor?.toString()),
          arregloMapeadoATruthy: arreglo.map((valor) =>
            valor ? "truthy" : "falsy"
          ),
          arregloFiltrado: arreglo.filter((valor) => !!valor),
          objA,
          objB,
          sonObjsIguales: objA === objB,
          sonObjsEquivalents: isEqual(objA, objB),
        };

        console.log(objetoGrande);

        const destructuringObj = {
          a: 1,
          b: 2,
          c: "foo",
          d: "bar",
        };

        const destructuringArray = [10, 20, 30];

        const { a, b, c, d } = destructuringObj;

        const [primero, segundo, tercero] = destructuringArray;

        console.log({
          a,
          b,
          c,
          d,
          primero,
          segundo,
          tercero,
        });
      }}
      colorScheme="blue"
      width="250px"
    >
      Click Probando Javascript
    </Button>
  );
};
