const passo1 = (context, next) => {
    context.valor1 = 'mid1'
    next()
}

const passo2 = (context, next) => {
    context.valor2 ='mid2'
    next()
}

const passo3 = context => context.valor3 = 'mid3'

const exec = (context, ...middlewares) => {
    const execPasso = (indice) =>{
        middlewares && indice < middlewares.length && middlewares[indice](context, () => execPasso(indice +1))
    }

    execPasso(0)

}
const context = {}
exec(context, passo1, passo2, passo3)
console.log(context)