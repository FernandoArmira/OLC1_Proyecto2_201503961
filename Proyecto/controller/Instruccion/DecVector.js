const Simbolo = require("../Ambito/Simbolo");
const TIPO_DATO = require("../Enums/TipoDato");
const Operacion = require("../Operacion/Operacion");

function Declaracionvector(_instruccion, _ambito){
    //console.log(_instruccion)
    
    //console.log(_instruccion.id)
    if(_instruccion.tipov === TIPO_DATO.DECIMAL){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
                var nuevoarreglo = new Array();

                while(valor > 0){
                    nuevoarreglo.push("0")
                    valor--
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
            }
            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        else {
            return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
        }
        
    }

        else {

            if(_instruccion.valor != null){
                var nuevoarreglo = new Array();

                for(var i =0; i < _instruccion.valor.length; i++){

                    op = Operacion(_instruccion.valor[i], _ambito)
                    tipo = op.tipo;
                    //console.log(op)
                    //console.log(tipo)
                    if(tipo === TIPO_DATO.DECIMAL){
                        valor = op.valor;
                        nuevoarreglo.push(valor.toString())
                    
                    }else {
                        return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
                    }
                }
                
    
                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.DECIMAL, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
                
            }

            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.ENTERO){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
                var nuevoarreglo = new Array();

                while(valor > 0){
                    nuevoarreglo.push("0")
                    valor--
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
            }
            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        else {
            return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
        }
        
    }

        else {

            if(_instruccion.valor != null){
                var nuevoarreglo = new Array();

                for(var i =0; i < _instruccion.valor.length; i++){

                    op = Operacion(_instruccion.valor[i], _ambito)
                    tipo = op.tipo;
                    //console.log(op)
                    //console.log(tipo)
                    if(tipo === TIPO_DATO.ENTERO){
                        valor = op.valor;
                        nuevoarreglo.push(valor.toString())
                    
                    }else {
                        return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
                    }
                }
                
    
                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.ENTERO, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
                
            }

            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.CADENA){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
                var nuevoarreglo = new Array();

                while(valor > 0){
                    nuevoarreglo.push("0")
                    valor--
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
            }
            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        else {
            return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
        }
        
    }

        else {

            if(_instruccion.valor != null){
                var nuevoarreglo = new Array();

                for(var i =0; i < _instruccion.valor.length; i++){

                    op = Operacion(_instruccion.valor[i], _ambito)
                    tipo = op.tipo;
                    //console.log(op)
                    //console.log(tipo)
                    if(tipo === TIPO_DATO.CADENA){
                        valor = op.valor;
                        nuevoarreglo.push(valor.toString())
                    
                    }else {
                        return "Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
                    }
                }
                
    
                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CADENA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
                
            }

            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.BANDERA){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
                var nuevoarreglo = new Array();

                while(valor > 0){
                    nuevoarreglo.push("0")
                    valor--
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
            }
            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        else {
            return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
        }
        
    }

        else {

            if(_instruccion.valor != null){
                var nuevoarreglo = new Array();

                for(var i =0; i < _instruccion.valor.length; i++){

                    op = Operacion(_instruccion.valor[i], _ambito)
                    tipo = op.tipo;
                    //console.log(op)
                    //console.log(tipo)
                    if(tipo === TIPO_DATO.BANDERA){
                        valor = op.valor;
                        nuevoarreglo.push(valor.toString())
                    
                    }else {
                        return "Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
                    }
                }
                
    
                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.BANDERA, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
                
            }

            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        return null
        
    }

    else if(_instruccion.tipov === TIPO_DATO.CARACTER){
        //console.log("decimal")
        if(_instruccion.tipov2 !=null && _instruccion.tipov2 == _instruccion.tipov){

        if(_instruccion.valor != null){
            op = Operacion(_instruccion.valor, _ambito)
            tipo = op.tipo;
            //console.log(op)
            //console.log(tipo)
            if(tipo === TIPO_DATO.ENTERO){
                valor = op.valor;
                var nuevoarreglo = new Array();

                while(valor > 0){
                    nuevoarreglo.push("0")
                    valor--
                }

                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
            }
            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        else {
            return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
        }
        
    }

        else {

            if(_instruccion.valor != null){
                var nuevoarreglo = new Array();

                for(var i =0; i < _instruccion.valor.length; i++){

                    op = Operacion(_instruccion.valor[i], _ambito)
                    tipo = op.tipo;
                    //console.log(op)
                    //console.log(tipo)
                    if(tipo === TIPO_DATO.CARACTER){
                        valor = op.valor;
                        nuevoarreglo.push(valor.toString())
                    
                    }else {
                        return "Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
                    }
                }
                
    
                const nuevoSimbolo = new Simbolo(_instruccion.id, nuevoarreglo, TIPO_DATO.CARACTER, _instruccion.linea, _instruccion.columna)
                if(_ambito.existeSimboloAmbitoActual(nuevoSimbolo.id)!=false){
                    return "\n Error: La variable '"+ nuevoSimbolo.id +"' ya existe... Linea: "+nuevoSimbolo.linea+" Columna: "+ nuevoSimbolo.columna;
                }
                _ambito.addSimbolo(nuevoSimbolo.id, nuevoSimbolo)
                //console.log(nuevoSimbolo)
                
            }

            else {
                return "\n Error: No es posible declarar el vector ... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
            }
        }
        return null
        
    }

}

module.exports = Declaracionvector