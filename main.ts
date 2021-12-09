input.onButtonPressed(Button.AB, function () {
    radio.sendString("avance")
})
radio.onReceivedString(function (receivedString) {
    if ("avance" == receivedString) {
        CP.ActiveMoteur(CP.moteurs.M1, 255)
        CP.ActiveMoteur(CP.moteurs.M2, 255)
        CP.ActiveMoteur(CP.moteurs.M3, 255)
        CP.ActiveMoteur(CP.moteurs.M4, 255)
    } else if ("stop" == receivedString) {
        CP.ActiveMoteur(CP.moteurs.M1, 0)
        CP.ActiveMoteur(CP.moteurs.M2, 0)
        CP.ActiveMoteur(CP.moteurs.M3, 0)
        CP.ActiveMoteur(CP.moteurs.M4, 0)
    } else {
    	
    }
})
radio.setGroup(4)
let i = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
