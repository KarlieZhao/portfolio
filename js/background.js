setup = e => {
    resetBG(), colorMode(HSB), rectMode(CENTER)
}, resetBG = e => {
    createCanvas(windowWidth, windowHeight).parent("backdrop"), w = min(width, height), h = w / 2, thisHue = random(360), background(0), frameRate(20), noStroke()
}, draw = e => {
    translate(width / 2, height / 2), background(0), DrawRect(w, 0, 0, thisHue)
}, DrawRect = (e, t, r) => {
    e / h < abs(noise((mouseX / 5 - t) / h + 1, (mouseY / 5 - r) / h + frameCount / 1e3, mag(t, r) / w) - .5) ? (fill((thisHue + 10 * e) % 360, 5 * e, 70 - e, 1 - .05 * e), rect( t, r, 1.3*e,1.2*e)) : 2.5 < (e /= 2) && (DrawRect(e, t - e, r - e), DrawRect(e, t + e, r - e), DrawRect(e, t - e, r + e), DrawRect(e, t + e, r + e))
}, $(window).resize(function () {
    resetBG()
});