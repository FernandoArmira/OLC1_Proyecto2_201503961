const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operacion/Operacion");

function Declaracionlista(_instruccion, _ambito){
    //console.log(_instruccion)
    //console.log(_instruccion.id)
    if(_instruccion.tipov === TIPO_DATO.DECIMAL){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

            var nuevoarreglo = new Array();

            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
    }

    else {
        return "Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    
    return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.ENTERO){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

            var nuevoarreglo = new Array();

            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
    }

    else {
        return "Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    
    return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.CADENA){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

            var nuevoarreglo = new Array();

            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
    }

    else {
        return "Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    
    return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.BANDERA){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

            var nuevoarreglo = new Array();

            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
    }

    else {
        return "Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    
    return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.CARACTER){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

            var nuevoarreglo = new Array();

            const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)        
    }

    else {
        return "Error: No es posible declarar la lista ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    
    return null
        
    }

}

module.exports = Declaracionlista