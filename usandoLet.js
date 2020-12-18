var numero = 1 
{
    let numero = 2 //escopo "menor" interno.
    console.log('dentro =', numero)//escopo de bloco.
}
console.log('fora =', numero) // escopo "maior" mais abrangente.
