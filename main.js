const p = document.querySelector('.mainP')
p.classList.add('highlight')

const a = document.querySelector('a');
//a.getAttribute('href');
a.setAttribute('href','https://www.youtube.com/');

const span = document.querySelector('.spanContent')
span.textContent = 'Contenido agregado desde JS'
span.innerHTML= '<a href="https://google.com" target="_blank">Ir a google</a>'
