var app = require('./config/express')();

app.listen(app.get('PORT'), () => {
    console.log(`SERVER ON PORT ${app.get('PORT')}`);
});