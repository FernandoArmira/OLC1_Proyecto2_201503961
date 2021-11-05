const TIPO_DATO = require("../Enums/TipoDato")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")
const TipoResultado = require("./TipoResultado")
const ValorExpresion = require("./ValorExpresion")

function Aritmetica(_expresion, _ambito){
    //2+3+5+6+8+9
    if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BANDERA ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR ||
        _expresion.tipo === TIPO_VALOR.CARACTER || _expresion.tipo === TIPO_VALOR.ENTERO ||
        _expresion.tipo === TIPO_VALOR.VECTOR){
        return ValorExpresion(_expresion, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.SUMA){// 2+6+7+2+9+10
        return suma(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.RESTA){// 2+6+7+2+9+10
        return resta(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MULTIPLICACION){
        return multiplicacion(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.DIVISION){
        return division(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.POTENCIA){
        return potencia(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.MODULO){
        return modulo(_expresion.opIzq, _expresion.opDer, _ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.NEGACION){
        return negacion(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.INC){
        return incremento(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.DEC){
        return decremento(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TOUPPER){
        return toupper(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TOLOWER){
        return tolower(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.LENGTH){
        return length(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TRUNCATE){
        return truncate(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.ROUND){
        return round(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TYPEOF){
        return typeoffuncion(_expresion.opIzq, _expresion.opDer,_ambito)
    }
    else if(_expresion.tipo === TIPO_OPERACION.TOSTRING){
        return tostringfuncion(_expresion.opIzq, _expresion.opDer,_ambito)
    }
}

function suma(_opIzq, _opDer, _ambito){ 
    //console.log(_opIzq.valor)
    //console.log(_opDer.valor)
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) + Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) + Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.CADENA){
            const resultado = opIzq.valor.toString() + opDer.valor.toString();
            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion suma... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function resta(_opIzq, _opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) - Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) - Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion resta... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function multiplicacion(_opIzq, _opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    //console.log(_opIzq.valor)
    //console.log(_opDer.valor)
    if(tipoRes!=null && _opIzq.valor!="true" && _opIzq.valor!="false" && _opDer.valor != "true" && _opDer.valor != "false"){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) * Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) * Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion multiplicacion... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function division(_opIzq, _opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    //console.log(_opIzq.valor)
    //console.log(_opDer.valor)
    if(tipoRes!=null && _opIzq.valor!="true" && _opIzq.valor!="false" && _opDer.valor != "true" && _opDer.valor != "false" &&  _opDer.valor !=0){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) / Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            split1 = String(_opIzq.valor).split("\'")

            if(split1.length > 1){
                num1 = split1[1].charCodeAt(0)
            }

            split1 = String(_opDer.valor).split("\'")

            if(split1.length > 1){
                num2 = split1[1].charCodeAt(0)
            }

            const resultado = Number(num1) / Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion division... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function potencia(_opIzq, _opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    //console.log(_opIzq.valor)
    //console.log(_opDer.valor)
    num1 = opIzq.valor
    num2 = opDer.valor

    split1 = String(_opIzq.valor).split("\'")

    split2 = String(_opDer.valor).split("\'")


    if(tipoRes!=null && _opIzq.valor!="true" && _opIzq.valor!="false" && _opDer.valor != "true" && _opDer.valor != "false" && split1.length <= 1 && split2.length <=1 ){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            const resultado = Math.pow(Number(num1), Number(num2));

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            const resultado = Math.pow(Number(num1), Number(num2));

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion potencia... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function modulo(_opIzq, _opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)
    //console.log(_opIzq.valor)
    //console.log(_opDer.valor)
    num1 = opIzq.valor
    num2 = opDer.valor

    split1 = String(_opIzq.valor).split("\'")

    split2 = String(_opDer.valor).split("\'")


    if(tipoRes!=null && _opIzq.valor!="true" && _opIzq.valor!="false" && _opDer.valor != "true" && _opDer.valor != "false" && split1.length <= 1 && split2.length <=1 ){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor
            num2 = opDer.valor

            const resultado = Number(num1) % Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor
            num2 = opDer.valor

            const resultado = Number(num1) % Number(num2);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")+(opDer.tipo===null ? opDer.valor: "") //true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion potencia... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function negacion(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor

            const resultado = Number(num1) * (-1);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor

            const resultado = Number(num1) * (-1);

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion negacion... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function incremento(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    if(_opIzq.tipo == 'VAL_IDENTIFICADOR'){
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor

            const resultado = Number(num1)  + 1;

            const existe = _ambito.existeSimboloAmbitoActual(_opIzq.valor)

            if(existe){
            //var valor = Operacion(_instruccion.expresion, _ambito)
            var simbolo = _ambito.getSimbolo(_opIzq.valor)

            simbolo.valor = resultado
            _ambito.actualizar(_opIzq.valor,simbolo)

            }
            
            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor

            const resultado = Number(num1)  + 1;

            const existe = _ambito.existeSimboloAmbitoActual(_opIzq.valor)

            if(existe){
            //var valor = Operacion(_instruccion.expresion, _ambito)
            var simbolo = _ambito.getSimbolo(_opIzq.valor)

            simbolo.valor = resultado
            _ambito.actualizar(_opIzq.valor,simbolo)

            }

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion de incremento... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function decremento(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    if(_opIzq.tipo == 'VAL_IDENTIFICADOR'){
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor

            const resultado = Number(num1)  - 1;

            const existe = _ambito.existeSimboloAmbitoActual(_opIzq.valor)

            if(existe){
            //var valor = Operacion(_instruccion.expresion, _ambito)
            var simbolo = _ambito.getSimbolo(_opIzq.valor)

            simbolo.valor = resultado
            _ambito.actualizar(_opIzq.valor,simbolo)

            }
            
            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }

        else if(tipoRes === TIPO_DATO.ENTERO){

            num1 = opIzq.valor

            const resultado = Number(num1)  - 1;

            const existe = _ambito.existeSimboloAmbitoActual(_opIzq.valor)

            if(existe){
            //var valor = Operacion(_instruccion.expresion, _ambito)
            var simbolo = _ambito.getSimbolo(_opIzq.valor)

            simbolo.valor = resultado
            _ambito.actualizar(_opIzq.valor,simbolo)

            }

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la operacion de incremento... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function toupper(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.CADENA){

            str1 = opIzq.valor

            const resultado = str1.toUpperCase();

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion toupper... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function tolower(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.CADENA){

            str1 = opIzq.valor

            const resultado = str1.toLowerCase();

            return{
                valor: resultado,
                tipo: tipoRes,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion toupper... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function length(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.CADENA){

            str1 = opIzq.valor

            const resultado = str1.length;

            return{
                valor: resultado,
                tipo: TIPO_DATO.ENTERO,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion length... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function truncate(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.ENTERO || tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor

            const resultado = Math.trunc(Number(num1));

            return{
                valor: resultado,
                tipo: TIPO_DATO.ENTERO,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion truncate... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function round(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
        if(tipoRes === TIPO_DATO.ENTERO || tipoRes === TIPO_DATO.DECIMAL){

            num1 = opIzq.valor

            const resultado = Math.round(Number(num1));

            return{
                valor: resultado,
                tipo: TIPO_DATO.ENTERO,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        }
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion round... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function typeoffuncion(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){

            if(tipoRes == 'ENTERO'){
                var resultado = "int";
            }else if(tipoRes == 'DECIMAL'){
                var resultado = "double";
            }else if(tipoRes == 'BANDERA'){
                var resultado = "boolean";
            }else if(tipoRes == 'CADENA'){
                var resultado = "string";
            }else if(tipoRes == 'CARACTER'){
                var resultado = "char";
            }
            

            return{
                valor: resultado,
                tipo: TIPO_DATO.CADENA,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }

    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion typeof... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}

function tostringfuncion(_opIzq,_opDer, _ambito){
    const opIzq = Aritmetica(_opIzq,_ambito)
    const opDer = Aritmetica(_opDer,_ambito)
    const tipoRes = TipoResultado(opIzq.tipo, opDer.tipo)

    //console.log(_opIzq)
    //console.log(_opDer)
    
    if(tipoRes!=null){
     

            valor = opIzq.valor

            const resultado = valor.toString();

            return{
                valor: resultado,
                tipo: TIPO_DATO.CADENA,
                linea: _opIzq.linea,
                columna: _opIzq.columna
            }
        
    }
    var respuesta = (opIzq.tipo===null ? opIzq.valor: "")//true+5+10+5
    return{
        valor: respuesta+'\nError semántico: no se puede realizar la funcion round... Linea: '+_opIzq.linea+" Columna: "+_opIzq.columna,
        tipo: null,
        linea: _opIzq.linea,
        columna: _opIzq.columna
    }
}


module.exports = Aritmetica