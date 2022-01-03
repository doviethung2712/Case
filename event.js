window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 38:
            rightPaddle.dy = 0;
            break;
        case 40:
            rightPaddle.dy = 0;
            break
        case 81:
            leftPaddle.dy = 0;
            break;
        case 65:
            leftPaddle.dy = 0;
    }
})

window.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 38:
            rightPaddle.dy -= 3;
            break;
        case 40:
            rightPaddle.dy += 3;
            break
        case 81:
            leftPaddle.dy -= 3;
            break;
        case 65:
            leftPaddle.dy += 3;
            break;
    }
})