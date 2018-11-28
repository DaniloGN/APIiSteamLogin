'use strict';
module.exports = function(app) {
  var LoginController = require('../controllers/iSteamController');

  // todoList Routes
  app.route('/user')
    .get(LoginController.list_all_users)
    .post(LoginController.create_a_user);

  app.route('/login')
    .post(LoginController.login);

};
