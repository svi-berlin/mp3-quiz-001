function spieleIntro () {
    serialmp3.playMp3Folder(1, Mp3Repeat.No)
}
function pulsiereHerz () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
}
function blinkeLed () {
    basic.setLedColor(0x00ff00)
    basic.pause(1000)
    basic.turnRgbLedOff()
    basic.pause(1000)
    basic.setLedColor(0xff0000)
    basic.pause(1000)
}
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
spieleIntro()
basic.forever(function () {
    pulsiereHerz()
    blinkeLed()
})
