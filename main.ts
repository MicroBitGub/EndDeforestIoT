input.onGesture(Gesture.FreeFall, function () {
    while (true) {
        radio.sendString(TreeFallMessage)
        radio.sendString("" + (Latitude))
        radio.sendString("" + (Longitude))
    }
})
let TreeFallMessage = ""
let Longitude = 0
let Latitude = 0
radio.setGroup(1)
Latitude = -3.4653053
Longitude = -62.2158805
TreeFallMessage = "Tree Fallen"
let GPS = "" + Latitude + Longitude
basic.showString(GPS)
