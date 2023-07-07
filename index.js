
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    var serviceID = `$EMAIL_SERVICE_ID`;
    var templateID = `$EMAIL_TEMPLATE_ID`;
    
    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Success")
        }, function (error) {
            console.log('FAILED...', error);
        });

}
