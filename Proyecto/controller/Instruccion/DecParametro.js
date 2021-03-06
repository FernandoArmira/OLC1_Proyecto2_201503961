const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operacion/Operacion");

function DecParametro(_instruccion, _ambito){

    //console.log(_instruccion)
    
    Variables =  new Array();
    Variables.push(_instruccion.id)
    Variables.push("Variable")
    Variables.push(_instruccion.tipo_dato)
    //Metodos.push(_ambito.anterior)
    Variables.push(_instruccion.linea)
    Variables.push(_instruccion.columna)
    TablaSimbolos.push(Variables)

    if(_instruccion.tipo_dato === TIPO_DATO.DECIMAL){
        var valor = 0.0
        if(_instruccion.valor != null){
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if(tipo === TIPO_DATO.DECIMAL){
                valor = op.valor;
            }
            else {
                "Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.DECIMAL+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return null
    }
    else if(_instruccion.tipo_dato === TIPO_DATO.ENTERO){
        var valor = 0
        if(_instruccion.valor != null){
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
            }else if(tipo === TIPO_DATO.BANDERA){
                valor = op.valor;
                if(valor == true){
                    valor = 1
                }
                if(valor == false){
                    valor = 0
                }
                
            }
            else {
                "Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.ENTERO+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(nuevoSimbolo)
        //console.log(_ambito)
        return null
    }
    else if(_instruccion.tipo_dato === TIPO_DATO.CADENA){
        var valor = "" // en caso sea sin asignaci??n inicializamos la variable
        //si es una declaracion con asignacion
        if(_instruccion.valor!=null){
            op = Operacion(_instruccion.valor, _ambito)
            valor = String(op.valor) //casteamos a cadena
        }
        //verificamos si ya existe
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return null
        //console.log(_ambito)
    }
    else if(_instruccion.tipo_dato === TIPO_DATO.BANDERA){
        var valor = true // en caso sea sin asignaci??n inicializamos la variable
        //si es una declaracion con asignacion
        if(_instruccion.valor!=null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo
            //verificamos que el valor a asignar sea del mismo tipo
            if(tipo===TIPO_DATO.BANDERA){
                valor = Boolean(op.valor)
            }
            else{
                return "Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.BANDERA+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        //verificamos si ya existe
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        return null
        //console.log(_ambito)
    }

    else if(_instruccion.tipo_dato === TIPO_DATO.CARACTER){
        var valor = "\\u0000"
        if(_instruccion.valor != null){
            var op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            if(tipo === TIPO_DATO.CARACTER){
                valor = op.valor;
            }
            else {
                "Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.CARACTER+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        return null
    }

    else if(_instruccion.tipo_dato === TIPO_DATO.LISTA){
        //var valor = 0.0
        if(_instruccion.valor != null){
            var op = Operacion(_instruccion.valor, _ambito)
            
            tipo = op.tipo;
            //console.log(op.valor)
            //console.log(tipo)

            if(Array.isArray(op.valor)){
                valor = op.valor;
            }
    
            else {
                "Error: No es posible asignar el valor a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.LISTA+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, tipo, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(nuevoSimbolo)
        return null
    }

    else if(_instruccion.tipo_dato === TIPO_DATO.VECTOR){
        //var valor = 0.0
        if(_instruccion.valor != null){
            var op = Operacion(_instruccion.valor, _ambito)
            
            tipo = op.tipo;
            //console.log(op.valor)

            if(Array.isArray(op.valor)){
                valor = op.valor;
            }
    
            else {
                "Error: No es posible asignar el valor a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.VECTOR+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, tipo, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(nuevoSimbolo)
        return null
    }

}

module.exports = DecParametro