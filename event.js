window.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
        case 38:
            rightPaddle.dy = 0;
            break;
        case 40:
            rightPaddle.dy = 0;
            break
        case 87:
            leftPaddle.dy = 0;
            break;
        case 83:
            leftPaddle.dy = 0;
    }
})

window.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
        case 38:
            rightPaddle.dy -= speed + 1;
            break;
        case 40:
            rightPaddle.dy += speed + 1;
            break
        case 87:
            leftPaddle.dy -= speed + 1;
            break;
        case 83:
            leftPaddle.dy += speed + 1;
            break;
    }
})