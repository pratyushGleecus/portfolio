let PUBLIC_KEY, EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID;


(async function apiKeys() {
    const response = await fetch("https://node-8l0c2lxxr-pratyushgleecus.vercel.app/apiKeys");
    const res = await response.json();
    EMAIL_SERVICE_ID = res.serviceId
    EMAIL_TEMPLATE_ID = res.templateId
})()


function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    var serviceID = EMAIL_SERVICE_ID;
    var templateID = EMAIL_TEMPLATE_ID;

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Success")
        }, function (error) {
            console.log('FAILED...', error);
        });

}
