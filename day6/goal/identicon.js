$(function () {
    $('#generate').on('click', function() {
        const userName = $('#user-name').val();   
        console.log('user name: ', userName);     
        const hash = md5(userName);
        console.log('hash: ', hash);

        const splitedHash = Array.from(hash);
        console.log('splited hash: ', splitedHash);

        /* 
         * 塗りつぶし箇所を2次元配列で表現 
         *
         * 例：上から2つ目、左から3つ目のグリッドは、
         * splitedHash[5]の値が偶数ならfillMap[1][2]をtrueにする（塗りつぶす）
         */
        let fillMap = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
        ];

        
        for(let indexY = 0; indexY < 5; indexY++) {
            for(let indexX = 0; indexX < 3; indexX++) {
                const indexOfHash = (indexY + 1) * (indexX + 1) - 1;
                if(parseInt(splitedHash[indexOfHash], 16) % 2 == 0) {
                    /* 偶数箇所は塗りつぶし */
                    fillMap[indexY][indexX] = true;
                    /* 中心の列を挟んで右側も塗りつぶす */
                    const INDEX_X_MAX = 4; /* インデックスの最大値 */
                    fillMap[indexY][INDEX_X_MAX - indexX] = true;
                }
            }
        }

        console.log(fillMap);
        
    })
});