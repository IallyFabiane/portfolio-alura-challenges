
//let containerElementos = document.querySelectorAll('.contato__elementos');
//let padding = window.getComputedStyle(containerElementos).padding;
const scroll = ScrollReveal({
  reset: true,
  interval: 100,
  mobile: true, // Ativar configurações para dispositivos móveis
  delay: 100, // Adicionar um pequeno atraso para melhorar a experiência do usuário
  easing: 'ease-in-out',
  scale: 0.95, // Diminuir o scale para melhorar a experiência do usuário
  distance: '10px' // Diminuir a distância para melhorar a experiência do usuário
});

scroll.reveal('.navbar', {
  duration: 1400,
  scale: 1,
});

scroll.reveal('.apresentacao__titulo', {
  duration: 1200,
  distance: '20px',
  origin: 'left',
});

scroll.reveal('.apresentacao__lista', {
  duration: 1000,
  distance: '20px',
  origin: 'left',
});

scroll.reveal('.apresentacao__banner', {
  duration: 1300,
  distance: '20px',
  origin: 'right',
});

scroll.reveal('.sobre__mim', {
  duration: 300,
  distance: '20px',
  origin: 'top',
});

scroll.reveal('.skills__card', {
  duration: 500,
  distance: '20px',
  origin: 'left',
});

scroll.reveal('.hobbies__card', {
  duration: 500,
  distance: '20px',
  origin: 'right',
});

scroll.reveal('.formacao', {
  duration: 800,
  distance: '20px',
  origin: 'bottom',
});

scroll.reveal('.contato', {
  mobile: false,
  duration: 1200,
  opacity: 0.1,
});

 
let inputs = document.querySelectorAll('.contato__input');
let textarea = document.querySelector('.contato__input--textarea');
let form = document.querySelector('form');
let button = document.querySelector('.contato__button');
const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');
const campo3 = document.getElementById('campo3');
const campo4 = document.getElementById('campo4');

inputs.forEach((input) => {
  let label = input.closest('.contato__elementos').querySelector('.contato__label'); //input.closest('.contato__elementos') para selecionar o elemento .contato__elementos;
  //querySelector em input.closest('.contato__elementos') para selecionar a label que está dentro desse elemento.

  input.addEventListener('focus', (event) => {
    event.currentTarget.closest('.contato__elementos').style.padding = "0px"; //event.currentTarget quando queremos associar o mesmo event handler para vários elementos
    label.style.color = "#7209b7";
    label.style.padding = "6px 12px";
    console.log(event.target);
  });

  input.addEventListener('blur', () => {
    input.closest('.contato__elementos').style.padding = "6px 12px";// aqui preciso do elemeto em si e não do evento.Como por padrão os inputs são blur, não preciso capturar o evento para setar o estilo
    label.style.color = "#4a4e69";
    label.style.padding = "0px";
  });
});

textarea.addEventListener('focus', (event) => {
    event.target.closest('.contato__elementos').style.padding = "0px";
    console.log(event.target)
});

textarea.addEventListener('blur', () => {
    textarea.closest('.contato__elementos').style.padding = "6px 12px";
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

function verificarCampos() {
  if (campo1.value !== '' && campo2.value !== '' && campo3.value !== '' && campo4.value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

campo1.addEventListener('input', verificarCampos);
campo2.addEventListener('input', verificarCampos);
campo3.addEventListener('input', verificarCampos);
campo4.addEventListener('input', verificarCampos);


button.addEventListener('click', () => {
  button.classList.add('loading');
});
