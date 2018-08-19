const moduloA = require('../../moduloA')
console.log(moduloA.boaTarde)

const http = require('http')
http.createServer((requisicao, resposta) =>{
    resposta.write('Teste')
    resposta.end()
}).listen(8080)