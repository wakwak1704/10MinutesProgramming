$(function() {
    $("#generate").on("click", function(event) {
        const userName = $("#user-name").val();
        /* User nameからハッシュ値（MD5）を生成 */
        const hash = md5(userName);
        /* ハッシュ値（16進数）を一桁づつ配列に格納 */
        const splitedHash = Array.from(hash);
        /* identiconの5x5のグリッドを配列で表現 */
        let bitMap = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ];
        for(let indexX = 0; indexX < 3; indexX++) {
            for(let indexY = 0; indexY < 5; indexY++) {
                if(splitedHash[indexX * indexY] % 2 == 0) {
                    bitMap[indexX][indexY] = true;
                    /* x軸に垂直な線対称のbit mapを作成*/
                    const maxIndexX = 4;
                    bitMap[maxIndexX - indexX][indexY] = true;
                }
            }
        }
        console.log(bitMap);
        const cvs = $("#identicon-canvas").get(0);
        const ctx = cvs.getContext('2d');
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = "orange";
        for(let indexX = 0; indexX < 5; indexX++) {
            for(let indexY = 0; indexY < 5; indexY++) {
                /* bit mapのtrueの箇所だけを塗りつぶし */
                if(bitMap[indexX][indexY] === true) {
                    const bitWidth = 100;
                    const bitHeight = 100;
                    ctx.fillRect(bitWidth * indexX, bitHeight * indexY, bitWidth, bitHeight);
                }
            }
        }
    });
});