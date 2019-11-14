// NODEMAILER TRANSPORTER
var nodemailer = require('nodemailer');

module.exports = () => {
    // TRANSPORTER CONFIG
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ip.beacon.sa@gmail.com',
            pass: 'ipbeacon01'
        }
    });

    return transporter;
};