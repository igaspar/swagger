'use strict';

var url = require('url');

var Layout = require('./LayoutService');

module.exports.consultas = function consultas (req, res, next) {
  Layout.consultas(req.swagger.params, res, next);
};
