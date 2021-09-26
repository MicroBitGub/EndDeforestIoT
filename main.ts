input.onGesture(Gesture.FreeFall, function () {
    radio.sendString(TreeFallMessage)
    radio.sendString("" + (Latitude))
    radio.sendString("" + (Longitude))
})
let TreeFallMessage = ""
let Longitude = 0
let Latitude = 0
radio.setGroup(1)
Latitude = 52.1818424
Longitude = 0.1789449
TreeFallMessage = "Tree Fallen"
let GPS = "" + Latitude + Longitude
basic.showString(GPS)
