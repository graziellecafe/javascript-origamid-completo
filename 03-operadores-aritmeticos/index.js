// Aula 03: Operadores
// Operadores Aritméticos (strings)
var soma = "100" + 50; // 10050;
var subtracao = "100" - 50; //50;
var multiplicacao = "100" * "2"; //200
var divisao = "Comprei 10" / 2; // Nan (Not a Number)

// A ordem importa
var total1 = 20 + 5 * 2; //30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Boolean
var possuiGraduacao = true;
var possuiMestrado = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

// Operadores Lógicos &&
true && true; //true
true && false; //false
false && true; //false
"Gato" && "Cão"; // Cão
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

/* Se ambos os valores foram true ele irá
retornar o último valor verificado. Se algum
valor for false ele irá retornar o mesmo e não
irá continuar a verificar os próximos */

// Operadores Lógicos II
true || true; //true
true || false; //true
false || true; //true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

/* Retorna o primeiro valor true 
que encontrar */
