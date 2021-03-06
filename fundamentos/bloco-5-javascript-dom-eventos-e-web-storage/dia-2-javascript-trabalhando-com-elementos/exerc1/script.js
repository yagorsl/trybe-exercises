// 1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);

// 2. Adicione a tag 'main' com a classe main-content como filho da tag body;
const mainTag = document.createElement('main');
mainTag.className = 'main-content';
document.body.appendChild(mainTag);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionTag = document.createElement('section');
sectionTag.className = 'center-content';
mainTag.appendChild(sectionTag);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraphTag = document.createElement('p');
paragraphTag.innerText = 'Olá, eu me chamo Yago!';
sectionTag.appendChild(paragraphTag);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftSection = document.createElement('section');
leftSection.className = 'left-content';
mainTag.appendChild(leftSection);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2
const rightSection = document.createElement('section');
rightSection.className = 'right-content';
mainTag.appendChild(rightSection);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftSection.appendChild(image);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const ulElement = document.createElement('ul');
rightSection.appendChild(ulElement);

const numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (num in numbers) {
  const listItem = document.createElement('li');
  listItem.innerHTML = numbers[num];
  ulElement.appendChild(listItem);
};

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (index = 0; index < 3; index += 1) {
  const h3Element = document.createElement('h3');
  h3Element.innerHTML = 'Isso é uma tag h3';
  mainTag.appendChild(h3Element);
};

// BONUS
// 1. Adicione a classe title na tag h1 criada.
const title = document.querySelector('h1');
title.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
const elementH3 = document.getElementsByTagName('h3');
for (index = 0; index < elementH3.length; index += 1) {
  elementH3[index].className = 'description';
};

// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const sectionLeftContent = document.getElementsByClassName('left-content')[0];
const mainElement = document.getElementsByTagName('main')[0];
mainElement.removeChild(sectionLeftContent);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
const sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
mainElement.style.backgroundColor = 'green';

// solução alternativa
const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();

