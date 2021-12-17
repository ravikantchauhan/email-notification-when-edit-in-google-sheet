//@OnlyCurrentDoc
function processEdit(e) {  
  MailApp.sendEmail({
    to: "youremail@example.com",
    subject: "New sign up -- parent teachers conference",
    body: "The Parent-Teacher conference sign up sheet was edited."
  });
}