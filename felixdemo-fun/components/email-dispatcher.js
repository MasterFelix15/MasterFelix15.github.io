function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    window.open('mailto:felixatnus2013@gmail.com?subject=Website Feedback&body=' + 'message from '+name+'('+email+'): '+message);
}

function submit() {
    if (validate()) {
        $('#warningModal').modal('show');
    } else {
        $('#errorModal').modal('show');
    }
}

function validate() {
    var name = document.getElementById("name").value;
    var nameIsValid=name.length>3;
    if (nameIsValid) {
        $('#name-alert').hide();
    } else {
        $('#name-alert').show();
    }
    var email = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailIsValid=regex.test(email);
    if (emailIsValid) {
        $('#email-alert').hide();
    } else {
        $('#email-alert').show();
    }
    var message = document.getElementById("message").value;
    var messageIsValid=message.length>10;
    if (messageIsValid) {
        $('#message-alert').hide();
    } else {
        $('#message-alert').show();
    }
    return nameIsValid && emailIsValid && messageIsValid;
}