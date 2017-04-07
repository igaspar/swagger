'use strict';

exports.file Definition POST = function(args, res, next) {
  /**
   * /file
   * Descripcion de los campos por numero de transacion 
   *
   * definicion por tipo de transaccion  IDFileDefinition Respuesta de definicion de transacion
   * returns FileDefinition
   **/
  var examples = {};
  examples['application/json'] = {
  "Side" : 1,
  "FileLines:" : [ {
    "fielFields" : [ {
      "longField" : 1,
      "start" : 1,
      "format" : "1",
      "end" : 1,
      "nombre" : "1",
      "validation" : [ {
        "decimal" : 1.0,
        "int" : 1
      } ]
    } ],
    "Long" : 1,
    "Unique" : false
  } ],
  "FileLimit" : 1,
  "IdOperationLong" : 1,
  "FileType" : "1",
  "IdFileType" : 1
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

