// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// primeiro percorre-se o array todo:
for (let index = 1; index < numbers.length; index += 1) {
  // Dentro de cada iteração
  // percorre-se novamente o vetor
  // em busca dos pares
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    // Compara-se
    if (numbers[index] < numbers[secondIndex]) {
      // troca-se
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    };
  };
};

console.log(numbers);
