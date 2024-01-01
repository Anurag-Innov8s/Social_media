const nodeMailer = require("nodemailer");
const { options } = require("../routes/post");


exports.sendEmail = async(req,res)=>{
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "87222bffaa70c3",
          pass: "8687502484511f"
        }
      });

    const mailOptions = {
        from:"process.env.SMPT_MAIL",
        to:options.email,
        subject:options.subject,
        text:options.message,
    }
    await transporter.sendMail(mailOptions);
}