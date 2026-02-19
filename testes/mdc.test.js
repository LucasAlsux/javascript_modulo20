const { MDC } = require ('C:/Repositorio/javascript modulo 20/MDC.js')

test('se o mdc é correto', () => {
    
    let valor1 = 15
    let valor2 = 10
    let resultadoesp = 5

    const resultado = MDC(valor1, valor2)

    expect(resultado).toEqual(resultadoesp)

})