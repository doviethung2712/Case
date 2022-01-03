function collides(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.r > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.r > obj2.y;
}
let checkStart = false;
let check = false;
let teamWin = "";


function play() {
    requestAnimationFrame(play)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    object()
    checkStart=true;
    if (check == false) {
        teamWin = ""

        leftPaddle.y += leftPaddle.dy;
        rightPaddle.y += rightPaddle.dy;

        if (leftPaddle.y < 0) {
            leftPaddle.y = 0
        } else if (leftPaddle.y > 110) {
            leftPaddle.y = 110
        }

        if (rightPaddle.y < 0) {
            rightPaddle.y = 0
        } else if (rightPaddle.y > 110) {
            rightPaddle.y = 110
        }

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.y < ball.r) {
            ball.y = ball.r;
            ball.dy *= -1;
        } else if (ball.y > 145) {
            ball.y = 145;
            ball.dy *= -1;
        }
    } else {
        color = ctx.createLinearGradient(0, 0, canvas.width, 0);
        color.addColorStop("0.2", "magenta");
        color.addColorStop("0.5", "blue");
        color.addColorStop("0.8", "red");
        ctx.fillStyle = color;
        ctx.fillText(teamWin, 70, 90);
    }


    if (ball.x > canvas.width) {
        check = true;
        teamWin = "Left Winn.."
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    } else if (ball.x < ball.r) {
        check = true;
        teamWin = "Right Winn.."
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
    }


    if (collides(ball, rightPaddle)) {
        document.getElementById('right').innerHTML = ++right;
        // console.log(ball.dx + ':    1   :' + ball.dy)
        ball.dx *= -1;
        ball.x = rightPaddle.x - ball.r
    } else if (collides(ball, leftPaddle)) {
        document.getElementById('left').innerHTML = ++left;
        // console.log(ball.dx + ':    2   :' + ball.dy)
        ball.dx *= -1;
        ball.x = leftPaddle.x + leftPaddle.width + ball.r
    }


    let dem = left + right;
    if (dem == 4) {
        if (ball.dx > 0) {
            ball.dx = 2;
        } else {
            ball.dx = -2;
        }
        if (ball.dy > 0) {
            ball.dy = 2;
        } else {
            ball.dy = -2;
        }
    } else if (dem == 8){
        if (ball.dx > 0) {
            ball.dx = 4;
        } else {
            ball.dx = -4;
        }
        if (ball.dy > 0) {
            ball.dy = 4;
        } else {
            ball.dy = -4;
        }
    }

}