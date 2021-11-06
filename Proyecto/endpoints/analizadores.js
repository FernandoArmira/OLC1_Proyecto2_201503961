const Ambito = require("../controller/Ambito/Ambito")
const Bloque = require("../controller/Instruccion/Bloque")
const Global = require("../controller/Instruccion/Global")

module.exports=(parser, app)=>{
    app.post('/analizar',(req,res)=>{
        TablaSimbolos =  new Array();
        TablaErrores = new Array();
        //var prueba = req.body.prueba
        var prueba = req.body.prueba.toLowerCase() //pasar todo a minuscula
        //try {
            var ast = parser.parse(prueba)
            const AmbitoGlobal = new Ambito(null)
            //var cadena = Bloque(ast, AmbitoGlobal)
            var cadena = Global(ast, AmbitoGlobal)

            var resultado = {
                arbol: ast,
                consola: cadena,
                simbolos: TablaSimbolos,
                errores: TablaErrores
            }
            res.send(resultado)
            //console.log(resultado.consola)
            //console.log(TablaSimbolos)
            //console.log(TablaSimbolos[0][0])
            //console.log(TablaErrores)
        //} catch (error) {
            //res.send(error)
        //}

        var fs = require('fs')
        var logger = fs.createWriteStream('log.txt', {
        flags: 'a' // 'a' means appending (old data will be preserved)
        })

        logger.write('some data') // append string to your file
        logger.write('more data') // again
        logger.write('and more') // again
        logger.end() // close string

    })

    
/*
    app.get('/simbolos',(req, res)=>{
        res.send("TablaSimbolos")
    });
*/
}