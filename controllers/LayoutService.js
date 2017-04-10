'use strict';

exports.layoutPOST = function(args, res, next) {
  /**
   * /Layout
   * Servicio que realiza una consulta a la bd
   *
   * ddddddd login FileDefinition-in Layout (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
   "fileDefinition":{
      "idFileType":"1",
      "fileType":"Layout - C",
      "side":"3",
      "fileLimit":"3",
      "idOperationLong":"2",
      "fileLines":{
          "00":{
             "unique":"true",
             "size":"125",
             "fileFields":[
                {
                   "nombre":"Tipo de Registro",
                   "longField":"2",
                   "start":"0",
                   "end":"2",
                   "format":"9",
                   "validation":{
                      "integer":2,
                      "decimal":0
                   }
                }, {
                   "nombre":"Númerico de identificación del cliente",
                   "longField":"12",
                   "start":"2",
                   "end":"14",
                   "format":"9",
                   "validation":{
                      "integer":12,
                      "decimal":0
                   }
                }, {
                   "nombre":"Fecha de pago",
                   "longField":"6",
                   "start":"14",
                   "end":"20",
                   "format":"9",
                   "validation":{
                      "integer":6,
                      "decimal":0
                   }
                }, {
                   "nombre":"Secuencial del archivo",
                   "longField":"4",
                   "start":"20",
                   "end":"24",
                   "format":"9",
                   "validation":{
                      "integer":4,
                      "decimal":0
                   }
                }, {
                   "nombre":"Nombre de la empresa",
                   "longField":"36",
                   "start":"24",
                   "end":"60",
                   "format":"x",
                   "validation":{
                      "integer":0,
                      "decimal":0
                   }
                }, {
                   "nombre":"Descripción del archivo",
                   "longField":"20",
                   "start":"60",
                   "end":"80",
                   "format":"x",
                   "validation":{
                      "integer":0,
                      "decimal":0
                   }
                }, {
                   "nombre":"Naturaleza del archivo",
                   "longField":"2",
                   "start":"80",
                   "end":"82",
                   "format":"9",
                   "validation":{
                      "integer":2,
                      "decimal":0
                   }
                }, {
                   "nombre":"Instrucciones para órdenes de pago",
                   "longField":"40",
                   "start":"82",
                   "end":"122",
                   "format":"x",
                   "validation":{
                      "integer":0,
                      "decimal":0
                   }
                }, {
                   "nombre":"Versión del Layout",
                   "longField":"1",
                   "start":"122",
                   "end":"123",
                   "format":"x",
                   "validation":{
                      "integer":0,
                      "decimal":0
                   }
                }, {
                   "nombre":"Volumen",
                   "longField":"1",
                   "start":"123",
                   "end":"124",
                   "format":"9",
                   "validation":{
                      "integer":1,
                      "decimal":0
                   }
                }, {
                   "nombre":"Características del archivo",
                   "longField":"1",
                   "start":"124",
                   "end":"125",
                   "format":"9",
                   "validation":{
                      "integer":1,
                      "decimal":0
                   }
                }
             ]
          },
          "01":{
             "unique":"false",
             "size":"218",
             "fileFields":[
               {
                  "nombre":"Tipo de Registro",
                  "longField":"2",
                  "start":"0",
                  "end":"2",
                  "format":"9",
                  "validation":{
                     "integer":2,
                     "decimal":0
                  }
               }, {
                  "nombre":"Tipo de operación",
                  "longField":"1",
                  "start":"2",
                  "end":"3",
                  "format":"9",
                  "validation":{
                     "integer":1,
                     "decimal":0
                  }
               }, {
                  "nombre":"Clave de la moneda",
                  "longField":"3",
                  "start":"3",
                  "end":"6",
                  "format":"9",
                  "validation":{
                     "integer":3,
                     "decimal":0
                  }
               }, {
                  "nombre":"Importe",
                  "longField":"18",
                  "start":"6",
                  "end":"24",
                  "format":"9",
                  "validation":{
                     "integer":16,
                     "decimal":2
                  }
               }, {
                  "nombre":"Tipo de cuenta",
                  "longField":"2",
                  "start":"24",
                  "end":"26",
                  "format":"9",
                  "validation":{
                     "integer":2,
                     "decimal":0
                  }
               }, {
                  "nombre":"Número de cuenta",
                  "longField":"20",
                  "start":"26",
                  "end":"46",
                  "format":"9",
                  "validation":{
                     "integer":20,
                     "decimal":0
                  }
               }, {
                  "nombre":"Referencia Alfanumérica",
                  "longField":"40",
                  "start":"46",
                  "end":"86",
                  "format":"x",
                  "validation":{
                     "integer":0,
                     "decimal":0
                  }
               }, {
                  "nombre":"Beneficiario",
                  "longField":"55",
                  "start":"86",
                  "end":"141",
                  "format":"x",
                  "validation":{
                     "integer":0,
                     "decimal":0
                  }
               }, {
                  "nombre":"Instrucciones",
                  "longField":"40",
                  "start":"141",
                  "end":"181",
                  "format":"x",
                  "validation":{
                     "integer":0,
                     "decimal":0
                  }
               }, {
                  "nombre":"Descripción TEF",
                  "longField":"24",
                  "start":"181",
                  "end":"205",
                  "format":"x",
                  "validation":{
                     "integer":0,
                     "decimal":0
                  }
               }, {
                  "nombre":"Clave de Banco",
                  "longField":"4",
                  "start":"205",
                  "end":"208",
                  "format":"9",
                  "validation":{
                     "integer":4,
                     "decimal":0
                  }
               }, {
                  "nombre":"Referencia Numérica",
                  "longField":"7",
                  "start":"209",
                  "end":"216",
                  "format":"9",
                  "validation":{
                     "integer":7,
                     "decimal":0
                  }
               }, {
                  "nombre":"Plazo",
                  "longField":"1",
                  "start":"216",
                  "end":"218",
                  "format":"9",
                  "validation":{
                     "integer":1,
                     "decimal":0
                  }
               }
             ]
          },
          "99":{
             "unique":"true",
             "size":"53",
             "fileFields":[
               {
                  "nombre":"Tipo de Registro",
                  "longField":"2",
                  "start":"0",
                  "end":"2",
                  "format":"9",
                  "validation":{
                     "integer":2,
                     "decimal":0
                  }
               }, {
                  "nombre":"Clave de la moneda",
                  "longField":"3",
                  "start":"2",
                  "end":"5",
                  "format":"9",
                  "validation":{
                     "integer":3,
                     "decimal":0
                  }
               }, {
                  "nombre":"Número de abonos",
                  "longField":"6",
                  "start":"5",
                  "end":"11",
                  "format":"9",
                  "validation":{
                     "integer":6,
                     "decimal":0
                  }
               }, {
                  "nombre":"Importe total de abonos",
                  "longField":"18",
                  "start":"11",
                  "end":"29",
                  "format":"9",
                  "validation":{
                     "integer":16,
                     "decimal":2
                  }
               }, {
                  "nombre":"Número de cargos",
                  "longField":"6",
                  "start":"29",
                  "end":"35",
                  "format":"9",
                  "validation":{
                     "integer":6,
                     "decimal":0
                  }
               }, {
                  "nombre":"Importe total de cargos",
                  "longField":"18",
                  "start":"35",
                  "end":"53",
                  "format":"9",
                  "validation":{
                     "integer":16,
                     "decimal":2
                  }
               }
             ]
          }
      }
   }
}
 ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

