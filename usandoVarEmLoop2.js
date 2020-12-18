const funcs = []

for (var i = 0; i<10; i++){//var n possui escopo de função, por isso ele não respeita a ordem.
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
