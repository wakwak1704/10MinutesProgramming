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

        /* canvas要素を取得 */
        const cvs = $('#identicon-canvas').get(0);
        /* 描画用のコンテキストを取得 */
        const ctx = cvs.getContext('2d');

        /* canvasをクリアする */
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        /*
         * 塗りつぶしの色を指定
         *
         * 次回から、ハッシュ値に応じて塗りつぶしの色を変えられるようにします。
         */
        ctx.fillStyle = "orange";

        /* 塗りつぶしは100px x 100pxの正方形 */
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