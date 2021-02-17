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

        /* Implement here */
    })
});