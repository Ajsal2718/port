
function emailSend(){

    var userName = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    var messageBody = "Name " + userName +
    "<br/> Phone " + phone +
    "<br/> Email " + email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "muhammedajsal532@gmail.com",
        Password : "90139EFFFCCFF63B06F9745D7CAD105617F2",
        To : 'thomashenery08465@gmail.com',
        From : "muhammedajsal532@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if(message == "OK"){
            swal("Successful", "You clicked the button!", "success");
        }
        else{
            swal("Error", "You clicked the button!", "Error");
        }
      }
    );
 }
