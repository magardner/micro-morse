input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("RG=" + convertToText(RadioGroup))
    while (!(input.pinIsPressed(TouchPin.P2))) {
        if (RadioGroup >= 1 && RadioGroup <= 255) {
            if (input.isGesture(Gesture.TiltLeft)) {
                RadioGroup += -1
                basic.showNumber(RadioGroup)
            } else if (input.isGesture(Gesture.TiltRight)) {
                RadioGroup += 1
                basic.showNumber(RadioGroup)
            } else {
            	
            }
        } else {
            RadioGroup = 1
            basic.showNumber(RadioGroup)
        }
    }
    radio.setGroup(RadioGroup)
    basic.showString("RG=" + convertToText(RadioGroup))
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendString("dit")
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "dit") {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (receivedString == "dah") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    radio.sendString("dah")
    basic.clearScreen()
})
let RadioGroup = 0
RadioGroup = 1
radio.setGroup(RadioGroup)
basic.showIcon(IconNames.Happy)
