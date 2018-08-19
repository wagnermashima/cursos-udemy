const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, rejected) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data',  dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    rejected(e)
                }
            })
        })
    })
}

let obterAlunos = async () => {
    console.log('inicio')
    const turmaA = await getTurma('A')
    console.log('fim turma A')
    const turmaB = await getTurma('B')
    console.log('fim turma B')
    const turmaC = await getTurma('C')
    console.log('fim turma C')
    return [].concat(turmaA, turmaB, turmaC)
}

obterAlunos().then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))