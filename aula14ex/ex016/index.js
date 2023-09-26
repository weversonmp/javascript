let $inicio = document.querySelector('#inicio');
let $fim = document.querySelector('#fim');
let $passo = document.querySelector('#passo');
let $res = document.querySelector('#res');
let $resSpan = document.createElement('span');
$resSpan.setAttribute('id', 'resSpan');
$res.appendChild($resSpan);

function contar() {
  let inicio = Number($inicio.value);
  let fim = Number($fim.value);
  let passo = Number($passo.value);

  $resSpan.innerText = '';
  if (inicio > fim) {
    alert('O início não pode ser maior que o fim!!!');
  } else if (passo <= 0) {
    alert('A opção "Passo" precisa ser maior do que 0');
  } else {
    for (let i = inicio; i <= fim; i += passo) {
      if (i + passo - 1 >= fim) {
        $resSpan.innerText += `\u{1F449}${i}🚩`;
      } else {
        $resSpan.innerText += `\u{1F449}${i}`;
      }
    }
  }
}
