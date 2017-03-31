'use strict';

var url = require('url');

var MinioReynado = require('./MinioReynadoService');

module.exports.minioGET = function minioGET (req, res, next) {
  MinioReynado.minioGET(req.swagger.params, res, next);
};
