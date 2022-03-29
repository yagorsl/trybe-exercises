const grossSalary = 3000;
console.log(`O salário bruto é: ${grossSalary}`)
let baseSalary;
let netSalary;

if (grossSalary <= 1556.94) {
  baseSalary = grossSalary - (grossSalary * 0.08);
  console.log(`O salário base é: ${baseSalary}`);
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  baseSalary = grossSalary - (grossSalary * 0.09);
  console.log(`O salário base é: ${baseSalary}`);
} else if (grossSalary >= 2594.93 && grossSalary < 5189.82) {
  baseSalary = grossSalary - (grossSalary * 0.11);
  console.log(`O salário base é: ${baseSalary}`);
} else {
  baseSalary = grossSalary - 570.88;
};

if (baseSalary <= 1903.98) {
  netSalary = baseSalary
  console.log(`Isento de imposto de renda. Salário líquido: ${netSalary}`);
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  netSalary = baseSalary - ((baseSalary * 0.075) - 142.80);
  console.log(`O salário líquido é: ${netSalary}`);
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  netSalary = baseSalary - ((baseSalary * 0.15) - 354.80);
  console.log(`O salário líquido é: ${netSalary}`);
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  netSalary = baseSalary - ((baseSalary * 0.225) - 636.13);
  console.log(`O salário líquido é: ${netSalary}`);
} else {
  netSalary = baseSalary - ((baseSalary * 0.275) - 869.36);
  console.log(`O salário líquido é: ${netSalary}`);
};

