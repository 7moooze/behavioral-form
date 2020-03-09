// const functions = require('firebase-functions');

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });


const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/

//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'test722ca@gmail.com',
        pass: 'Test@123'
    }
});
exports.sendEmail = functions.firestore
    .document('tickets/{ticketId}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: `noreply@behavioralform.com`,
            to: snap.data().Email,
            subject: 'New Ticket has been created!',
            html: `      <style type="text/css">
            body, p, div {
              font-family: arial,helvetica,sans-serif;
              font-size: 14px;
            }
            body {
              color: #000000;
            }
            body a {
              color: #1188E6;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 100% !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .social-icon-column {
                display: inline-block !important;
              }
            }
          </style>
              <!--user entered Head Start--><!--End Head user entered-->
            </head>
            <body>
              <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; color:#000000; background-color:#FFFFFF; font-family:arial,helvetica,sans-serif;">
                <div class="webkit">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
                    <tr>
                      <td valign="top" bgcolor="#FFFFFF" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
          <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                              <tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
                <p></p>
              </td>
            </tr>
          </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="96bced9b-dca6-406f-b5c4-160a7f13c1cf">
            <tbody>
              <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                  <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; height:auto !important; max-width:20% !important; width:20%;" width="120" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/a0dee531db6b1000/a2d6fded-880e-4806-9d0a-3e2fa552e901/748x504.png">
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="ae42cd9f-fbd8-4658-a955-4323e10b6529" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Hi,</div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit">Your Behavioral Form Ticket has been created!</div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit">Ticket ID : ${snap.id}</div>
        <div style="font-family: inherit; text-align: inherit">Date: ${snap.data().date}</div>
        <div style="font-family: inherit; text-align: inherit">Author: ${snap.data().TFname +" "+ snap.data().TLname}</div>
        <div style="font-family: inherit; text-align: inherit">Title: ${snap.data().Title}</div>
        <div style="font-family: inherit; text-align: inherit">Content: ${snap.data().description}</div><div></div></div></td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="ac90f2aa-628f-4c7a-b6c3-71ee18837045">
              <tbody>
                <tr>
                  <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                      <tbody>
                        <tr>
                        <td align="center" bgcolor="#008eff" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                          <a href="" style="border-radius:6px; border-width:1px; color:#ffffff; display:inline-block; font-weight:normal; letter-spacing:0px; padding:12px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; font-size:14px; line-height:normal; background-color:#008eff; border:1px solid #000000; border-color:#000000;" target="_blank">View full ticket</a>
                        </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="df29c549-3aee-4ba8-8f0a-eb3c310cdb17" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Regards,</div>
        <div style="font-family: inherit; text-align: inherit"><span style="caret-color: rgb(0, 0, 0); color: #000000; font-family: arial, helvetica, sans-serif; font-size: 14px; font-style: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; text-align: start; text-indent: 0px; text-transform: none; white-space: pre-wrap; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration: none; float: none; display: inline">Behavioral Form Team</span></div><div></div></div></td>
              </tr>
            </tbody>
          </table></td>
                                              </tr>
                                            </table>
                                            <!--[if mso]>
                                          </td>
                                        </tr>
                                      </table>
                                    </center>
                                    <![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>`
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });
//Send Email Using HTTP POST
    exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
        const mailOptions = {
            from: `noreply@behavioralform.com`,
            to: req.body.Email,
            subject: 'contact form message',
            html: `<h1>Order Confirmation</h1>
                                <p>
                                   <b>Email: </b>${req.body.Email}<br>
                                </p>`
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                return res.send(error.toString());
            }
            var data = JSON.stringify(data)
            return res.send(`Sent! ${data}`);
        });
    });