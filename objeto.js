const prod1 = {}//par de chaves criam objetos.
prod1.nome = 'Celular MotoG 8' //atribuindo nome ao objeto
prod1.preco = 4998.99
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
        nome: 'Camisa social',
        preco: 99.90
}

console.log(prod2)//é possivel gerar um JSON de um objeto
//mas um Objeto não é um JSON, JSON são notações textuais
//Java Script Object Notation (JSON)