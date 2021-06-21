let alunos=['Fabio','Patricia','Fernando','Gabriel','Vivian','Leonardo'];
​
//declarativa
function cobrar() {
    console.log('Querido aluno',alunos.pop(),'! Favor passar no setor de cobrança!')
}
​
cobrar();
//'Fabio','Patricia','Fernando','Gabriel','Vivian'
cobrar();
//'Fabio','Patricia','Fernando','Gabriel'
cobrar();
cobrar();
cobrar();
cobrar();
cobrar();

let alunos=['Fábio','Patricia','Fernando','Gabriel','Vivian','Fernando','Leonardo'];
//             0        1          2        3          4         5
//console.log(alunos)
​
//join - transformar um array em uma string - separador entre os elementos
//array fica intacto
// let stringArrayAlunos=alunos.join('A');
// console.log(stringArrayAlunos);
​
// console.log(alunos.indexOf('Fernando'));
// console.log(alunos.lastIndexOf('Fernando'));
​
let encontrou=alunos.includes('Fabio');
if (encontrou)    //if(encontrou)     if(true)
   {console.log('Legal')}
else 
   {console.log('Fugiu')}