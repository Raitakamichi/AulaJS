const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))/*sendo flexivel o JS não 
retorna um erro, o que pode ser bom, ou ruim*/ 
console.log(escola.charCodeAt(3))//retona o valor da tabela uniCode em HTML
console.log(escola.indexOf('3'))// retorna valor do indice
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))//concatenar
console.log('Escola ' + escola + "!")//concatenar em contexto aritimetico
console.log(escola.replace(3, 'e'))//realocar, substituir
console.log(escola.replace(/\d/, 'e'))//realocar, substituir
console.log(escola.replace(/\w/, 'e'))//realocar, substituir

console.log('Ana,Maria,Pedro'.split(/./))//em regex gera tabela de aspas

console.log('Ana,Maria,Pedro'.split(','))//tabela