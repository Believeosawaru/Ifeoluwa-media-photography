const nodemailer = require("nodemailer");

// Set up the email transport
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services too (like SMTP, SendGrid, etc.)
  auth: {
    user: "believeosawaru2@gmail.com", // Replace with your email
    pass: "qrdgnkyxguivluzp", // Replace with your email password or an app-specific password
  },
});

// Function to send OTP (using async/await)
async function sendOtpEmail(recipientEmail) {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  const mailOptions = {
    from: "believeosawaru2@gmail.com", // Sender's email
    to: recipientEmail, // Recipient's email
    subject: "Your OTP Code", // Email subject
    text: `Your OTP is: ${otp}`, // Email body
  };

  try {
    // Use await to send the email and handle response
    const info = await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully: " + info.response);
  } catch (error) {
    console.log("Error sending OTP: ", error);
  }

  return otp; // Return OTP for validation
}

module.exports = sendOtpEmail;
