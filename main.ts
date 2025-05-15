input.onButtonPressed(Button.A, function () {
    basic.showNumber(valor)
})
let valor = 0
valor = 0
basic.forever(function () {
    valor = input.lightLevel()
    if (valor < 90) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
