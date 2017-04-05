'use strict';

exports.consulta = function(args, res, next) {
  /**
   * /Generaarchivo
   * Servicio que realiza una consulta a la bd
   *
   * primer login ConsultaArchivo-in consulta (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "descripcion" : "pago nomina segunda quincena",
  "nombreArchivo" : "Segunda Quincena de Julio 2015",
  "cuentaOrigen" : "cuenta ahorro-6025.000",
  "Fechaaplicacion" : "10/04/2017",
  "secuencial" : 40
}, {
  "numero_operaciones" : "100",
  "nominaBanamex" : "70",
  "pagosInterbancarios" : "30",
  "monto_total" : "$100.000.00 MXN"
}, {
   "nomnre":["Arturo Nuñez Zanabria","Oscar Dias Gonzalez"],
   "comentarios":["01 anunezz","20 odiazg"]
}];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

