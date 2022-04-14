input.onButtonPressed(Button.A, function () {
    counter += 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    basic.showNumber(counter)
})
let counter = 0
counter = 0
basic.showNumber(counter)
basic.forever(function () {
    while (counter == 5) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
