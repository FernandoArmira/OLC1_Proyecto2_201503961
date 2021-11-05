const Operacion = require("../Operacion/Operacion");

function Asignacionlista(_instruccion, _ambito){
    //console.log(_instruccion)
    const id = _instruccion.id;
    const existe = _ambito.existeSimboloAmbitoActual(id)
    //console.log(_instruccion)
    //console.log(_ambito)
    if(existe){
        var valor = Operacion(_instruccion.expresion, _ambito)
        //var indice = Operacion(_instruccion.indice, _ambito)
        var simbolo = _ambito.getSimbolo(id)
        var tipos = {
            tipoSimbolo: simbolo.tipo,
            tipoNuevoValor: valor.tipo
        }
        if(tipos.tipoSimbolo===tipos.tipoNuevoValor){
            simbolo.valor.push(valor.valor)
            _ambito.actualizar(id,simbolo)
            return null
        }
        return "Error: No es posible asignar un valor de tipo "+tipos.tipoNuevoValor+" a la variable \n'"+ id +"' que es de tipo "+tipos.tipoSimbolo+"... Linea: "+_instruccion.linea+" Columna: "+ _instruccion.columna;
    }
    return `Error: la variable '${String(id)}' no existe... Linea: ${_instruccion.linea} Columna: ${_instruccion.columna}`
}

module.exports = Asignacionlista