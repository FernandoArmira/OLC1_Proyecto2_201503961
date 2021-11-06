const Ambito = require("../controller/Ambito/Ambito")
const Bloque = require("../controller/Instruccion/Bloque")
const Global = require("../controller/Instruccion/Global")


module.exports=(parser, app)=>{
    
    app.post('/analizar',(req,res)=>{
        TablaSimbolos =  new Array();
        TablaErrores = new Array();
        ASTdiagrama = new Array();
        padre = "Nodo0";
        contador = 1;
        
        //var prueba = req.body.prueba
        var prueba = req.body.prueba.toLowerCase() //pasar todo a minuscula
        //try {
            ASTdiagrama.push('Raiz')

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
        var logger = fs.createWriteStream('reporteast.dot', {
        //flags: 'a' // 'a' means appending (old data will be preserved)
        })

        logger.write("graph nombre_del_grafo {\n")
        logger.write("\"Nodo0\"[label=Raiz]; \n")
        for(var i=1; i< ASTdiagrama.length;i++){
            logger.write("\""+ ASTdiagrama[i][0] +"\"[label=\""+ASTdiagrama[i][1]+"\"]; \n")
            logger.write("\""+ASTdiagrama[i][2]+"\"--\""+ ASTdiagrama[i][0] +"\"; \n")
        }
        logger.write("}\n")
        logger.end() // close string

        const { exec} = require('child_process');
        exec(`dot -Tpng reporteast.dot -o reporteast.png`, (error, stdout, stderr) =>{
            if(error){
                console.log(`error: ${error.message}`);
                return;
            }
            if(stderr){
                console.log(`stderr: ${stderr}`);
                return;
            }
        }

    );


    })
    
/*
    app.get('/simbolos',(req, res)=>{
        res.send("TablaSimbolos")
    });
*/
}