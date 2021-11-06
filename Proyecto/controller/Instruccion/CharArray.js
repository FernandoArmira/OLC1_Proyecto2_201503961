const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operacion/Operacion");

function Chararrayfuncion(_instruccion, _ambito){
    //console.log(_instruccion)

    if(_instruccion.tipov === TIPO_DATO.CARACTER){
        //console.log("decimal")
            valor = Operacion(_instruccion.expresion,_ambito)
            //console.log(valor.valor[0])
            var nuevoarreglo = new Array();

            for(var i=0;i<valor.valor.length;i++){
                nuevoarreglo.push(valor.valor[i])
            }
            
            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
  
    return null
        
    }

    else {
        return "\n Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }

}

module.exports = Chararrayfuncion