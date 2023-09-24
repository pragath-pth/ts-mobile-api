const cron = require('cron');
const https = require('https');

const backendUrl = 'https://ts-mobile-api.onrender.com';
const job = new cron.CronJob('*/14 * * * *', function () {
    console.log('Restarting Server');

    https.get(backendUrl, (res) => {
        if (res.statusCode === 200) {
            console.log('Server Restarted');
        } else {
            console.error(
                `Failed to Restart Server with Status Code: ${res.statusCode}`
            );
        }
    })
});

module.exports = job;