input.onGesture(Gesture.FreeFall, function () {
    while (true) {
        radio.sendString(GPS)
    }
})
let GPS = ""
radio.setGroup(1)
let Latitude = 52.1818424
let Longitude = 0.1789449
let TreeFallMessage = "Tree Fallen"
GPS = "" + Latitude + Longitude + TreeFallMessage
basic.showString(GPS)
