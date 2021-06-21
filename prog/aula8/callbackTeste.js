let andar = () => console.log('o carro esta andando');
let parar = () => console.log('o carro parou');

function acaoCarro (callback) {};
let acaoCarro = (callback) => callback();

acaoCarro(andar());
acaoCarro(parar()); 
acaoCarro(andar);
acaoCarro(parar); 

  
  



 