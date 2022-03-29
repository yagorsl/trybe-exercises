// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// Se a nota for menor que 0 ou maior que 100, o programa deve apresentar uma msg de erro

const grade = 69;

if (grade < 0 || grade > 100) {
  console.log("Nota inválida");
} else if (grade >= 90) {
  console.log("Nota A");
} else if (grade >= 80) {
  console.log("Nota B");
} else if (grade >= 70) {
  console.log("Nota C");
} else if (grade >= 60) {
  console.log("Nota D");
} else if (grade >= 50 ) {
  console.log("Nota E");
} else {
  console.log("Nota F");
}
