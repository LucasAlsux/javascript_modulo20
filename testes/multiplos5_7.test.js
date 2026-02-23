const {multiplos} = require ('../multiplos_5_e_7.js')

test('se retorna o esperado', () => {

    let valor = 700

    const resultado = (multiplos(valor))

    expect(multiplos).toEqual(7350)

}) 