$(document).ready(function () {
    var validName = false;
    var validPhone = false;
    var validMessage = false;

    $(".contacts-form").submit(function(event){
        event.preventDefault();

        var name = $("#contacts-name").val();
        var phone = $("#contacts-phone").val();
        var message = $("#contacts-message").val();

        if (name !== "") {
            validName = true;
        } else if (phone !== "") {
            validPhone = true;
        } else if (message !== "") {
            validMessage = true;
        }
        if (validName === validPhone === validMessage === true) {
            $(".contacts-form").unbind('submit').submit();
        }
    });
});

