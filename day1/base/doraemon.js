window.onload = function () {
    const cvs = $("#doraemon-canvas").get(0);
    const ctx = cvs.getContext("2d") ;
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    /* Implement here */

    /* sample */
    /* draw rect */
    ctx.fillStyle = "red"
    ctx.fillRect(50, 50, 100, 100);

    /* draw circle */
    ctx.strokeStyle="black";
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(250, 100, 50, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();

    /* draw text */
    ctx.font = "48px serif";
    ctx.strokeStyle = "black";
    ctx.strokeText("Hello", 400, 100);
    ctx.fillStyle = "blue";
    ctx.fillText("world", 400, 150);  
}