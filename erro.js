function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw true
    throw {
        nome: erro.nome,
        msg: erro.mesage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name = 'Roberto'}
imprimirNomeGritado(obj)