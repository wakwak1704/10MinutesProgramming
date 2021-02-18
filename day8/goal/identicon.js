$(function () {
    $('#generate').on('click', function () {
        const userName = $('#user-name').val();
        console.log('user name: ', userName);
        const hash = md5(userName);
        console.log('hash: ', hash);

        const splitedHash = Array.from(hash);
        console.log('splited hash: ', splitedHash);

        let fillMap = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ];


        for (let indexY = 0; indexY < 5; indexY++) {
            for (let indexX = 0; indexX < 3; indexX++) {
                const indexOfHash = (indexY + 1) * (indexX + 1) - 1;
                if (parseInt(splitedHash[indexOfHash], 16) % 2 == 0) {
                    fillMap[indexY][indexX] = true;
                    const INDEX_X_MAX = 4;
                    fillMap[indexY][INDEX_X_MAX - indexX] = true;
                }
            }
        }

        console.log(fillMap);


        /* md5ハッシュ値の末尾7桁を塗りつぶしの色相、彩度、明度に使う */
        /* 始めの3桁を色相に使う */
        const digit26to28 = splitedHash.slice(25, 28);
        /* 次の2桁を彩度に使う */
        const digit29to30 = splitedHash.slice(28, 30);
        /* 次の2桁を明度に使う */
        const digit31to32 = splitedHash.slice(30);

        /* 色相が取りうる0〜360の範囲に値を変換する */
        const hue = rangeMap(parseInt(digit26to28.join(''), 16), 0, 4095, 0, 360);
        /* GitHubでは65 - （0〜20の範囲の値)を彩度に使っている */
        const saturation = 65 - rangeMap(parseInt(digit29to30.join(''), 16), 0, 255, 0, 20);
        /* GitHubでは75 - （0〜20の範囲の値)を明度に使っている */
        const lightness = 75 - rangeMap(parseInt(digit31to32.join(''), 16), 0, 255, 0, 20);
        /* 塗りつぶしの色をHSL形式（色相、彩度、明度）でコンソールに出力） */

        const cvs = $('#identicon-canvas').get(0);
        const ctx = cvs.getContext('2d');

        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        const GRID_WIDTH = 100;
        const GRID_HEIGHT = 100;

        for (let indexY = 0; indexY < 5; indexY++) {
            for (let indexX = 0; indexX < 5; indexX++) {
                if (fillMap[indexY][indexX]) {
                    ctx.fillRect(GRID_WIDTH * indexX, GRID_HEIGHT * indexY, GRID_WIDTH, GRID_HEIGHT);
                }
            }
        }
    })
});

/* ある範囲の値を別の範囲の値へ変換する */
/* 例：0〜255をとり得る値をパーセンテージ（0〜100）に変換する場合は rangeMap(<変換する値>, 0, 255, 0, 100) */
function rangeMap(oldValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin);
    const newRange = (newMax - newMin);
    return Math.round((((oldValue - oldMin) * newRange) / oldRange) + newMin);
}