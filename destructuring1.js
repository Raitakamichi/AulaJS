//recurso novo do ES 2015

const pessoa = {
    nome:'Ana',
    idade: 25,
    endereco:{
        logradouro:'Rua ABC',
        nomero: 1000
    }
}

const { nome, idade} = pessoa /*desestruture de dentro de pessoa,
nome e idade*/
console.log(nome, idade) 

const { nome: n, idade: i} = pessoa
console.log(n, i) 

const { sobrenome, bemhumorada = true} = pessoa
console.log(sobrenome, bemhumorada)

