function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById('txtano');
  let res = document.querySelector('#res');

  if (fano.value.length <= 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    let fsex = document.getElementsByName('sexo');
    let idade = ano - Number(fano.value);
    let genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute('src', 'imagens/bebe-f.jpg');
      } else if (idade >= 10 && idade < 21) {
        // jovem
        img.setAttribute('src', 'imagens/jovem-f.jpg');
      } else if (idade >= 21 && idade < 50) {
        // adulto
        img.setAttribute('src', 'imagens/adulto-f.jpg');
      } else if (idade >= 50) {
        // idoso
        img.setAttribute('src', 'imagens/idoso-f.jpg');
      }
    } else if (fsex[1].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        // crianca
        img.setAttribute('src', 'imagens/bebe-m.jpg');
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg');
      } else if (idade >= 21 && idade < 50) {
        // adulto
        img.setAttribute('src', 'imagens/adulto-m.jpg');
      } else if (idade >= 50) {
        // idoso
        img.setAttribute('src', 'imagens/idoso-m.jpg');
      }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`;
    res.appendChild(img);
  }
}
