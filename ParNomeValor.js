// par nome/valor
const saudacao = 'O Pai ta ON'//cntexto léxico 1

function exec(){
    const saudacao = 'Tilta não'//contexto léxico 2
    return saudacao
}

//objetos são grupos alinhados de chave valor
const cliente = {
    nome: 'Ramiro',
    idade: 25,
    peso: 90,
    endereco: {
        logradouro:'Rua professor jose barata',
        numero: 236
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)