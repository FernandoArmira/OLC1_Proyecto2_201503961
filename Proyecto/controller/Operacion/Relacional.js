const TIPO_DATO = require("../Enums/TipoDato");
const TIPO_OPERACION = require("../Enums/TipoOperacion");
const TIPO_VALOR = require("../Enums/TipoValor");
const Aritmetica = require("./Aritmetica");
const ValorExpresion = require("./ValorExpresion");

function Relacional(_expresion, _ambito){
    if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BANDERA ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR ||
        _expresion.tipo === TIPO_VALOR.CARACTER || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.VECTOR){
        return ValorExpresion(_expresion, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.SUMA || _expresion.tipo === TIPO_OPERACION.RESTA
        || _expresion.tipo === TIPO_OPERACION.MULTIPLICACION || _expresion.tipo === TIPO_OPERACION.DIVISION
        || _expresion.tipo === TIPO_OPERACION.POTENCIA || _expresion.tipo === TIPO_OPERACION.MODULO
        || _expresion.tipo === TIPO_OPERACION.NEGACION || _expresion.tipo === TIPO_OPERACION.INC
        || _expresion.tipo === TIPO_OPERACION.DEC || _expresion.tipo === TIPO_OPERACION.TOUPPER
        || _expresion.tipo === TIPO_OPERACION.TOLOWER|| _expresion.tipo === TIPO_OPERACION.LENGTH
        || _expresion.tipo === TIPO_OPERACION.TRUNCATE|| _expresion.tipo === TIPO_OPERACION.ROUND
        || _expresion.tipo === TIPO_OPERACION.TYPEOF|| _expresion.tipo === TIPO_OPERACION.TOSTRING ){
        return Aritmetica(_expresion, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.IGUALIGUAL){
        return igualigual(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.DIFERENTE){
        return diferente(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MENOR){
        return menor(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MAYOR){
        return mayor(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MENORIGUAL){
        return menorigual(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MAYORIGUAL){
        return mayorigual(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    //a+5<6*8
}

function igualigual(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 == val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 == val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }else if (opIzq.tipo == 'CADENA' &&  opDer.tipo == 'CADENA'){
        var resultado = false
        
        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 == val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }


    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function diferente(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 != val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 != val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }else if (opIzq.tipo == 'CADENA' &&  opDer.tipo == 'CADENA'){
        var resultado = false
        
        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 != val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }


    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}


function menor(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 < val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 < val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }

    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function mayor(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 > val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 > val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }

    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function menorigual(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 <= val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 <= val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }

    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function mayorigual(_opIzq, _opDer, _ambito){
    const opIzq = Relacional(_opIzq, _ambito)
    const opDer = Relacional(_opDer, _ambito)
    //console.log(opIzq.tipo)
    //console.log(opDer.tipo)
    if(opIzq.tipo != 'BANDERA' &&  opIzq.tipo != 'CADENA' && opDer.tipo!= 'BANDERA' &&  opDer.tipo != 'CADENA'){ //1==1 true==false ...
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        split1 = String(_opIzq.valor).split("\'")

        if(split1.length > 1){
            val1 = split1[1].charCodeAt(0)
        }

        split1 = String(_opDer.valor).split("\'")

        if(split1.length > 1){
            val2 = split1[1].charCodeAt(0)
        }

        if(val1 >= val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }
    }else if (opIzq.tipo == 'BANDERA' &&  opDer.tipo == 'BANDERA'){
        var resultado = false

        val1 = opIzq.valor
        val2 = opDer.valor

        if(val1 >= val2){
            resultado = true
        }
        return {
            valor: resultado,
            tipo: TIPO_DATO.BANDERA,
            linea: _opIzq.linea,
            columna: _opIzq.columna
        }

    }

    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+ `\nError semántico: no se puede comparar el valor de tipo ${opIzq.tipo} \ncon el valor de tipo ${opDer.tipo}... Linea: +${_opIzq.linea}+" Columna: "+${_opIzq.columna}`,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}


module.exports = Relacional