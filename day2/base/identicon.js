$(function() {
    $("#generate").on("click", function(event) {
        const userName = $("#user-name").val();
        const hash = md5(userName);
        const splitedHash = Array.from(hash);
        console.log(splitedHash);
    });
});