const nodemailer = require('nodemailer');

require('dotenv').config();

const { USER_EMAIL, USER_PASSWORD } = process.env;

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const emailOptions = { ...data, from: USER_EMAIL };
  await transporter.sendMail(emailOptions);
  return true;
};

module.exports = sendEmail;