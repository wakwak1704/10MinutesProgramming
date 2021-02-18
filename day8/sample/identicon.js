$(function () {
    $("#generate").on("click", function (event) {
        const userName = $("#user-name").val();
        /* User nameからハッシュ値（MD5）を生成 */
        const hash = md5(userName);
        /* ハッシュ値（16進数）を一桁づつ配列に格納 */
        const splitedHash = Array.from(hash);
        /* identiconの5x5のグリッドを2次元配列で表現 */
        let fillMap = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ];
        /* md5ハッシュ値（32桁）の先頭15桁）を取得 */
        const digit1to15 = splitedHash.slice(0, 15);
        /* 偶数桁の箇所だけ塗りつぶし */
        for (let indexX = 0; indexX < 3; indexX++) {
            for (let indexY = 0; indexY < 5; indexY++) {
                if (parseInt(digit1to15[indexX * indexY], 16) % 2 == 0) {
                    fillMap[indexX][indexY] = true;
                    /* x軸に垂直な線対称な塗りつぶし*/
                    const maxIndexX = 4;
                    fillMap[maxIndexX - indexX][indexY] = true;
                }
            }
        }
        /* 塗りつぶし箇所をコンソールに出力 */
        console.log("fill map", fillMap);

        /* md5ハッシュ値の末尾7桁を塗りつぶしの色彩、彩度、明度に使う */
        /* 始めの3桁を色彩に使う */
        const digit26to28 = splitedHash.slice(25, 28);
        /* 次の2桁を彩度に使う */
        const digit29to30 = splitedHash.slice(28, 30);
        /* 次の2桁を明度に使う */
        const digit31to32 = splitedHash.slice(30);

        /* 色彩が取りうる0〜360の範囲に値を変換する */
        const hue = rangeMap(parseInt(digit26to28.join(''), 16), 0, 4095, 0, 360);
        /* GitHubでは65 - （0〜20の範囲の値)を彩度に使っている */
        const saturation = 65 - rangeMap(parseInt(digit29to30.join(''), 16), 0, 255, 0, 20);
        /* GitHubでは75 - （0〜20の範囲の値)を明度に使っている */
        const lightness = 75 - rangeMap(parseInt(digit31to32.join(''), 16), 0, 255, 0, 20);
        /* 塗りつぶしの色をHSL形式（色相、彩度、明度）でコンソールに出力） */
        console.log("color(hsl): ", hue, saturation, lightness);

        /* canvasのコンテキストを取得 */
        const cvs = $("#identicon-canvas").get(0);
        const ctx = cvs.getContext('2d');
        /* canvasをクリアする */
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        /* 塗りつぶしの色を指定 */
        ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        for (let indexX = 0; indexX < 5; indexX++) {
            for (let indexY = 0; indexY < 5; indexY++) {
                /* fillMapのtrueの箇所だけを塗りつぶし */
                if (fillMap[indexX][indexY] === true) {
                    const bitWidth = 100;
                    const bitHeight = 100;
                    /* 塗りつぶし */
                    ctx.fillRect(bitWidth * indexX, bitHeight * indexY, bitWidth, bitHeight);
                }
            }
        }
    });
});

/* ある範囲の値を別の範囲の値へ変換する */
/* 例：0〜255をとり得る値をパーセンテージ（0〜100）に変換する場合は rangeMap(<変換する値>, 0, 255, 0, 100) */
function rangeMap(oldValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin);
    const newRange = (newMax - newMin);
    return Math.round((((oldValue - oldMin) * newRange) / oldRange) + newMin);
}