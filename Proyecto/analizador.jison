
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

/*%options case-insensitive*/

%%

\s+                   /* skip whitespace */
"//".*                                      //Comentario unilinea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]         //Comentario multilinea

[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"clase"               return 'clase'
"double"             return 'decimal'
"string"              return 'cadena'
"boolean"             return 'bandera'
"true"                return 'true'
"false"               return 'false'
"int"                 return 'intpr'
"char"                return 'charpr'
"cout"               return 'cout'
"while"               return 'while'
"exec"               return 'exec'
"if"               return 'if'
"break"               return 'break'
"else"               return 'else'


"||"                   return 'or'
"&&"                   return 'and'
"=="                   return 'igualigual'
"="                     return 'igual'
"!="                   return 'diferente'
"<="                   return 'menorigual'
">="                   return 'mayorigual'
">"                   return 'mayor'
"<"                   return 'menor'
","                   return 'coma'
";"                   return 'ptcoma'
"{"                   return 'llaveA'
"}"                   return 'llaveC'
"*"                   return 'multi'
"/"                   return 'div'
"-"                   return 'menos'
"+"                   return 'suma'
"^"                   return 'exponente'
"!"                   return 'not'
"%"                   return 'modulo'
"("                   return 'parA'
")"                   return 'parC'
"PI"                  return 'PI'
"E"                   return 'E'

([a-zA-Z])([a-zA-Z0-9_])* return 'identificador'
/*["\""]([^"\""])*["\""] return 'string'*/
["\""]((.)*?(\\\")?)*?["\""] return 'string'
(\'(.)?\'?\')|(\'\\n\')|(\'\\\\\')|(\'\\\"\')|(\'\\t\')|(\'\\r\')|(\'\\u0000\')    return 'caracter'

<<EOF>>               return 'EOF';
/*.                     return 'INVALID'*/
.           {console.log('Error Lexico: '+yytext+' en la linea' + yylloc.first_line + ' en la columna '+yylloc.first_column); }

/lex
%{
	const TIPO_OPERACION	= require('./controller/Enums/TipoOperacion');
	const TIPO_VALOR 		= require('./controller/Enums/TipoValor');
	const TIPO_DATO			= require('./controller/Enums/TipoDato'); //para jalar el tipo de dato
	const INSTRUCCION	= require('./controller/Instruccion/Instruccion');
%}

/* operator associations and precedence */

%left 'or'
%left 'and'
%right 'not'
%left 'igualigual' 'diferente' 'menor' 'menorigual' 'mayor' 'mayorigual'
%left 'suma' 'menos'
%left 'multi' 'div' 'modulo' 
%left 'exponente'

%left umenos

%start INICIO

%% /* language grammar */

INICIO: clase identificador llaveA OPCIONESCUERPO llaveC EOF{return $4;}
;

OPCIONESCUERPO: OPCIONESCUERPO CUERPO {$1.push($2); $$=$1;}
              | CUERPO {$$=[$1];}
;

CUERPO: DEC_VAR {$$=$1}
      | DEC_MET {$$=$1}
      | AS_VAR {$$=$1}
      | EXEC {$$=$1}
;

EXEC: exec identificador parA parC ptcoma {$$ = INSTRUCCION.nuevoExec($2, null, this._$.first_line,this._$.first_column+1)}
    | exec identificador parA LISTAVALORES parC ptcoma {$$ = INSTRUCCION.nuevoExec($2, $4, this._$.first_line,this._$.first_column+1)}
;

LLAMADA_METODO: identificador parA parC ptcoma {$$ = INSTRUCCION.nuevaLlamada($1, null, this._$.first_line,this._$.first_column+1)}
              | identificador parA LISTAVALORES parC ptcoma {$$ = INSTRUCCION.nuevaLlamada($1, $3, this._$.first_line,this._$.first_column+1)}
;

LISTAVALORES: LISTAVALORES coma EXPRESION {$1.push($3); $$=$1}
            | EXPRESION {$$=[$1]}
;

AS_VAR: identificador igual EXPRESION ptcoma {$$ = INSTRUCCION.nuevaAsignacion($1, $3, this._$.first_line,this._$.first_column+1)}
;

DEC_VAR: TIPO identificador ptcoma {$$ = INSTRUCCION.nuevaDeclaracion($2, null, $1, this._$.first_line,this._$.first_column+1)}
       | TIPO identificador igual EXPRESION ptcoma {$$ = INSTRUCCION.nuevaDeclaracion($2, $4, $1, this._$.first_line,this._$.first_column+1)}
       | TIPO identificador LISTADEC ptcoma {var temp=$2; for(var i=0;i<$3.length;i++){temp=temp + "," + $3[i]}; $$ = INSTRUCCION.nuevaDeclaracion(temp, null, $1, this._$.first_line,this._$.first_column+1)}
       | TIPO identificador LISTADEC igual EXPRESION ptcoma {var temp=$2; for(var i=0;i<$3.length;i++){temp=temp + "," + $3[i]}; $$ = INSTRUCCION.nuevaDeclaracion(temp, $5, $1, this._$.first_line,this._$.first_column+1)}
;

LISTADEC: LISTADEC coma identificador {$1.push($3); $$=$1;}
        | coma identificador {$$=[$2];}
;

TIPO: decimal {$$ = TIPO_DATO.DECIMAL}
    | cadena {$$ = TIPO_DATO.CADENA}
    | bandera {$$ = TIPO_DATO.BANDERA}
    | intpr {$$ = TIPO_DATO.ENTERO}
    | charpr {$$ = TIPO_DATO.CARACTER}
;


EXPRESION: EXPRESION suma EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.SUMA,this._$.first_line,this._$.first_column+1);}
         | EXPRESION menos EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.RESTA,this._$.first_line,this._$.first_column+1);}
         | EXPRESION multi EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MULTIPLICACION,this._$.first_line,this._$.first_column+1);}
         | EXPRESION div EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.DIVISION,this._$.first_line,this._$.first_column+1);}
         | EXPRESION exponente EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.POTENCIA,this._$.first_line,this._$.first_column+1);}
         | EXPRESION modulo EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MODULO,this._$.first_line,this._$.first_column+1);}
         | menos EXPRESION %prec umenos {$$= INSTRUCCION.nuevaOperacionBinaria($2,$2, TIPO_OPERACION.NEGACION,this._$.first_line,this._$.first_column+1);}
         | parA EXPRESION parC {$$=$2}
         | EXPRESION igualigual EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.IGUALIGUAL,this._$.first_line,this._$.first_column+1);}
         | EXPRESION diferente EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.DIFERENTE,this._$.first_line,this._$.first_column+1);}
         | EXPRESION menor EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MENOR,this._$.first_line,this._$.first_column+1);}
         | EXPRESION menorigual EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MENORIGUAL,this._$.first_line,this._$.first_column+1);}
         | EXPRESION mayor EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MAYOR,this._$.first_line,this._$.first_column+1);}
         | EXPRESION mayorigual EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.MAYORIGUAL,this._$.first_line,this._$.first_column+1);} 
         | EXPRESION or EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.OR,this._$.first_line,this._$.first_column+1);}
         | EXPRESION and EXPRESION {$$= INSTRUCCION.nuevaOperacionBinaria($1,$3, TIPO_OPERACION.AND,this._$.first_line,this._$.first_column+1);}
         | not EXPRESION
         | NUMBER {
           split1 = String($1).split(".");
           if(split1.length === 1){
              $$ = INSTRUCCION.nuevoValor(Number($1), TIPO_VALOR.ENTERO, this._$.first_line,this._$.first_column+1)
            } else{
              $$ = INSTRUCCION.nuevoValor(Number($1), TIPO_VALOR.DECIMAL, this._$.first_line,this._$.first_column+1)
            }
           }
         | true {$$ = INSTRUCCION.nuevoValor(($1), TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)}
         | false {$$ = INSTRUCCION.nuevoValor($1, TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)}
         | string {$$ = INSTRUCCION.nuevoValor($1, TIPO_VALOR.CADENA, this._$.first_line,this._$.first_column+1)}
         | identificador {$$ = INSTRUCCION.nuevoValor($1, TIPO_VALOR.IDENTIFICADOR, this._$.first_line,this._$.first_column+1)}
         | caracter {$$ = INSTRUCCION.nuevoValor($1, TIPO_VALOR.CARACTER, this._$.first_line,this._$.first_column+1)}
