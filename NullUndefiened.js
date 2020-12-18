let valor // não inicializada
console.log(valor)// Undefined, de preferencia não setada
//console.log(valor2)//is not defined, n foi atribuido, causa erro

valor = null // ausencia de valor, por padrão, utilizar, caso queira zerar valor
console.log(valor)
/*console.log(valor.ToString()) / não le string de nulo*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)