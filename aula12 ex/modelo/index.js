let msg = document.getElementById('msg');
let img = document.getElementById('imagem');
let sec = document.getElementById('main-section')
let data = new Date();
let hora = 19;
msg.innerHTML = `Agora são ${hora} horas.`;

if (hora >= 0 && hora < 12) {
  img.src = './imagens/manha.png';
  document.body.style.background = '#ebdfd1'
  msg.innerHTML += ' Bom Dia!'
} else if (hora >= 12 && hora < 18) {
  img.src = './imagens/tarde.png';
  document.body.style.background = '#fdbe9f'
  msg.innerHTML += ' Boa Tarde!'
} else {
  img.src = './imagens/noite.png';
  document.body.style.backgroundImage = '#162832'
  document.body.style.color = 'white'
  sec.style.color = 'black'
  msg.innerHTML += ' Boa Noite!'
}
