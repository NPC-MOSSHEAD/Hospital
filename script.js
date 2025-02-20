
var crsr = document.querySelector("#crsr")


addEventListener("mousemove", function (dets) {
    console.log(dets.x)
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    // crsr.style.transition = "0.2s"
})

