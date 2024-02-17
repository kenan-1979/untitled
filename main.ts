let distance = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    distance = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (distance > 10 && distance < 20) {
        TPBot.setWheels(0, 0)
    } else if (distance < 10) {
        TPBot.setWheels(-30, -30)
    } else {
        TPBot.setWheels(30, 30)
    }
})
