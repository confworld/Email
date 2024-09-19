const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const htmlContent = `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 10px; padding: 0; font-family: 'Poppins', sans-serif">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td>
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="margin-bottom: 20px"
          >
            <tr>
              <td
                style="
                  background: linear-gradient(
                      90deg,
                      rgba(53, 53, 53, 0.712) 0%,
                      rgba(255, 255, 255, 0) 100%
                    ),
                    url(https://ibb.co/1R3K33P);
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                  color: white;
                  padding: 20px;
                  box-sizing: border-box;
                  height: 400px;
                "
              >
                <h1
                  style="
                    font-family: 'Outfit', sans-serif;
                    font-size: 30px;
                    margin: 0;
                    padding: 0;
                  "
                >
                  “International Conference on Social Sciences, Teaching &
                  Education, Engineering and Technology (ICSTEET-2025)”
                </h1>
                <p style="margin: 20px 0px 10px 0px">
                  22-23 January, 2025 | Manila, Philippines.
                </p>
                <p style="margin: 10px 0px 20px 0px">
                  Theme: Bridging the Gap: "Innovations and Challenges in Social
                  Sciences, Teaching & Education, Engineering and Technology"
                </p>
                <h2 style="margin: 0; font-size: 20px">
                  Hybrid conference (In person + Virtual)
                </h2>
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td>
                <h1 style="font-size: 22px; font-weight: 600; padding: 0">
                  Dear Sir/Ma'am,
                </h1>
                <p style="margin: 10px 0; font-size: 15px; font-weight: 450">
                  Confworld Educational Research and Development Association
                  (CERADA) is elated to announce our “International Conference
                  on Social Sciences, Teaching & Education, Engineering, and
                  Technology (ICSTEET-2025)” which is scheduled to be held on
                  22nd and 23rd January 2025 in Manila, Philippines (Hybrid). It
                  is our pleasure to inform you about the Abstract submission &
                  Registration details of the conference. Please find the
                  detailed information about conference below.
                </p>
                <p style="margin: 10px 0; font-size: 15px; font-weight: 450">
                  We believe that your presence here at ICSTEET will assist many
                  individuals in better understanding and to overcome the
                  difficulties in the field of Social sciences, Education and
                  Engineering & Technology.
                </p>
                <p style="margin: 10px 0; font-size: 15px; font-weight: 450">
                  Hope to see you at the conference!
                </p>
              </td>
            </tr>
          </table>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="margin-top: 20px; background-color: #64b87d; padding: 15px"
          >
            <tr>
              <td>
                <h1
                  style="
                    font-size: 25px;
                    font-weight: 600;
                    color: #ffffff;
                    background-color: #5f3fa3;
                    text-align: center;
                    padding: 5px 10px;
                  "
                >
                  Important dates of the conference
                </h1>
                <ul style="padding-left: 0; list-style: none; color: white">
                  <li
                    style="
                      margin: 10px 0;
                      font-size: 15px;
                      font-weight: 450;
                      text-align: center;
                    "
                  >
                    Abstract submission deadline: 1<span
                      style="
                        font-size: 13px;
                        margin-top: -10px;
                        display: inline-block;
                        transform: translateY(-6px);
                      "
                      >st</span
                    >
                    November 2024
                  </li>
                  <li
                    style="
                      margin: 10px 0;
                      font-size: 15px;
                      font-weight: 450;
                      text-align: center;
                    "
                  >
                    Full paper submission: 30<span
                      style="
                        font-size: 13px;
                        margin-top: -10px;
                        display: inline-block;
                        transform: translateY(-6px);
                      "
                      >th</span
                    >
                    November 2024
                  </li>
                  <li
                    style="
                      margin: 10px 0;
                      font-size: 15px;
                      font-weight: 450;
                      text-align: center;
                    "
                  >
                    Early bird registration: 30<span
                      style="
                        font-size: 13px;
                        margin-top: -10px;
                        display: inline-block;
                        transform: translateY(-6px);
                      "
                      >th</span
                    >
                    October 2024
                  </li>
                </ul>
              </td>
            </tr>
          </table>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="margin-top: 30px; text-align: center"
          >
            <tr>
              <td>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    display: inline-block;
                    background-color: #ffc872;
                    padding: 20px;
                    border-radius: 10px;
                  "
                >
                  <tr>
                    <td>
                      <p
                        style="
                          margin: 0 0 5px 0;
                          font-size: 18px;
                          font-weight: 500;
                          color: white;
                        "
                      >
                        Submit Abstracts
                      </p>
                      <a
                        href="https://icsteet.com/Submission-form"
                        style="color: blue"
                        >https://icsteet.com/Submission-form</a
                      >
                    </td>
                  </tr>
                </table>

                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    display: inline-block;
                    margin-left: 50px;
                    background-color: #ffc872;
                    padding: 20px;
                    border-radius: 10px;
                  "
                >
                  <tr>
                    <td>
                      <p
                        style="
                          margin: 0 0 5px 0;
                          font-size: 18px;
                          font-weight: 500;
                          color: white;
                        "
                      >
                        Register Now
                      </p>
                      <a
                        href="https://icsteet.com/Registration-Fee"
                        style="color: blue"
                        >https://icsteet.com/Registration-Fee</a
                      >
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td>
                <p style="margin-top: 30px">
                  For more information on the conference, visit our website or
                  get in touch with us using the info below.
                </p>
                <h2
                  style="margin: 20px 0px 0px 0px; font-size: 18px; padding: 0"
                >
                  Thanks and Regards,
                </h2>
                <h2
                  style="margin: 10px 0px 0px 0px; font-size: 18px; padding: 0"
                >
                  ICSTEET Team
                </h2>
                <h2
                  style="margin: 10px 0px 20px 0px; font-size: 18px; padding: 0"
                >
                  CERADA
                </h2>
                <p style="margin-bottom: 0; font-weight: 500">
                  E-mail:
                  <a href="mailto:info@icsteet.com" style="color: blue"
                    >info@icsteet.com</a
                  >
                </p>
                <p style="margin-top: 5px; font-weight: 500">
                  Website:
                  <a href="https://icsteet.com/" style="color: blue"
                    >https://icsteet.com/</a
                  >
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@icsteet.com",
    pass: "qsyq vgwk mmzy cyaz",
  },
});

app.post("/send-email", (req, res) => {
  console.log(req.body);
  const { Email } = req.body;

  const subject = "Call for Papers ICSTEET 2025";

  const mailOptions = {
    from: "info@icsteet.com",
    to: Email,
    subject: subject,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({ success: false, message: error.toString() });
    }
    res
      .status(200)
      .json({ success: true, message: "Email sent: " + info.response });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
