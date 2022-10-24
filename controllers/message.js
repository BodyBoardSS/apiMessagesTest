require('dotenv').config()
const twilio = require('twilio');
const accountSid = process.env.ACCOUNT_SID || 'AC50bb98caf73b28bfe138e75f548d81fa'; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH_TOKEN || '79f0895359d7114921d12413c2fcd440';

messagePost = (req, res) => {
    const client = new twilio(accountSid, authToken);
    console.log(`accountSid: ${accountSid}, authToken: ${authToken}`);
    const { to, text } = req.body;

    client.messages.create({
        body: text,
        to: to, // Text this number
        from: '+12136421347', // From a valid Twilio number
    }).then(message => {
        console.log(message.sid);
        res.status(201).json({
            success: true,
            message: message.sid
        })
    }).catch(err => {
        res.status(500).json(err)
    });
}

module.exports = {
    messagePost
}