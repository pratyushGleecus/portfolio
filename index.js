
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    parameter = params
    console.log("here")

    const serviceID = "service_0u40yh8"
    const templateID = "template_x8poxvp"

    emailjs.send(serviceID, templateID, params).then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res)
        alert("Success!!")
    }).catch(err => {
        console.log(err)
    })

}