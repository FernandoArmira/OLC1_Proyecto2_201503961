const Ambito = require("../controller/Ambito/Ambito")
const Bloque = require("../controller/Instruccion/Bloque")
const Global = require("../controller/Instruccion/Global")

module.exports=(parser, app)=>{
    app.post('/analizar',(req,res)=>{
        //var prueba = req.body.prueba
        var prueba = req.body.prueba.toLowerCase() //pasar todo a minuscula
        //try {
            var ast = parser.parse(prueba)
            const AmbitoGlobal = new Ambito(null)
            //var cadena = Bloque(ast, AmbitoGlobal)
            var cadena = Global(ast, AmbitoGlobal)

            var resultado = {
                arbol: ast,
                consola: cadena
            }
            res.send(resultado)
            console.log(TablaSimbolos)
            //console.log(TablaSimbolos[0][0])
        //} catch (error) {
            //res.send(error)
        //}

    }),

    TablaSimbolos =  new Array();

    app.get('/simbolos',(res)=>{
        res.send(TablaSimbolos)
    });
    
}