let num = [5, 8, 4]
console.log(`Meu vetor é ${num}`)

num[3] = 6
console.log(`Meu vetor é ${num}`)

num.push(7)
console.log(`Meu vetor é ${num}`)

console.log(num.length)

num.sort()
console.log(`Meu vetor é ${num}`)

for (let i = 0; i < num.length; i++) {
  console.log(`${num[i]}`)
;
  
}