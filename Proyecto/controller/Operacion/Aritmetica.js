const TIPO_DATO = require("../Enums/TipoDato")
const TIPO_OPERACION = require("../Enums/TipoOperacion")
const TIPO_VALOR = require("../Enums/TipoValor")
const TipoResultado = require("./TipoResultado")
const ValorExpresion = require("./ValorExpresion")

function Aritmetica(_expresion, _ambito){
    //2+3+5+6+8+9
    if(_expresion.tipo === TIPO_VALOR.DECIMAL || _expresion.tipo === TIPO_VALOR.BANDERA ||
        _expresion.tipo === TIPO_VALOR.CADENA || _expresion.tipo === TIPO_VALOR.IDENTIFICADOR ||
        _expresion.tipo === TIPO_VALOR.CARACTER || _expresion.tipo === TIPO_VALOR.ENTERO){
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


module.exports = Aritmetica