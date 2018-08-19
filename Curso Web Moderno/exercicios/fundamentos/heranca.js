const ferrari = {
    modelo: 'F40',
    velocidade: 340
}

const volvo = {
    modelo: 'V40',
    velocidade: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)


const avo = {atributo: 'A'}

const pai = {__proto__: avo, atributo2: 'B'}

const filho = {__proto__: pai, atributo3: 'C'}

console.log(filho.atributo)
console.log(filho.atributo2)
console.log(filho.atributo3)