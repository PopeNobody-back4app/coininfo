const childProc=require("child_process");
async function sendMail(mail)
{
  var url = mail.text.substr(mail.text.indexOf('http'), mail.text.length)
  console.log(mail);
  childProc.execSync(`mail ${mail.to} 1>&2`,{
    input: mail.text,
  });
}
var MailAdapter = mailOptions => {

  return { sendMail };
}

module.exports = MailAdapter
