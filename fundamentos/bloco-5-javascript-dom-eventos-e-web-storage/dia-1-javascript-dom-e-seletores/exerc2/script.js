/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3. Crie uma função que mude a cor do quadrado vermelho para branco.
 4. Crie uma função que corrija o texto da tag <h1>.
 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
      // exerc1
      function changeText(text) {
        let paragraph = document.getElementsByTagName('p')[1];
        paragraph.innerText = text;
      };
      changeText('Daqui a 2 anos, me vejo trabalhando pra uma empresa internacional e sendo pago em dólar!');

      // exerc2
      function changeColor(color) {
        let yellowSquare = document.getElementsByClassName('main-content')[0];
        yellowSquare.style.backgroundColor = color;
      };
      changeColor('rgb(76, 164, 109)');

      // exerc3
      function changeCenterColor(color) {
        let redSquare = document.getElementsByClassName('center-content')[0];
        redSquare.style.backgroundColor = color;
      };
      changeCenterColor('white');

      // exerc4
      function heroTitleCorrection(newTitle) {
        let heroTitle = document.getElementsByTagName('h1')[0];
        heroTitle.innerText = newTitle;
      };
      heroTitleCorrection('Exercício 5.1 - JavaScript');

      // exerc5
      function changeToUpperCase() {
        let paragraph = document.getElementsByTagName('p')[0];
        paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
      };
      changeToUpperCase();

      // exerc6
      function showParagraphs() {
        let paragraphs = document.getElementsByTagName('p');
        for (index in paragraphs) {
          console.log(paragraphs[index].innerText);
        };
      };
      showParagraphs();
      