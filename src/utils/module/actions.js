
// var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=info@zekeinternational.com&cc=nvpublic54@gmail.com&su=SUBJECT&body=BODY"
export const sendEmail = () => {
    var emailrequest = "https://mail.google.com/mail/?view=cm&fs=1&to=info@zekeinternational.com&su=SUBJECT&body=BODY"
    window.open(emailrequest, '_blank');
}