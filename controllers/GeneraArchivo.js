'use strict';

var url = require('url');

var GeneraArchivo = require('./GeneraArchivoService');

module.exports.consulta = function consulta (req, res, next) {
  GeneraArchivo.consulta(req.swagger.params, res, next);
};
