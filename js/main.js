
//let containerElementos = document.querySelectorAll('.contato__elementos');
//let padding = window.getComputedStyle(containerElementos).padding;
const scroll = ScrollReveal({
  reset: true,
  mobile: true, // Ativar configurações para dispositivos móveis
  easing: 'ease-out',
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
  mobile: false,
  duration: 1000,
  origin: 'top',
});

scroll.reveal('.skills__card', {
  duration: 500,
  origin: 'left',
});

scroll.reveal('.hobbies__card', {
  duration: 500,
  origin: 'right',
});

scroll.reveal('.formacao', {
  duration: 800,
  origin: 'bottom',
});

scroll.reveal('.contato', {
  mobile: false,
  duration: 500,
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
    validarTextarea();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

function validarTextarea() {
  let textarea = document.querySelector('.contato__input--textarea');
  const texto = textarea.value;
  const container = document.querySelector('.container__mensagem');

  if (texto.trim() === '') { //removendo os espaços entre o texto
    // se o campo estiver vazio
    container.innerText = 'Este campo é obrigatório';
  } else  {
    // se o campo estiver vazio
    container.innerText = '';
  }
  
  if (texto.length > 300) {
    // se o texto digitado for maior do que 300 caracteres
    container.innerText = 'Este campo deve conter até 300 caracteres.';
  }

  setTimeout(() => {
    container.innerText = '';
 }, 2000)
  
}

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

function validarNome() {
  const container = document.querySelector('.container__nome');
  let nome = campo1.value;

  if (nome.trim() === '') { //removendo os espaços entre o texto
    // se o campo estiver vazio
    container.innerText = 'Este campo é obrigatório';
  }
  if (nome.length > 50) {
    // se o texto digitado for maior do que 50 caracteres
    container.innerText = 'Este campo deve conter até 50 caracteres';
  }
  setTimeout(() => {
    container.innerText = '';
  }, 2000)
}

campo1.addEventListener('blur', validarNome);

function formatarEmail() {
  const container = document.querySelector('.container__email');
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let email = campo2.value;

  if (regex.test(email)) {
    // se o texto digitado não seguir as especificações da regex
    container.style.color = "#228B22";
    container.innerText = 'E-mail válido';
  } else {
    container.innerText = 'E-mail inválido.';
  }
  setTimeout(() => {
    container.innerText = '';
  }, 2000)
}

function validarEmail() {
  const container = document.querySelector('.container__email');
  let email = campo2.value;

  if (email === '') { 
    // se o campo estiver vazio
    container.innerText = 'Este campo é obrigatório';
  } else {
    formatarEmail();
  }

  setTimeout(() => {
    container.innerText = '';
  }, 2000)
}

campo2.addEventListener('blur', validarEmail);

function validarAssunto() {
  const container = document.querySelector('.container__assunto');
  let assunto = campo3.value;

  if (assunto.trim() === '') { //removendo os espaços entre o texto
    // se o campo estiver vazio
    container.innerText = 'Este campo é obrigatório';
  }
  if (assunto.length > 50) {
    // se o texto digitado for maior do que 50 caracteres
    container.innerText = 'Este campo deve conter até 50 caracteres';
  }

  setTimeout(() => {
     container.innerText = '';
  }, 2000)
}

campo3.addEventListener('blur', validarAssunto);

function limparInputs() {
  let nomeValue = campo1.value.trim();
  let emailValue = campo2.value.trim();
  // limpar os dados de entrada do usuário evitando caracteres não permitidos antes de enviar a um banco de dados!
  const cleanName = nomeValue.replace(/[^A-Za-z0-9]/g, '');
  const cleanEmail = emailValue.replace(/[^a-zA-Z0-9@._-]/g, '');
  console.log(cleanName, cleanEmail);
  //
  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
  campo4.value = '';
}

button.addEventListener('click', () => {
  const contatoFields = document.querySelector('.contato__fields');
  if (campo1.value !== '' && campo2.value !== '' && campo3.value !== '' && campo4.value !== '') {
  
      // cria o elemento svg
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "checkmark");
      svg.setAttribute("viewBox", "0 0 52 52");

      // cria o elemento circle
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("class", "checkmark__circle");
      circle.setAttribute("cx", "26");
      circle.setAttribute("cy", "26");
      circle.setAttribute("r", "25");
      circle.setAttribute("fill", "none");

      // cria o elemento path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("class", "checkmark__check");
      path.setAttribute("fill", "none");
      path.setAttribute("d", "M14.1 27.2l7.1 7.2 16.7-16.8");

      // adiciona os elementos ao svg
      svg.appendChild(circle);
      svg.appendChild(path);

      // adiciona o svg ao documento
      contatoFields.removeChild(button);
      contatoFields.appendChild(svg);

      setTimeout(() => {
        contatoFields.removeChild(svg);
        if (!button.classList.contains('loading')) {
          button.classList.add('loading');
          button.innerHTML = 'Enviado com sucesso!';
          contatoFields.appendChild(button);

          limparInputs();
        } 
       
      }, 2000);
  }
});



