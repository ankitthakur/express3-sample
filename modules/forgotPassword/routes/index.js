var ForgotRoutes = function (app) {
    
    'use strict';
    
    this.displayName = 'ForgotRoutes';
    
    var routes,
        ForgotViewModel = {
            Forgot: 'Forgot Password',
            Email: 'Email',
            email: 'Enter Email',
            submit: 'Submit'
        };
    
    routes = function (app) {
        
        app.get('/forgot', function (req, res) {
            res.render('html/forgot', ForgotViewModel);
        });
        
    
        app.post('/forgot', function (req, res) {
            var nodemailer = require("nodemailer");
            console.log('start');
            // create reusable transport method (opens pool of SMTP connections)
            var smtpTransport = nodemailer.createTransport("SMTP", {
                host: "smtp.server.com", // hostname
                secureConnection: true, // use SSL
                port: 465, // port for secure SMTP
                auth: {
                    user: "ankitthakur@server.com",
                    pass: "password"
                }
            });
            
            console.log('configure smtp transport');
            
            // setup e-mail data with unicode symbols
            var mailOptions = {
                from: "Ankit Thakur ✔ <ankit.thakur@server.com>", // sender address
                subject: "Hello ✔", // Subject line
                text: "Hello world ✔", // plaintext body
                html: "<b>Hello world ✔</b>" // html body
            };
            
            
            console.log('mailoptions: ' + mailOptions);
            console.log('req.body.email: ' + req.body.email);
            
            mailOptions.to = req.body.email;
            
            console.log('mailoptions: ' + mailOptions);
            
            // send mail with defined transport object
            smtpTransport.sendMail(mailOptions, function(error, response){
                
                console.log('mailoptions error : ' + error);
                console.log('mailoptions response: ' + response);
                
                if(error){
                    console.log(error);
                }else{
                    console.log("Message sent: " + response.message);
                }
            
                // if you don't want to use this transport object anymore, uncomment following line
                //smtpTransport.close(); // shut down the connection pool, no more messages
            });
            
        });
    
    };
    
    routes(app);
};

module.exports = ForgotRoutes;