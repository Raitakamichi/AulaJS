const valores = [7.7,8.9,9.2,6.3,1.5]/*Em array os valores são
indexados, iniciando-se do indice '0' */
console.log (valores[0],valores[3])
console.log(valores[5])

valores[5] = 10.5
console.log(valores)
console.log(valores.length)//length diz quantos elemento tem na array
/* arrays em Js são heterogeneos, por ser fracamente tipado
podendo ter tipos de variaveis diferentes em um mesmo array*/
valores.push({id:7}, false, null, 'Teste')
console.log(valores)/* uma boa pratica é criar um array para cada
tipo, evitando misturar os tipos*/
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)