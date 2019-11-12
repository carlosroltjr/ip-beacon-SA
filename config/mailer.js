// NODEMAILER TRANSPORTER
var nodemailer = require('nodemailer');

module.exports = () => {
    // TRANSPORTER CONFIG
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'user',
            pass: 'pass'
        }
    });

    return transporter;
};