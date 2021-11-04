const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const Asignacion = require("./Asignacion")
const Declaracion = require("./Declaracion")
const DecMetodo = require("./DecMetodo")
const DecFuncion = require("./DecFuncion")
const Exec = require("./Exec")

function Global(_instrucciones, _ambito){
    var cadena = ""
    //console.log(_instrucciones)
    //1ERA PASADA VAMOS VERIFICAR DE QUE SOLO VENGA 1 EXEC
    var contadorExec=0;
    for(let i=0; i<_instrucciones.length; i++){
        if(_instrucciones[i].tipo === TIPO_INSTRUCCION.EXEC){
            contadorExec++;
        }
    }
    if(contadorExec==0){
        return 'Error: No se ha detectado la sentencia EXEC'
    }
    else if(contadorExec>1){
        return 'Error: Se ha detectado más de un EXEC'
    }
    //2DA PASADA VAMOS A DECLARAR VARIABLES, METODOS Y ASIGNAR VALORES
    for(let i=0; i<_instrucciones.length; i++){
        if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DECLARACION){
            var mensaje = Declaracion(_instrucciones[i], _ambito)
            
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.ASIGNACION){
            var mensaje = Asignacion(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_METODO){
            var mensaje = DecMetodo(_instrucciones[i], _ambito)
            //console.log(_instrucciones[i])
            //console.log(_ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_FUNCION){
            var mensaje = DecFuncion(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
    }
    for(let i=0; i<_instrucciones.length; i++){
        if(_instrucciones[i].tipo === TIPO_INSTRUCCION.EXEC){
            var mensaje = Exec(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
            break
        }
    }
    //3ERA PASADA VAMOS A BUSCAR EL EXEC QUE VAMOS EJECUTAR
    //console.log(_ambito)
    return cadena
}

module.exports = Global