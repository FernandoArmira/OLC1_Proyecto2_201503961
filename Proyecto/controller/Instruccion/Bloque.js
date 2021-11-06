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
const Declaracionvector = require("./DecVector")
const Asignacionvector = require("./AsVector")
const Declaracionlista = require("./DecLista")
const Asignacionlista = require("./AsLista")
const Actualizarlista = require("./UpdLista")
const Chararrayfuncion = require("./CharArray")

function Bloque(_instrucciones, _ambito){
    //console.log(_instrucciones)
    var cadena = ""
    var hayBreak = false;
    var hayContinue = false;
    //var hayReturn = false;
    _instrucciones.forEach(instruccion => {
        if(hayBreak){
            return{
                hayBreak: hayBreak,
                cadena: cadena
            }
        }
        if(hayContinue){
            return{
                hayContinue: hayContinue,
                cadena: cadena
            }
        }
        /*if(hayReturn){
            return{
                hayReturn: hayReturn,
                cadena: cadena
            }
        }*/
        if(instruccion.tipo === TIPO_INSTRUCCION.COUT){
            //console.log(instruccion)
            //ASTdiagrama.push('Writeline')
            cadena+=Cout(instruccion, _ambito)+'\n'
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DECLARACION){
            //ASTdiagrama.push('Declaracion')
            var mensaje = Declaracion(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.ASIGNACION){
            //ASTdiagrama.push('Asignacion')
            var mensaje = Asignacion(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DEC_VECTOR){
            //ASTdiagrama.push('Declaracion vector')
            var mensaje = Declaracionvector(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.AS_VECTOR){
            //ASTdiagrama.push('Asignacion vector')
            var mensaje = Asignacionvector(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.ADD_LISTA){
            //ASTdiagrama.push('Append lista')
            var mensaje = Asignacionlista(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.SET_LISTA){
            //ASTdiagrama.push('Set lista \n')
            var mensaje = Actualizarlista(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DEC_LISTA){
            //ASTdiagrama.push('Declaracion lista')
            var mensaje = Declaracionlista(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.CHARARRAY){
            //ASTdiagrama.push('Chararray')
            var mensaje = Chararrayfuncion(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.WHILE){
            //ASTdiagrama.push('While')
            var mensaje = CicloWhile(instruccion, _ambito)
            hayBreak = false
            hayContinue = false
            //hayReturn = ejec.hayReturn
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.FOR){
            //ASTdiagrama.push('For')
            var mensaje = CicloFor(instruccion, _ambito)
            hayBreak = false
            hayContinue = false
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.DOWHILE){
            //ASTdiagrama.push('Dowhile')
            var mensaje = CicloDowhile(instruccion, _ambito)
            hayBreak = false
            hayContinue = false
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.LLAMADA_METODO){
            //ASTdiagrama.push('Llamada metodo')
            //console.log("Llamada metodo")
            const Exec = require("./Exec");
            var mensaje = Exec(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.LLAMADA_FUNCION){
            //ASTdiagrama.push('Llamada funcion')
            //console.log("Llamada metodo")
            const Exec = require("./Exec");
            var mensaje = Exec(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IF){
            //ASTdiagrama.push('If')
            var ejec = SentenciaIf(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            hayContinue = ejec.hayContinue
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IFCE){
            //ASTdiagrama.push('If else')
            var ejec = SentenciaIfElse(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            hayContinue = ejec.hayContinue
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.IFCEIF){
            //ASTdiagrama.push('If else if')
            var ejec = SentenciaIfElseIf(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = ejec.hayBreak
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
        else if(instruccion.tipo === TIPO_INSTRUCCION.SWITCH){
            //ASTdiagrama.push('Switch')
            var ejec = Switch(instruccion, _ambito)
            var mensaje = ejec.cadena
            hayBreak = false
            hayContinue = ejec.hayContinue
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
        else if(instruccion.tipo === TIPO_INSTRUCCION.CONTINUE){
            hayContinue = true
            return {
                hayContinue: hayContinue,
                cadena: cadena
            }
        }
        /*
        else if(instruccion.tipo === TIPO_INSTRUCCION.RETURN){
            hayReturn = true
            return {
                hayReturn: hayReturn,
                cadena: cadena
            }
        }*/
        else if(instruccion.tipo === TIPO_INSTRUCCION.INCREMENTO){
            //ASTdiagrama.push('Incremento')
            var mensaje = Incremento(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }

        else if(instruccion.tipo === TIPO_INSTRUCCION.DECREMENTO){
            //ASTdiagrama.push('Decremento')
            var mensaje = Decremento(instruccion, _ambito)
            if(mensaje!=null){
                cadena+=mensaje
            }
        }
    });
    return{
        hayBreak: hayBreak,
        hayContinue: hayContinue,
        //hayReturn: hayReturn,
        cadena: cadena
    }
    //return cadena
}

module.exports = Bloque