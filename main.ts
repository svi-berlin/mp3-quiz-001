function spieleIntro () {
    serialmp3.playMp3Folder(1, Mp3Repeat.No)
}
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0x00ff00)
spieleIntro()
let frage = 0
basic.forever(function () {
    if (frage == 0) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 1
            serialmp3.playMp3TrackFromFolder(1, 2, Mp3Repeat.No)
        }
    }
    if (frage == 1) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 2
            serialmp3.playMp3TrackFromFolder(2, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                frage = 2
                serialmp3.playMp3TrackFromFolder(3, 2, Mp3Repeat.No)
            }
        }
    }
    if (frage == 2) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 3
            serialmp3.playMp3TrackFromFolder(4, 2, Mp3Repeat.No)
        }
    }
    if (frage == 3) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 4
            serialmp3.playMp3TrackFromFolder(5, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                frage = 4
                serialmp3.playMp3TrackFromFolder(6, 2, Mp3Repeat.No)
            }
        }
    }
    if (frage == 4) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 5
            serialmp3.playMp3TrackFromFolder(7, 2, Mp3Repeat.No)
        }
    }
    if (frage == 5) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 6
            serialmp3.playMp3TrackFromFolder(8, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                frage = 6
                serialmp3.playMp3TrackFromFolder(9, 2, Mp3Repeat.No)
            }
        }
    }
    if (frage == 6) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 7
            serialmp3.playMp3TrackFromFolder(10, 2, Mp3Repeat.No)
        }
    }
    if (frage == 7) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 8
            serialmp3.playMp3TrackFromFolder(12, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                frage = 8
                serialmp3.playMp3TrackFromFolder(11, 2, Mp3Repeat.No)
            }
        }
    }
    if (frage == 8) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 9
            serialmp3.playMp3TrackFromFolder(13, 2, Mp3Repeat.No)
        }
    }
    if (frage == 9) {
        if (input.buttonIsPressed(Button.A)) {
            frage = 0
            serialmp3.playMp3TrackFromFolder(14, 2, Mp3Repeat.No)
        } else {
            if (input.buttonIsPressed(Button.B)) {
                frage = 0
                serialmp3.playMp3TrackFromFolder(15, 2, Mp3Repeat.No)
            }
        }
    }
})
