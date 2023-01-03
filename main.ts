input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
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
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (receivedString == "dah") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
        basic.clearScreen()
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
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
radio.setGroup(1)
music.setBuiltInSpeakerEnabled(true)
