console.log('a =', a)
var a = 2 /*hoisting, é o içamento de uma variavel, 
lançando o 'a' para cima*/
console.log('a =', a) //não use hoisting.
console.log('b =', b)
let b = 2/*em let o hoisting não funciona, 
pois o let possui escopo de bloco*/
console.log('b =', b)