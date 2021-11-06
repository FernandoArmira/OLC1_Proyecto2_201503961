const Ambito = require("../Ambito/Ambito")
const TIPO_DATO = require("../Enums/TipoDato")
const Operacion = require("../Operacion/Operacion")

function CicloWhile(_instruccion, _ambito){

    temp = padre

    Temporal =  new Array();
    Temporal.push("Nodo" + contador) 
    Temporal.push('While')
    Temporal.push(padre)
    ASTdiagrama.push(Temporal)
    contador++

    Temporal =  new Array();
    Temporal.push("Nodo" + contador) 
    Temporal.push('Condicion')
    Temporal.push("Nodo" + (contador -1))
    ASTdiagrama.push(Temporal)
    contador++

    Temporal =  new Array();
    Temporal.push("Nodo" + contador) 
    Temporal.push('Instrucciones')
    Temporal.push("Nodo" + (contador -2))
    ASTdiagrama.push(Temporal)
    padre = "Nodo" + contador
    contador++

    var mensaje = ""
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if(operacion.tipo === TIPO_DATO.BANDERA){
        while(operacion.valor){
            var nuevoAmbito = new Ambito(_ambito)
            const Bloque = require('./Bloque')
            var ejec =Bloque(_instruccion.instrucciones, nuevoAmbito)
            //mensaje+=Bloque(_instruccion.instrucciones, nuevoAmbito)
            mensaje+=ejec.cadena
            if(ejec.hayBreak){

                padre = temp

                return mensaje
            }

            if(ejec.hayContinue){
                operacion = Operacion(_instruccion.expresion, _ambito)
            }
            //actualizamos
            operacion = Operacion(_instruccion.expresion, _ambito)
        }

        padre = temp

        return mensaje
    }

    padre = temp

    return `\n Error: No es una expresion de tipo BANDERA en la condicion... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
}

module.exports = CicloWhile