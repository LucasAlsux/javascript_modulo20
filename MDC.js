//funcao que calcula o mdc, recebe 2 parametros
function MDC (a,b){
    //loop que realiza o algoritimo de euclides
    while(b!==0){

        let c = a % b; //calcula o resto de a com b e salva em c
        a = b; //coloca o valor de b em a
        b = c; //coloca o valor de c em b

   }
    return a;
}

    //vai procurar o mds desses dois numeros
    let num1 = 15 
    let num2 = 10

    //mostra os valores e informa a funcão MDC quais sao os dois parametros a serem usados
    console.log(`MDC de ${num1} e ${num2} é: `,MDC(num1, num2));