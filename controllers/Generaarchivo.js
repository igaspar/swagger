'use strict';

var url = require('url');

var Generaarchivo = require('./GeneraarchivoService');

module.exports.consulta = function consulta (req, res, next) {
  Generaarchivo.consulta(req.swagger.params, res, next);
};
