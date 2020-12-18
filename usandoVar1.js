{
    {
        {
            {
                var sera='Será???'/* esse tipo de variavel "Var
                consegue ser vista dentro e fora do escopo*/
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)/* dentro de uma função a variavel "Var"
    so pode ser vista pelo escopo da função*/
}
//teste()
//console.log(local)//apenas 2 escopos possiveis, global, ou em escopo de função

