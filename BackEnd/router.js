var IndexController = require('./Controllers/IndexController');
var LoginController = require('./Controllers/LoginController');
var MoodController = require('./Controllers/MoodController');
var TopsController = require('./Controllers/TopsController');
var RecController = require('./Controllers/RecController');
var PlayerController = require('./Controllers/PlayerController');
var HomeController = require('./Controllers/HomeController');
// var ProductController = require('./Controllers/ProductController');
// var ManuController = require('./Controllers/ManuController');

// Routes
module.exports = function(app){
    // Main Routes
    app.get('/',IndexController.Index);
    app.get('/login', LoginController.Index);
    app.get('/mood', MoodController.Index);
    app.get('/tops', TopsController.Index);
    app.get('/recommendation', RecController.Index);
    app.get('/playerPage', PlayerController.Index)
    app.post('/home', HomeController.Index);
    app.post('/actionlogin', LoginController.Action);
    app.post('/actionMood', MoodController.Action)
    app.post('/tops', TopsController.Index)
};
