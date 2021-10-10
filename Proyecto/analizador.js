/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analizador = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,14],$V3=[1,15],$V4=[1,16],$V5=[1,17],$V6=[1,18],$V7=[5,8,15,26,27,28,29,30],$V8=[1,23],$V9=[1,42],$Va=[1,36],$Vb=[1,35],$Vc=[1,37],$Vd=[1,38],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,43],$Vi=[5,8,15,26,27,28,29,30,59,60,61,65],$Vj=[17,21],$Vk=[1,55],$Vl=[1,56],$Vm=[1,57],$Vn=[1,58],$Vo=[1,59],$Vp=[1,60],$Vq=[1,61],$Vr=[1,62],$Vs=[1,63],$Vt=[1,64],$Vu=[1,65],$Vv=[1,66],$Vw=[1,67],$Vx=[1,68],$Vy=[17,18,21,31,32,33,34,35,36,37,38,39,40,41,42,43,44],$Vz=[18,21,23],$VA=[1,89],$VB=[1,88],$VC=[1,87],$VD=[1,90],$VE=[1,91],$VF=[17,18,21,43,44],$VG=[1,111],$VH=[5,8,26,27,28,29,30,59,60,61,65],$VI=[17,18,21,31,32,37,38,39,40,41,42,43,44],$VJ=[17,18,21,31,32,33,34,36,37,38,39,40,41,42,43,44],$VK=[17,18,21,37,38,39,40,41,42,43,44],$VL=[1,146],$VM=[5,8,26,27,28,29,30,59,60,61,62,65];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"clase":4,"identificador":5,"llaveA":6,"OPCIONESCUERPO":7,"llaveC":8,"EOF":9,"CUERPO":10,"DEC_VAR":11,"DEC_MET":12,"AS_VAR":13,"EXEC":14,"exec":15,"parA":16,"parC":17,"ptcoma":18,"LISTAVALORES":19,"LLAMADA_METODO":20,"coma":21,"EXPRESION":22,"igual":23,"TIPO":24,"LISTADEC":25,"decimal":26,"cadena":27,"bandera":28,"intpr":29,"charpr":30,"suma":31,"menos":32,"multi":33,"div":34,"exponente":35,"modulo":36,"igualigual":37,"diferente":38,"menor":39,"menorigual":40,"mayor":41,"mayorigual":42,"or":43,"and":44,"not":45,"NUMBER":46,"true":47,"false":48,"string":49,"caracter":50,"OPCIONESMETODO":51,"LISTAPARAMETROS":52,"PARAMETROS":53,"CUERPOMETODO":54,"WHILE":55,"IMPRIMIR":56,"IF":57,"BREAK":58,"cout":59,"while":60,"if":61,"else":62,"ELSEIF":63,"CONEIF":64,"break":65,"$accept":0,"$end":1},
terminals_: {2:"error",4:"clase",5:"identificador",6:"llaveA",8:"llaveC",9:"EOF",15:"exec",16:"parA",17:"parC",18:"ptcoma",21:"coma",23:"igual",26:"decimal",27:"cadena",28:"bandera",29:"intpr",30:"charpr",31:"suma",32:"menos",33:"multi",34:"div",35:"exponente",36:"modulo",37:"igualigual",38:"diferente",39:"menor",40:"menorigual",41:"mayor",42:"mayorigual",43:"or",44:"and",45:"not",46:"NUMBER",47:"true",48:"false",49:"string",50:"caracter",59:"cout",60:"while",61:"if",62:"else",65:"break"},
productions_: [0,[3,6],[7,2],[7,1],[10,1],[10,1],[10,1],[10,1],[14,5],[14,6],[20,4],[20,5],[19,3],[19,1],[13,4],[11,3],[11,5],[11,4],[11,6],[25,3],[25,2],[24,1],[24,1],[24,1],[24,1],[24,1],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,1],[22,1],[22,1],[22,1],[22,1],[22,1],[12,6],[12,7],[52,3],[52,1],[53,2],[51,2],[51,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[54,1],[56,5],[55,7],[57,7],[57,11],[57,8],[57,12],[63,2],[63,1],[64,8],[58,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-2];
break;
case 2: case 54: case 69:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3: case 20: case 52: case 55: case 70:
this.$=[$$[$0]];
break;
case 4: case 5: case 6: case 7: case 56: case 57: case 58: case 59: case 60: case 61: case 62:
this.$=$$[$0]
break;
case 8:
this.$ = INSTRUCCION.nuevoExec($$[$0-3], null, this._$.first_line,this._$.first_column+1)
break;
case 9:
this.$ = INSTRUCCION.nuevoExec($$[$0-4], $$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 10:
this.$ = INSTRUCCION.nuevaLlamada($$[$0-3], null, this._$.first_line,this._$.first_column+1)
break;
case 11:
this.$ = INSTRUCCION.nuevaLlamada($$[$0-4], $$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 12:
$$[$0-2].push($$[$0]); this.$=$$[$0-2]
break;
case 13:
this.$=[$$[$0]]
break;
case 14:
this.$ = INSTRUCCION.nuevaAsignacion($$[$0-3], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 15:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-1], null, $$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 16:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-3], $$[$0-1], $$[$0-4], this._$.first_line,this._$.first_column+1)
break;
case 17:
var temp=$$[$0-2]; for(var i=0;i<$$[$0-1].length;i++){temp=temp + "," + $$[$0-1][i]}; this.$ = INSTRUCCION.nuevaDeclaracion(temp, null, $$[$0-3], this._$.first_line,this._$.first_column+1)
break;
case 18:
var temp=$$[$0-4]; for(var i=0;i<$$[$0-3].length;i++){temp=temp + "," + $$[$0-3][i]}; this.$ = INSTRUCCION.nuevaDeclaracion(temp, $$[$0-1], $$[$0-5], this._$.first_line,this._$.first_column+1)
break;
case 19: case 51:
$$[$0-2].push($$[$0]); this.$=$$[$0-2];
break;
case 21:
this.$ = TIPO_DATO.DECIMAL
break;
case 22:
this.$ = TIPO_DATO.CADENA
break;
case 23:
this.$ = TIPO_DATO.BANDERA
break;
case 24:
this.$ = TIPO_DATO.ENTERO
break;
case 25:
this.$ = TIPO_DATO.CARACTER
break;
case 26:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.SUMA,this._$.first_line,this._$.first_column+1);
break;
case 27:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.RESTA,this._$.first_line,this._$.first_column+1);
break;
case 33:
this.$=$$[$0-1]
break;
case 34:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.IGUALIGUAL,this._$.first_line,this._$.first_column+1);
break;
case 35:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.DIFERENTE,this._$.first_line,this._$.first_column+1);
break;
case 36:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MENOR,this._$.first_line,this._$.first_column+1);
break;
case 38:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MAYOR,this._$.first_line,this._$.first_column+1);
break;
case 40:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.OR,this._$.first_line,this._$.first_column+1);
break;
case 41:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.AND,this._$.first_line,this._$.first_column+1);
break;
case 43:

           split1 = String($$[$0]).split(".");
           if(split1.length === 1){
              this.$ = INSTRUCCION.nuevoValor(Number($$[$0]), TIPO_VALOR.ENTERO, this._$.first_line,this._$.first_column+1)
            } else{
              this.$ = INSTRUCCION.nuevoValor(Number($$[$0]), TIPO_VALOR.DECIMAL, this._$.first_line,this._$.first_column+1)
            }
           
