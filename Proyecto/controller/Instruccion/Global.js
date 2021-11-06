const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion")
const Asignacion = require("./Asignacion")
const Declaracion = require("./Declaracion")
const DecMetodo = require("./DecMetodo")
const DecFuncion = require("./DecFuncion")
const DecVector = require("./DecVector")
const AsVector = require("./AsVector")
const DecLista = require("./DecLista")
const Exec = require("./Exec")
const { AS_VECTOR } = require("../Enums/TipoInstruccion")

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
            Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Declaracion variable ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++

            var mensaje = Declaracion(_instrucciones[i], _ambito)
            
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.ASIGNACION){
            Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Asignacion variable ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++

            var mensaje = Asignacion(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_METODO){
            Temporal =  new Array();
            Temporal.push("Nodo"+contador) 
            Temporal.push('Declaracion metodo ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++

            var mensaje = DecMetodo(_instrucciones[i], _ambito)
            //console.log(_instrucciones[i])
            //console.log(_ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_FUNCION){
            Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Declaracion funcion ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++

            var mensaje = DecFuncion(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }

        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_VECTOR){
            /*Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Declaracion funcion ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++*/

            var mensaje = DecVector(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }

        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.AS_VECTOR){
            /*Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Asignacion variable ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++*/

            var mensaje = AsVector(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }

        else if(_instrucciones[i].tipo === TIPO_INSTRUCCION.DEC_LISTA){
            /*Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Declaracion funcion ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            contador++*/

            var mensaje = DecLista(_instrucciones[i], _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }

    }
    for(let i=0; i<_instrucciones.length; i++){
        if(_instrucciones[i].tipo === TIPO_INSTRUCCION.EXEC){
            Temporal =  new Array();
            Temporal.push("Nodo" + contador) 
            Temporal.push('Exec ' + _instrucciones[i].nombre)
            Temporal.push(padre)
            ASTdiagrama.push(Temporal)
            padre = "Nodo" + contador
            contador++

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