const Ambito = require("../Ambito/Ambito")
const TIPO_DATO = require("../Enums/TipoDato")
const Operacion = require("../Operacion/Operacion")

function CicloDowhile(_instruccion, _ambito){
    var mensaje = ""
    var operacion = Operacion(_instruccion.expresion, _ambito)
    if(operacion.tipo === TIPO_DATO.BANDERA){

        var nuevoAmbito = new Ambito(_ambito)
        const Bloque = require('./Bloque')
        var ejec =Bloque(_instruccion.instrucciones, nuevoAmbito)
        //mensaje+=Bloque(_instruccion.instrucciones, nuevoAmbito)
        mensaje+=ejec.cadena
        if(ejec.hayBreak){
            return mensaje
        }
        //actualizamos
        operacion = Operacion(_instruccion.expresion, _ambito)

        while(operacion.valor){
            ejec =Bloque(_instruccion.instrucciones, nuevoAmbito)
            //mensaje+=Bloque(_instruccion.instrucciones, nuevoAmbito)
            mensaje+=ejec.cadena
            if(ejec.hayBreak){
                return mensaje
            }
            //actualizamos
            operacion = Operacion(_instruccion.expresion, _ambito)
            
        }
        return mensaje
    }
    return `\n Error: No es una expresion de tipo BANDERA en la condicion... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
}

module.exports = CicloDowhile