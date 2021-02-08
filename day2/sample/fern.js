window.onload = function () {

    let x = 0;
    let y = 0;
    let xi;
    let yi;

    const cvs = document.getElementById("fern-canvas");
    const ctx = cvs.getContext('2d');

    function getPoint() {
        const p = Math.random();

        if (p < 0.01) {
            xi = 0;
            yi = 0.16 * y;
        } else if (p < 0.86) {
            xi = 0.85 * x + 0.04 * y;
            yi = -0.04 * x + 0.85 * y + 1.60;
        } else if (p < 0.93) {
            xi = 0.20 * x + -0.26 * y;
            yi = 0.23 * x + 0.22 * y + 1.60;
        } else {
            xi = -0.15 * x + 0.28 * y;
            yi = 0.26 * x + 0.24 * y + 0.44;
        }

        x = xi;
        y = yi;
    }

    function drawPoint(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "#7CFC00";
        ctx.arc(x, y, 0.5, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fill();
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    for (let i = 0; i < 100000; i++) {
        getPoint();
        const xp = cvs.width * (x + 3) / 6;
        const yp = cvs.height - cvs.height * ((y + 2) / 14);
        drawPoint(xp, yp);
    }
}