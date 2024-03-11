input.onButtonPressed(Button.A, function () {
    if (!(Lichtstatus)) {
        Lichtstatus = 1
    } else {
        Lichtstatus = 0
    }
})
let Lüfterstatus = 0
let Lichtstatus = 0
Lichtstatus = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0) / 170.5,
    6
    )
    if (Lichtstatus) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        Lüfterstatus = 1
    } else {
        if (Lüfterstatus) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            basic.pause(pins.analogReadPin(AnalogPin.P0) * 1000 / 170.5)
            pins.digitalWritePin(DigitalPin.P2, 0)
            Lüfterstatus = 0
        }
    }
})
