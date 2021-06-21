//calcular imc
let nome='Sara';
let sobrenome='Leite';
let idade='18 anos';
let peso='66.7';
let altura='1.71';
let plano='ouro';


function calcularIMC(peso,altura){
    let calcularIMC=(peso/((altura/100)**2))
    calcularIMC=calcularIMC.toFixed(2)
    return calcularIMC

}
console.log(calcularIMC(66.7,1.71))

function expression(n1, n2){
return n1+n2

}
console.log (expression)