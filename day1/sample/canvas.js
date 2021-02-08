window.onload = function () {
    const cvs = document.getElementById("my-canvas");
    const ctx = cvs.getContext("2d") ;

    /* clear canvas */
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    /* draw Doraemon's head */
    ctx.strokeStyle="white";
    ctx.fillStyle = "#00B2FF";
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();

    /* draw Doraemon's bell */
    ctx.strokeStyle="white";
    ctx.fillStyle = "#FFC700";
    ctx.beginPath();
    ctx.arc(250, 100, 50, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle="white";
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(250, 100, 10, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
    ctx.fillRect(245, 95, 10, 60);
    
    /* draw Dorayaki */
    ctx.strokeStyle="white";
    ctx.fillStyle = "#FFEC8B";
    ctx.beginPath();
    ctx.arc(400, 100, 40, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle="white";
    ctx.fillStyle = "#9C4B00";
    ctx.beginPath();
    ctx.arc(410, 110, 40, 0, 2 * Math.PI, true);
    ctx.stroke();
    ctx.fill();
}