var express = require('express');
const nodemailer = require('nodemailer')
const multer = require('multer')
var router = express.Router();
const storage = multer.memoryStorage();  // Store files in memory
const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  // service: 'gmail',
  // auth: {
  //   user: 'contact@imprimis.in', //Update the desired from email id
  //   pass: 'ucth vnjo cngx cxmw',// Passkey has to be generated for the from email id and updated here. //https://www.google.com/account/about/passkeys/
  // },

  host: "smtp.hostinger.com",
  port: 465, // or 587
  secure: true, // true for 465, false for 587 (TLS)
  auth: {
    user: "contact@imprimis.in", // your Hostinger email
    pass: "3^VR49JfjOg",   // Hostinger email password
  },
});

/* GET home page. */
router.post('/send-attachment', upload.single('file'), function(req, res, next) {
  const pdfBuffer = req.file.buffer;
  const subject = req.body.subject

  const mailOptions = {
    from: 'contact@imprimis.in', // Sender email
    to: 'bhandavyabv@gmail.com,bharathsr.0912@gmail.com,contact@imprimis.in',                    // Recipient email
    subject: subject, // Email subject
    text: 'All fields from the form', // Email body text
    attachments: [
      {
        filename: 'generated-file.pdf',
        content: pdfBuffer,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

router.post("/send-email",function(req,res,next){
  var body = req.body.data;
  var emailBody = `Name: ${body.name} \nEmail: ${body.email.toString()} \nMessage: ${body.message}`

  const mailOptions = {
    from: 'contact@imprimis.in', // Sender email
    to: 'contact@imprimis.in',    // Recipient email
    subject: "Contact Request", // Email subject
    text: emailBody, // Email body text
    replyTo: body.email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });

})

module.exports = router;