;

DEC_MET : identificador parA parC llaveA OPCIONESMETODO llaveC {$$ = INSTRUCCION.nuevoMetodo($1, null, $5, this._$.first_line,this._$.first_column+1)}
        | identificador parA LISTAPARAMETROS parC llaveA OPCIONESMETODO llaveC {$$ = INSTRUCCION.nuevoMetodo($1, $3, $6, this._$.first_line,this._$.first_column+1)}
;

LISTAPARAMETROS: LISTAPARAMETROS coma  PARAMETROS {$1.push($3); $$=$1;}
               | PARAMETROS {$$=[$1];}
;

PARAMETROS: TIPO identificador {$$ = INSTRUCCION.nuevaDeclaracion($2, null, $1, this._$.first_line,this._$.first_column+1)}
;

OPCIONESMETODO: OPCIONESMETODO CUERPOMETODO  {$1.push($2); $$=$1;}
              | CUERPOMETODO {$$=[$1];}
;

CUERPOMETODO: DEC_VAR {$$=$1}
            | WHILE {$$=$1}
            | IMPRIMIR {$$=$1}
            | AS_VAR {$$=$1}
            | LLAMADA_METODO {$$=$1}
            | IF {$$=$1}
            | BREAK {$$=$1}
;

IMPRIMIR: cout menor menor EXPRESION ptcoma{$$ = new INSTRUCCION.nuevoCout($4, this._$.first_line,this._$.first_column+1)}
;

