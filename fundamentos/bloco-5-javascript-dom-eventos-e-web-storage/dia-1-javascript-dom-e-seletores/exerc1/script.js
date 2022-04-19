const header = document.querySelector('h1');
header.style.backgroundColor = 'green';
header.style.padding = '50px';

const urgentAndImportant = document.querySelectorAll('.emergency-tasks h3');
for (index = 0; index < urgentAndImportant.length; index += 1) {
  urgentAndImportant[index].style.backgroundColor = 'purple';
};

const urgentAndNotImportant = document.querySelectorAll('.no-emergency-tasks h3');
for (index = 0; index < urgentAndNotImportant.length; index += 1) {
  urgentAndNotImportant[index].style.backgroundColor = 'black';
};

const divImportant = document.querySelectorAll('.emergency-tasks div');
for (index = 0; index < divImportant.length; index += 1) {
  divImportant[index].style.backgroundColor = 'pink';
};

const divNotImportant = document.querySelectorAll('.no-emergency-tasks div');
for (index = 0; index < divNotImportant.length; index += 1) {
  divNotImportant[index].style.backgroundColor = 'pink';
};

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'gray';

const bodyContainer = document.querySelector('#container');
bodyContainer.style.backgroundColor = '#d3d3d3';
