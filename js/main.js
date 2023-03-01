
//let input = document.querySelectorAll('.contato__input');
//let label = document.querySelectorAll('.contato__label');
//let containerElementos = document.querySelectorAll('.contato__elementos');
//let padding = window.getComputedStyle(containerElementos).padding;

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




