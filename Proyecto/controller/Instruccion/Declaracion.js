const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operacion/Operacion");

function Declaracion(_instruccion, _ambito){
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
        //console.log("decimal")
        var valor = 0.0
        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.DECIMAL){
                valor = op.valor;
            }

            else if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor + 0.0;
            }
            else {
                return "\n Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.DECIMAL+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }

        idval = _instruccion.id;
        split2 = String(idval).split(",")

        if(split2.length>1){
            for(var i=0;i<split2.length;i++){

                const nuevoSimbolo = new Simbolo(split2[i], valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                    //Mandar mensaje a consola ......PENDIENTE
                }
                else{
                    _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                }
            }

        }
        else {

        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        }
        return null
        
    }

    else if(_instruccion.tipo_dato === TIPO_DATO.ENTERO){
        var valor = 0
        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //val = op.valor;
            //split1 = String(val).split(".")

            //console.log(op)
            //console.log(split1.length)
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
                return "\n Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.ENTERO+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }

        idval = _instruccion.id;
        split2 = String(idval).split(",")

        if(split2.length>1){
            for(var i=0;i<split2.length;i++){

                const nuevoSimbolo = new Simbolo(split2[i], valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                else{
                    _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                }

            }

        }
        else {

        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)

        }
        //console.log(_ambito)
        return null
    }

    else if(_instruccion.tipo_dato === TIPO_DATO.CADENA){
        var valor = "" // en caso sea sin asignación inicializamos la variable
        //si es una declaracion con asignacion
        if(_instruccion.valor!=null){
            op = Operacion(_instruccion.valor, _ambito)
            valor = String(op.valor) //casteamos a cadena
        }

        idval = _instruccion.id;
        split2 = String(idval).split(",")

        if(split2.length>1){
            for(var i=0;i<split2.length;i++){

                //verificamos si ya existe
                const nuevoSimbolo = new Simbolo(split2[i], valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                else{
                    _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                }

            }

        }
        else {
        //verificamos si ya existe
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        }
        return null
        //console.log(_ambito)
    }
    else if(_instruccion.tipo_dato === TIPO_DATO.BANDERA){
        var valor = true // en caso sea sin asignación inicializamos la variable
        //si es una declaracion con asignacion
        if(_instruccion.valor!=null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo
            //verificamos que el valor a asignar sea del mismo tipo
            //console.log(op)
            if(tipo===TIPO_DATO.BANDERA){
                valor = Boolean(op.valor)
            }
            else{
                return "\n Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.BANDERA+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }

        idval = _instruccion.id;
        split2 = String(idval).split(",")

        if(split2.length>1){
            for(var i=0;i<split2.length;i++){

                //verificamos si ya existe
                const nuevoSimbolo = new Simbolo(split2[i], valor, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                else{
                    _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                }

            }

        }
        else {
        //verificamos si ya existe
        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        }
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
                return "\n Error: No es posible asignar un valor de tipo "+tipo+" a la variable \n'"+ _instruccion.id +"' que es de tipo "+TIPO_DATO.CARACTER+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }

        idval = _instruccion.id;
        split2 = String(idval).split(",")

        if(split2.length>1){
            for(var i=0;i<split2.length;i++){

                //verificamos si ya existe
                const nuevoSimbolo = new Simbolo(split2[i], valor, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                else{
                    _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                }

            }

        }
        else {

        const nuevoSimbolo = new Simbolo(_instruccion.id, valor, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
        if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
            return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
        }
        _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
        //console.log(_ambito)
        }
        return null
    }

    

}

module.exports = Declaracion