break;
case 44:
this.$ = INSTRUCCION.nuevoValor(($$[$0]), TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)
break;
case 45:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)
break;
case 46:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.CADENA, this._$.first_line,this._$.first_column+1)
break;
case 47:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.IDENTIFICADOR, this._$.first_line,this._$.first_column+1)
break;
case 48:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.CARACTER, this._$.first_line,this._$.first_column+1)
break;
case 49:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-5], null, $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 50:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 53:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0], null, $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 63:
this.$ = new INSTRUCCION.nuevoCout($$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 64:
this.$ = new INSTRUCCION.nuevoWhile($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 65:
this.$ = new INSTRUCCION.nuevoIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 66:
this.$ = new INSTRUCCION.nuevoIfElse($$[$0-8], $$[$0-5], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 67:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-5], $$[$0-2], $$[$0], null, this._$.first_line,this._$.first_column+1)
break;
case 68:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-9], $$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 71:
this.$ = new INSTRUCCION.nuevoElseIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1) 
break;
case 72:
this.$ = new INSTRUCCION.nuevoBreak(this._$.first_line,this._$.first_column+1)
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4]},{5:$V0,7:5,10:6,11:7,12:8,13:9,14:10,15:$V1,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6},{5:$V0,8:[1,19],10:20,11:7,12:8,13:9,14:10,15:$V1,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6},o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),{5:[1,21]},{16:[1,22],23:$V8},{5:[1,24]},{5:[2,21]},{5:[2,22]},{5:[2,23]},{5:[2,24]},{5:[2,25]},{9:[1,25]},o($V7,[2,2]),{18:[1,26],21:[1,29],23:[1,27],25:28},{17:[1,30],24:33,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,52:31,53:32},{5:$V9,16:$Va,22:34,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{16:[1,44]},{1:[2,1]},o($Vi,[2,15]),{5:$V9,16:$Va,22:45,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{18:[1,46],21:[1,48],23:[1,47]},{5:[1,49]},{6:[1,50]},{17:[1,51],21:[1,52]},o($Vj,[2,52]),{5:[1,53]},{18:[1,54],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{5:$V9,16:$Va,22:69,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:70,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:71,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},o($Vy,[2,43]),o($Vy,[2,44]),o($Vy,[2,45]),o($Vy,[2,46]),o($Vy,[2,47]),o($Vy,[2,48]),{5:$V9,16:$Va,17:[1,72],19:73,22:74,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{18:[1,75],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},o($Vi,[2,17]),{5:$V9,16:$Va,22:76,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:[1,77]},o($Vz,[2,20]),{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:78,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{6:[1,92]},{24:33,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,53:93},o($Vj,[2,53]),o($Vi,[2,14]),{5:$V9,16:$Va,22:94,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:95,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:96,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:97,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:98,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:99,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:100,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:101,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:102,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:103,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:104,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:105,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:106,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:107,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},o($Vy,[2,32]),{17:[1,108],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},o($VF,[2,42],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv}),{18:[1,109]},{17:[1,110],21:$VG},o($Vj,[2,13],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),o($Vi,[2,16]),{18:[1,112],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},o($Vz,[2,19]),{5:$VA,8:[1,113],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($VH,[2,55]),o($VH,[2,56]),o($VH,[2,57]),o($VH,[2,58]),o($VH,[2,59]),o($VH,[2,60]),o($VH,[2,61]),o($VH,[2,62]),{16:[1,115]},{39:[1,116]},{16:[1,117],23:$V8},{16:[1,118]},{18:[1,119]},{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:120,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($Vj,[2,51]),o($VI,[2,26],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VI,[2,27],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VJ,[2,28],{35:$Vo}),o($VJ,[2,29],{35:$Vo}),o($Vy,[2,30]),o($VJ,[2,31],{35:$Vo}),o($VK,[2,34],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VK,[2,35],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VK,[2,36],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VK,[2,37],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VK,[2,38],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($VK,[2,39],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o([17,18,21,43],[2,40],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,44:$Vx}),o($VF,[2,41],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv}),o($Vy,[2,33]),o($V7,[2,8]),{18:[1,121]},{5:$V9,16:$Va,22:122,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},o($Vi,[2,18]),o($V7,[2,49]),o($VH,[2,54]),{5:$V9,16:$Va,22:123,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{39:[1,124]},{5:$V9,16:$Va,17:[1,125],19:126,22:74,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$V9,16:$Va,22:127,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},o($VH,[2,72]),{5:$VA,8:[1,128],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($V7,[2,9]),o($Vj,[2,12],{31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx}),{17:[1,129],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{5:$V9,16:$Va,22:130,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{18:[1,131]},{17:[1,132],21:$VG},{17:[1,133],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},o($V7,[2,50]),{6:[1,134]},{18:[1,135],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},o($VH,[2,10]),{18:[1,136]},{6:[1,137]},{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:138,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($VH,[2,63]),o($VH,[2,11]),{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:139,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{5:$VA,8:[1,140],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{5:$VA,8:[1,141],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($VH,[2,64]),o($VH,[2,65],{63:143,64:144,62:[1,142]}),{6:[1,145],61:$VL},o($VH,[2,67],{64:148,62:[1,147]}),o($VM,[2,70]),{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:149,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{16:[1,150]},{6:[1,151],61:$VL},o($VM,[2,69]),{5:$VA,8:[1,152],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{5:$V9,16:$Va,22:153,32:$Vb,45:$Vc,46:$Vd,47:$Ve,48:$Vf,49:$Vg,50:$Vh},{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:154,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($VH,[2,66]),{17:[1,155],31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,37:$Vq,38:$Vr,39:$Vs,40:$Vt,41:$Vu,42:$Vv,43:$Vw,44:$Vx},{5:$VA,8:[1,156],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{6:[1,157]},o($VH,[2,68]),{5:$VA,11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,51:158,54:79,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},{5:$VA,8:[1,159],11:80,13:83,20:84,24:11,26:$V2,27:$V3,28:$V4,29:$V5,30:$V6,54:114,55:81,56:82,57:85,58:86,59:$VB,60:$VC,61:$VD,65:$VE},o($VM,[2,71])],
defaultActions: {14:[2,21],15:[2,22],16:[2,23],17:[2,24],18:[2,25],25:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	const TIPO_OPERACION	= require('./controller/Enums/TipoOperacion');
	const TIPO_VALOR 		= require('./controller/Enums/TipoValor');
	const TIPO_DATO			= require('./controller/Enums/TipoDato'); //para jalar el tipo de dato
	const INSTRUCCION	= require('./controller/Instruccion/Instruccion');
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1://Comentario unilinea
break;
case 2://Comentario multilinea
break;
case 3:return 46
break;
case 4:return 4
break;
case 5:return 26
break;
case 6:return 27
break;
case 7:return 28
break;
case 8:return 47
break;
case 9:return 48
break;
case 10:return 29
break;
case 11:return 30
break;
case 12:return 59
break;
case 13:return 60
break;
case 14:return 15
break;
case 15:return 61
break;
case 16:return 65
break;
case 17:return 62
break;
case 18:return 43
break;
case 19:return 44
break;
case 20:return 37
break;
case 21:return 23
break;
case 22:return 38
break;
case 23:return 40
break;
case 24:return 42
break;
case 25:return 41
break;
case 26:return 39
break;
case 27:return 21
break;
case 28:return 18
break;
case 29:return 6
break;
case 30:return 8
break;
case 31:return 33
break;
case 32:return 34
break;
case 33:return 32
break;
case 34:return 31
break;
case 35:return 35
break;
case 36:return 45
break;
case 37:return 36
break;
case 38:return 16
break;
case 39:return 17
break;
case 40:return 'PI'
break;
case 41:return 'E'
break;
case 42:return 5
break;
case 43:return 49
break;
case 44:return 50
break;
case 45:return 9;
break;
case 46:console.log('Error Lexico: '+yy_.yytext+' en la linea' + yy_.yylloc.first_line + ' en la columna '+yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:clase\b)/,/^(?:double\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:int\b)/,/^(?:char\b)/,/^(?:cout\b)/,/^(?:while\b)/,/^(?:exec\b)/,/^(?:if\b)/,/^(?:break\b)/,/^(?:else\b)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:==)/,/^(?:=)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:>)/,/^(?:<)/,/^(?:,)/,/^(?:;)/,/^(?:\{)/,/^(?:\})/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/,/^(?:["\""]((.)*?(\\")?)*?["\""])/,/^(?:('(.)?'?')|('\\n')|('\\\\')|('\\"')|('\\t')|('\\r')|('\\u0000'))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analizador;
exports.Parser = analizador.Parser;
exports.parse = function () { return analizador.parse.apply(analizador, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}