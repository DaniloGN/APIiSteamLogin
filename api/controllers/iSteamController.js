'use strict';


var mongoose = require('mongoose'),
  user = mongoose.model('Users');

//funcao apenas para mostrar que os clientes estão sendo cadastrados
exports.list_all_users = function(req, res) {
  user.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user.name);
  });
};




exports.create_a_user = function(req, res) {
  var new_user = new user(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.login = function(req, res) {
  user.find({email: req.params.userEmail, password: req.params.userPassword}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user._id);
  });
};

exports.read_a_user = function(req, res) {
  user.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

