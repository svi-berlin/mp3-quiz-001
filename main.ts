function spieleIntro () {
    serialmp3.playMp3Track(1, 1)
}
function geschichteLesen () {
    basic.setLedColor(0x0000ff)
    basic.showNumber(lesen)
    serialmp3.playMp3Track(lesen, 2)
    lesen += 1
    basic.setLedColor(0xff0000)
    if (lesen >= 9) {
        lesen = 1
    }
}
function gameOver () {
    music.playMelody("E D G F B A C5 B ", 238)
}
let lesen = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.showIcon(IconNames.SmallHeart)
serialmp3.setMp3Volume(30)
basic.setLedColor(0x00ff00)
lesen = 1
let fortschrittsanzeige = 0
let quizfrage1 = 1
let quizfrage2 = 4
let erstefragebeantwortet = 0
let nochkeinefragegestellt = 0
let fragegestellt = 0
spieleIntro()
basic.forever(function () {
    if (fortschrittsanzeige == nochkeinefragegestellt) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            serialmp3.playMp3TrackFromFolder(1, 2, Mp3Repeat.No)
            fragegestellt = 1
            fortschrittsanzeige = fragegestellt
            geschichteLesen()
        }
    }
    if (fortschrittsanzeige == 1) {
        if (input.buttonIsPressed(Button.A)) {
            fortschrittsanzeige = 2
            basic.showNumber(2)
            serialmp3.playMp3TrackFromFolder(2, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                fortschrittsanzeige = 2
                basic.showNumber(3)
                serialmp3.playMp3TrackFromFolder(3, 2, Mp3Repeat.No)
            }
        }
    }
    if (fortschrittsanzeige == 2) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            fortschrittsanzeige = 3
            basic.showNumber(4)
            serialmp3.playMp3TrackFromFolder(4, 2, Mp3Repeat.No)
        }
    }
    if (fortschrittsanzeige == 3) {
        if (input.buttonIsPressed(Button.A)) {
            fortschrittsanzeige = 4
            basic.showNumber(5)
            serialmp3.playMp3TrackFromFolder(5, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                fortschrittsanzeige = 4
                basic.showNumber(6)
                serialmp3.playMp3TrackFromFolder(6, 2, Mp3Repeat.No)
            }
        }
    }
    if (fortschrittsanzeige == 4) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            fortschrittsanzeige = 5
            basic.showNumber(7)
            serialmp3.playMp3TrackFromFolder(7, 2, Mp3Repeat.No)
        }
    }
    if (fortschrittsanzeige == 5) {
        if (input.buttonIsPressed(Button.A)) {
            fortschrittsanzeige = 6
            basic.showNumber(8)
            serialmp3.playMp3TrackFromFolder(8, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                fortschrittsanzeige = 6
                basic.showNumber(9)
                serialmp3.playMp3TrackFromFolder(9, 2, Mp3Repeat.No)
            }
        }
    }
    if (fortschrittsanzeige == 6) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            fortschrittsanzeige = 7
            basic.showNumber(10)
            serialmp3.playMp3TrackFromFolder(10, 2, Mp3Repeat.No)
        }
    }
    if (fortschrittsanzeige == 7) {
        if (input.buttonIsPressed(Button.A)) {
            fortschrittsanzeige = 8
            basic.showNumber(11)
            serialmp3.playMp3TrackFromFolder(11, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                fortschrittsanzeige = 8
                basic.showNumber(12)
                serialmp3.playMp3TrackFromFolder(12, 2, Mp3Repeat.No)
            }
        }
    }
    if (fortschrittsanzeige == 8) {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            fortschrittsanzeige = 9
            basic.showNumber(13)
            serialmp3.playMp3TrackFromFolder(13, 2, Mp3Repeat.No)
        }
    }
    if (fortschrittsanzeige == 9) {
        if (input.buttonIsPressed(Button.A)) {
            fortschrittsanzeige = 0
            basic.showNumber(14)
            serialmp3.playMp3TrackFromFolder(14, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                fortschrittsanzeige = 0
                basic.showNumber(15)
                serialmp3.playMp3TrackFromFolder(15, 2, Mp3Repeat.No)
            }
        }
        if (fortschrittsanzeige == 0 && fragegestellt == 1) {
            gameOver()
        }
    }
})
