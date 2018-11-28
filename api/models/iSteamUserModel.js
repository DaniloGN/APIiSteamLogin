'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Insira seu nome'
  },
  email: {
    type: String,
    unique: true,
    required: 'Insira seu email'
  },
  password: {
    type: String,
    required: 'Insira uma senha'
  }
});

module.exports = mongoose.model('Users', UserSchema);