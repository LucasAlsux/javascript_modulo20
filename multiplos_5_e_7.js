    //criacao da função, vai receber o limite dos numeros la na frente
    
    function multiplos(valor){
    
    //variavel que vai receber a soma de todos os numeros
    let somados = 0;  

    //loop que vai passar por todos os numeros de 0 a 1000
    for(let i = 0; i < valor; i++){
        
        //condição pra realizar a soma, tem que ser extritamente divisiveis por 5 ou 7
        if(i % 5 === 0 || i % 7 === 0){
        //soma e atribui na variavel
        somados += i;
        }
    }   
    
    //volta o valor total pra variavel
    return somados
}

//constatnte que chama a função passando o valor limite
const resultado = multiplos(1000);
//mostra a constante
console.log(`${resultado}`);

    
module.exports = {multiplos}