WHILE: while parA EXPRESION parC llaveA OPCIONESMETODO llaveC {$$ = new INSTRUCCION.nuevoWhile($3, $6 , this._$.first_line,this._$.first_column+1)}
;

IF: if parA EXPRESION parC llaveA OPCIONESMETODO llaveC {$$ = new INSTRUCCION.nuevoIf($3, $6 , this._$.first_line,this._$.first_column+1)}
  | if parA EXPRESION parC llaveA OPCIONESMETODO llaveC else llaveA OPCIONESMETODO llaveC {$$ = new INSTRUCCION.nuevoIfElse($3, $6, $10 , this._$.first_line,this._$.first_column+1)}
  | if parA EXPRESION parC llaveA OPCIONESMETODO llaveC ELSEIF {$$= new INSTRUCCION.nuevoIfConElseIf($3, $6, $8, null, this._$.first_line,this._$.first_column+1)}
  | if parA EXPRESION parC llaveA OPCIONESMETODO llaveC ELSEIF else llaveA OPCIONESMETODO llaveC {$$= new INSTRUCCION.nuevoIfConElseIf($3, $6, $8, $11, this._$.first_line,this._$.first_column+1)}
;

ELSEIF: ELSEIF CONEIF {$1.push($2); $$=$1;}
      | CONEIF {$$=[$1];}
;

CONEIF: else if parA EXPRESION parC llaveA OPCIONESMETODO llaveC {$$ = new INSTRUCCION.nuevoElseIf($4, $7 , this._$.first_line,this._$.first_column+1) }
;

BREAK: break ptcoma {$$ = new INSTRUCCION.nuevoBreak(this._$.first_line,this._$.first_column+1)}
;