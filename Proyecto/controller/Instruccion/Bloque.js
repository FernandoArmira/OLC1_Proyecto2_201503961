const TIPO_INSTRUCCION = require("../Enums/TipoInstruccion");
const Asignacion = require("./Asignacion");
const Cout = require("./Cout");
const Declaracion = require("./Declaracion");
const SentenciaIf = require("./If");
const SentenciaIfElse = require("./IfElse");
const SentenciaIfElseIf = require("./IfElseIf");
const Switch = require("./Switch");
const CicloWhile = require("./While");
const CicloFor = require("./For");
const CicloDowhile = require("./Dowhile");
const Incremento = require("./Incremento")
const Decremento = require("./Decremento")

function Bloque(_instrucciones, _ambito){
    var cadena = ""
    var hayBreak = false;
    _instrucciones.forEach(instruccion => {
        if(hayBreak){
            return{
                hayBreak: hayBreak,
                cadena: cadena
            }
        }
        if(instruccion.tipo === TIPO_INSTRUCCION.COUT){
            cadena+=Cout(instruccion, _ambito)+'\n'
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION){
            var mensaje = Declaracion(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION){
            var mensaje = Asignacion(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.WHILE){
            var mensaje = CicloWhile(instruccion, _ambito)
            hayBreak = false
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.FOR){
            var mensaje = CicloFor(instruccion, _ambito)
            hayBreak = false
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DOWHILE){
            var mensaje = CicloDowhile(instruccion, _ambito)
            hayBreak = false
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.LLAMADA_METODO){
            const Exec = require("./Exec");
            var mensaje = Exec(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IF){
            var ejec = SentenciaIf(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IFCE){
            var ejec = SentenciaIfElse(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IFCEIF){
            var ejec = SentenciaIfElseIf(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.SWITCH){
            var ejec = Switch(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = false
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.BREAK){
            hayBreak = true
            return {
                hayBreak: hayBreak,
                cadena: cadena
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.INCREMENTO){
            var mensaje = Incremento(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }

        else if(instruccion.tipo === TIPO_INSTRUCCION.DECREMENTO){
            var mensaje = Decremento(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje+'\n'
            }
        }
    });
    return{
        hayBreak: hayBreak,
        cadena: cadena
    }
    //return cadena
}

module.exports = Bloque