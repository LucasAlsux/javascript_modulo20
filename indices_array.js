const _arr = [1, 30, 44, 11, 7, 89]; //inicializa o meu array

//variaveis que vao armazenar os indices
let vMaior = 0; 
let vMenor = 0;
//variavel que controla a posição do array
let pos = 0;

//inicio do laço que verifica os valores de todas as posições do array
for (let i = 0; i < _arr.length; i++){

    
    //condiçao pra achar o maior valor
    if(_arr[pos] > _arr[vMaior]){
        vMaior = pos;
    }

    //cndicao pra achar o menor valor
    if(_arr[pos] < _arr[vMenor]){
        vMenor = pos;
    }

    pos++
}
//mostra os valores dos indices
console.log(`O indice do maior valor é: ${vMaior}`);
console.log(`O indice do menor valor é: ${vMenor}`);



