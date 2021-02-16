$(function () {
    $('#generate').on('click', function() {
        const userName = $('#user-name').val();   
        console.log('user name: ', userName);     
        const hash = md5(userName);
        console.log('hash: ', hash);

        /* Implement here */
    })
});