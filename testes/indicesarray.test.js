const {indices} = require ('C:/Repositorio/javascript modulo 20/indices_array.js')

test('deve achar o maior e o menor indice', () => {

    let arr2 = [44, 30, 1, 11, 7, 89];
                
    let valor1 = 3
    let valor2 = 5

    const resultado = indices(arr2)

    expect(resultado.vMenor).toBe(valor1)
    expect(resultado.vMaior).toBe(valor2)
})



