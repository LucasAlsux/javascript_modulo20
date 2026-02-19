const {multiplos} = require ('C:/Repositorio/javascript modulo 20/multiplos_5_e_7.js')

test('se retorna o esperado', () => {

    let valor = 700

    const resultado = (multiplos(valor))

    expect(multiplos).toBe(7350)

}) 