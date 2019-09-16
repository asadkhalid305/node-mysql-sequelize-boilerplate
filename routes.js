/**
* npm packages and custom files import
*/
const Express = require('express');
const User = require('./controller/user');

var routes = (application) => {
    /**
     * Configuring express to entertain client's request
     */
    application.use((req, res, next) => {
        console.log('Routes activated!');
        console.log('Authenticating Developer');
        return next();
    });

    /**
     * First way of redirecting an API
     * You can write an API directly in the routing path as follow
     *  */
    application.get('/app/status', function (req, res) {
        //do your logic here

        //send response
        res.status(200).send({
            message: 'success',
            data: "Hello World!"
        });
    })

    /**
     * Second way of redirecting an API request
     * You can import object/function to call it in route
     *  */
    /**
     * Example user APIs
     *  */
    application.post('/signup', User.signup);
    application.post('/login', User.login);

    /**
     * Following route will be invoked when user request path will not be found 
     * route-not-found error must come after all routes declaration
     */
    application.use((req, res, next) => {
        res.status(404).send('Route not found!');
    });
}

module.exports = routes
