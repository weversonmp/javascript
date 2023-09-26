let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    alert('Valor inválido ou não encontrado na lista!')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar')
    
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 1

   for (let n in valores) {
    soma += valores[n]

    if (valores[n] > maior) 
      maior= valores[n];
    if (valores[n] < menor)
    menor = valores[n];
    }

    media = soma / tot
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>`
    res.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
    res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    res.innerHTML += `<p>A media dos valores é: ${media.toFixed(2)}</p>`
  }
}