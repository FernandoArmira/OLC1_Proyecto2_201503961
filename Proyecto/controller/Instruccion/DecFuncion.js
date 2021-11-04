const Funcion = require("../Ambito/Funcion")

function DecFuncion(_instruccion, _ambito){
    //console.log(_instruccion)
    const nuevaFuncion = new Funcion(_instruccion.tipo ,_instruccion.nombre, _instruccion.lista_parametros, _instruccion.instrucciones, _instruccion.linea, _instruccion.columna)
    //verificamos si el nombre ya existe como simbolo
    if(_ambito.existeSimbolo(nuevaFuncion.id)!=false){
        return `Error: No se puede declarar un metodo con el mismo nombre \n de una variable '${nuevaFuncion.id}'... Linea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}`
    }
    //verificamos si el metodo ya existe
    else if(_ambito.existeFuncion(nuevaFuncion.id)!=false){
        return `Error: El método '${nuevaFuncion.id}' ya existe... Linea: ${nuevaFuncion.linea} Columna: ${nuevaFuncion.columna}`
    }
    //de lo contrario vamos a guardarlo
    _ambito.addFuncion(nuevaFuncion.id, nuevaFuncion)
    Funciones =  new Array();
    Funciones.push(_instruccion.nombre)
    Funciones.push("Funcion")
    Funciones.push(_instruccion.tipof)
    //Metodos.push(_ambito.anterior)
    Funciones.push(_instruccion.linea)
    Funciones.push(_instruccion.columna)
    TablaSimbolos.push(Funciones)
    return null
}

module.exports = DecFuncion