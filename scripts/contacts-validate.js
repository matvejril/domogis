$(document).ready(function () {
    var validName = false;
    var validMessage = false;

    $(".contacts-form").submit(function(event){
        event.preventDefault();

        var name = $.trim($("#contacts-name").val());
        var message = $.trim($("#contacts-message").val());

        if (name.length !== 0) {
            validName = true;
        }
        if (message.length !== 0) {
            validMessage = true;
        }
        if (validName === validMessage === true) {
            $(".contacts-form").unbind('submit').submit();
        }
    });
});
