'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _db = require('../../config/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // login route
//using firebase authentication method

var login = function login(app, db) {
  app.post('/login', function (req, res) {
    var email = req.body.email,
        password = req.body.password;
    _firebase2.default.auth().signInWithEmailAndPassword(email, password).then(res.redirect('/dashboard'));
    res.json({ message: 'Success: A user has successfuly sign in.' }).catch(function (err) {
      console.log(err);
      res.json({ message: 'Error: The email or password of the user is invalid' });
    });
  });
};
exports.default = login;