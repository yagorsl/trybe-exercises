// // Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pieceName = 'bishop';
const pieceNameLowerCase = pieceName.toLowerCase();

if (pieceNameLowerCase === "pawn") {
  console.log("Se move somente pra frente, uma casa por vez");
} else if (pieceNameLowerCase === "knight") {
  console.log("Se move em formato de L sobre o tabuleiro"); 
} else if (pieceNameLowerCase === "bishop") {
  console.log("Se move na diagonal");
} else if (pieceNameLowerCase === "rook") {
  console.log("Se move na horizontal e na vertical");
} else if (pieceNameLowerCase === "queen") {
  console.log("Se move somente pra frente, na diagonal, na horizontal e na vertical");
} else if (pieceNameLowerCase === "king") {
  console.log("Se move para qualquer casa adjacente");
} else {
  console.log("Peça inválida");
}

// Solução alternativa utilizando switch/case:
const piece = "bishop"
const pieceLowerCase = piece.toLowerCase();

switch (pieceLowerCase) {
  case "pawn":
    console.log("Se move somente pra frente, uma casa por vez");
    break;

  case "knight":
    console.log("Se move em formato de L sobre o tabuleiro"); 
    break;

  case "bishop":
    console.log("Se move na diagonal");
    break;

  case "rook":
    console.log("Se move na horizontal e na vertical");
    break;

  case "queen":
    console.log("Se move somente pra frente, na diagonal, na horizontal e na vertical");
    break;

  case "king":
    console.log("Se move para qualquer casa adjacente");
    break;

  default:
    console.log("Peça inválida");
    break;
}