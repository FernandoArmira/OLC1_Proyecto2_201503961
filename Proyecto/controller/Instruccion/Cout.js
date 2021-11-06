const procesarCadena = require("../Operacion/procesarCadena")

function Cout(_instruccion, _ambito){
    //console.log(_instruccion)
    const cadena = procesarCadena(_instruccion.expresion, _ambito).valor
    //console.log(cadena)
    var imprimir = cadena

    temp = ""
    split1 = String(imprimir).split("\\n");
    //console.log(split1.length)
    if(split1.length > 1){
        for(var i=0;i<split1.length-1;i++){
            temp=temp+split1[i]+"\n"
        }
        temp = temp + split1[split1.length-1]
        imprimir = temp
    }

    //console.log(imprimir)

    temp = ""
    split2 = String(imprimir).split("\\\\");
    if(split2.length > 1){
        for(var i=0;i<split2.length-1;i++){
            temp=temp+split2[i]+"\\"
        }
        temp = temp + split2[split2.length-1]
        imprimir = temp
    }

    temp = ""
    split3 = String(imprimir).split("\\\"");
    if(split3.length > 1){
        for(var i=0;i<split3.length-1;i++){
            temp=temp+split3[i]+"\""
        }
        temp = temp + split3[split3.length-1]
        imprimir = temp
    }

    temp = ""
    split4 = String(imprimir).split("\\t");
    if(split4.length > 1){
        for(var i=0;i<split4.length-1;i++){
            temp=temp+split4[i]+"\t"
        }
        temp = temp + split4[split4.length-1]
        imprimir = temp
    }

    temp = ""
    split5 = String(imprimir).split("\\'");
    if(split5.length > 1){
        for(var i=0;i<split5.length-1;i++){
            temp=temp+split5[i]+"\'"
        }
        temp = temp + split5[split5.length-1]
        imprimir = temp
    }

    temp = ""
    split6 = String(imprimir).split("\\r");
    if(split6.length > 1){
        for(var i=0;i<split6.length-1;i++){
            temp=temp+split6[i]+"\r"
        }
        temp = temp + split6[split6.length-1]
        imprimir = temp
    }

    //console.log(imprimir)
    return imprimir
}

module.exports = Cout