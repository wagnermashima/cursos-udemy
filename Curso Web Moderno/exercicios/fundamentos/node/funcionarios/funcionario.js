const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const pobre = (menor, atual) => {
    return atual.salario < menor.salario ? atual : menor
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios.filter(function(f) {
        return f.genero == 'F'
    }).filter(function(f){
        return f.pais == 'China'
    }).reduce(function(menorSalario, atual) {
        // if (menorSalario == null) return atual
        if (atual.salario <= menorSalario.salario) return atual
        return menorSalario
    })
    
    console.log(resultado)

    const resultado2 = funcionarios.filter(chineses).filter(mulheres).reduce(pobre)
    console.log(resultado2)
})
