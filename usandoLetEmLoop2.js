const funcs = []

for (let i = 0; i<10; i++){//com escopo de bloco ele respeita o valor de i na ordem.
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()