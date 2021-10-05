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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,14],$V3=[1,15],$V4=[1,16],$V5=[5,8,15,26,27,28],$V6=[1,21],$V7=[5,8,15,26,27,28,54,55,56,60],$V8=[17,21],$V9=[1,45],$Va=[1,39],$Vb=[1,38],$Vc=[1,40],$Vd=[1,41],$Ve=[1,42],$Vf=[1,43],$Vg=[1,44],$Vh=[1,61],$Vi=[1,60],$Vj=[1,59],$Vk=[1,62],$Vl=[1,63],$Vm=[1,75],$Vn=[1,68],$Vo=[1,67],$Vp=[1,69],$Vq=[1,70],$Vr=[1,71],$Vs=[1,72],$Vt=[1,73],$Vu=[1,74],$Vv=[1,76],$Vw=[1,77],$Vx=[1,78],$Vy=[1,79],$Vz=[1,80],$VA=[17,18,21,23,24,29,30,31,32,33,34,35,36,37,38,39,40],$VB=[1,86],$VC=[5,8,26,27,28,54,55,56,60],$VD=[17,18,21,39,40],$VE=[17,18,21,23,24,29,34,35,36,37,38,39,40],$VF=[17,18,21,23,24,29,30,31,33,34,35,36,37,38,39,40],$VG=[17,18,21,23,34,35,36,37,38,39,40],$VH=[1,136],$VI=[5,8,26,27,28,54,55,56,57,60];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"clase":4,"identificador":5,"llaveA":6,"OPCIONESCUERPO":7,"llaveC":8,"EOF":9,"CUERPO":10,"DEC_VAR":11,"DEC_MET":12,"AS_VAR":13,"EXEC":14,"exec":15,"parA":16,"parC":17,"ptcoma":18,"LISTAVALORES":19,"LLAMADA_METODO":20,"coma":21,"EXPRESION":22,"menor":23,"menos":24,"TIPO":25,"decimal":26,"cadena":27,"bandera":28,"suma":29,"multi":30,"div":31,"exponente":32,"modulo":33,"igualigual":34,"diferente":35,"menorigual":36,"mayor":37,"mayorigual":38,"or":39,"and":40,"not":41,"NUMBER":42,"true":43,"false":44,"string":45,"OPCIONESMETODO":46,"LISTAPARAMETROS":47,"PARAMETROS":48,"CUERPOMETODO":49,"WHILE":50,"IMPRIMIR":51,"IF":52,"BREAK":53,"cout":54,"while":55,"if":56,"else":57,"ELSEIF":58,"CONEIF":59,"break":60,"$accept":0,"$end":1},
terminals_: {2:"error",4:"clase",5:"identificador",6:"llaveA",8:"llaveC",9:"EOF",15:"exec",16:"parA",17:"parC",18:"ptcoma",21:"coma",23:"menor",24:"menos",26:"decimal",27:"cadena",28:"bandera",29:"suma",30:"multi",31:"div",32:"exponente",33:"modulo",34:"igualigual",35:"diferente",36:"menorigual",37:"mayor",38:"mayorigual",39:"or",40:"and",41:"not",42:"NUMBER",43:"true",44:"false",45:"string",54:"cout",55:"while",56:"if",57:"else",60:"break"},
productions_: [0,[3,6],[7,2],[7,1],[10,1],[10,1],[10,1],[10,1],[14,5],[14,6],[20,4],[20,5],[19,3],[19,1],[13,5],[11,3],[11,6],[25,1],[25,1],[25,1],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,3],[22,2],[22,1],[22,1],[22,1],[22,1],[22,1],[12,6],[12,7],[47,3],[47,1],[48,2],[46,2],[46,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[49,1],[51,5],[50,7],[52,7],[52,11],[52,8],[52,12],[58,2],[58,1],[59,8],[53,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-2];
break;
case 2: case 47: case 62:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3: case 45: case 48: case 63:
this.$=[$$[$0]];
break;
case 4: case 5: case 6: case 7: case 49: case 50: case 51: case 52: case 53: case 54: case 55:
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
this.$ = INSTRUCCION.nuevaAsignacion($$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 15:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-1], null, $$[$0-2], this._$.first_line,this._$.first_column+1)
break;
case 16:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0-4], $$[$0-1], $$[$0-5], this._$.first_line,this._$.first_column+1)
break;
case 17:
this.$ = TIPO_DATO.DECIMAL
break;
case 18:
this.$ = TIPO_DATO.CADENA
break;
case 19:
this.$ = TIPO_DATO.BANDERA
break;
case 20:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.SUMA,this._$.first_line,this._$.first_column+1);
break;
case 21:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.RESTA,this._$.first_line,this._$.first_column+1);
break;
case 27:
this.$=$$[$0-1]
break;
case 28:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.IGUALIGUAL,this._$.first_line,this._$.first_column+1);
break;
case 29:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.DIFERENTE,this._$.first_line,this._$.first_column+1);
break;
case 30:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MENOR,this._$.first_line,this._$.first_column+1);
break;
case 32:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.MAYOR,this._$.first_line,this._$.first_column+1);
break;
case 34:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.OR,this._$.first_line,this._$.first_column+1);
break;
case 35:
this.$= INSTRUCCION.nuevaOperacionBinaria($$[$0-2],$$[$0], TIPO_OPERACION.AND,this._$.first_line,this._$.first_column+1);
break;
case 37:
this.$ = INSTRUCCION.nuevoValor(Number($$[$0]), TIPO_VALOR.DECIMAL, this._$.first_line,this._$.first_column+1)
break;
case 38:
this.$ = INSTRUCCION.nuevoValor(($$[$0]), TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)
break;
case 39:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.BANDERA, this._$.first_line,this._$.first_column+1)
break;
case 40:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.CADENA, this._$.first_line,this._$.first_column+1)
break;
case 41:
this.$ = INSTRUCCION.nuevoValor($$[$0], TIPO_VALOR.IDENTIFICADOR, this._$.first_line,this._$.first_column+1)
break;
case 42:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-5], null, $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 43:
this.$ = INSTRUCCION.nuevoMetodo($$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 44:
$$[$0-2].push($$[$0]); this.$=$$[$0-2];
break;
case 46:
this.$ = INSTRUCCION.nuevaDeclaracion($$[$0], null, $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 56:
this.$ = new INSTRUCCION.nuevoCout($$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 57:
this.$ = new INSTRUCCION.nuevoWhile($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 58:
this.$ = new INSTRUCCION.nuevoIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 59:
this.$ = new INSTRUCCION.nuevoIfElse($$[$0-8], $$[$0-5], $$[$0-1] , this._$.first_line,this._$.first_column+1)
break;
case 60:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-5], $$[$0-2], $$[$0], null, this._$.first_line,this._$.first_column+1)
break;
case 61:
this.$= new INSTRUCCION.nuevoIfConElseIf($$[$0-9], $$[$0-6], $$[$0-4], $$[$0-1], this._$.first_line,this._$.first_column+1)
break;
case 64:
this.$ = new INSTRUCCION.nuevoElseIf($$[$0-4], $$[$0-1] , this._$.first_line,this._$.first_column+1) 
break;
case 65:
this.$ = new INSTRUCCION.nuevoBreak(this._$.first_line,this._$.first_column+1)
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4]},{5:$V0,7:5,10:6,11:7,12:8,13:9,14:10,15:$V1,25:11,26:$V2,27:$V3,28:$V4},{5:$V0,8:[1,17],10:18,11:7,12:8,13:9,14:10,15:$V1,25:11,26:$V2,27:$V3,28:$V4},o($V5,[2,3]),o($V5,[2,4]),o($V5,[2,5]),o($V5,[2,6]),o($V5,[2,7]),{5:[1,19]},{16:[1,20],23:$V6},{5:[1,22]},{5:[2,17]},{5:[2,18]},{5:[2,19]},{9:[1,23]},o($V5,[2,2]),{18:[1,24],23:[1,25]},{17:[1,26],25:29,26:$V2,27:$V3,28:$V4,47:27,48:28},{24:[1,30]},{16:[1,31]},{1:[2,1]},o($V7,[2,15]),{24:[1,32]},{6:[1,33]},{17:[1,34],21:[1,35]},o($V8,[2,45]),{5:[1,36]},{5:$V9,16:$Va,22:37,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,17:[1,46],19:47,22:48,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:49,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:50,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{6:[1,64]},{25:29,26:$V2,27:$V3,28:$V4,48:65},o($V8,[2,46]),{18:[1,66],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},{5:$V9,16:$Va,22:81,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:82,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:83,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},o($VA,[2,37]),o($VA,[2,38]),o($VA,[2,39]),o($VA,[2,40]),o($VA,[2,41]),{18:[1,84]},{17:[1,85],21:$VB},o($V8,[2,13],{23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz}),{18:[1,87],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},{5:$Vh,8:[1,88],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VC,[2,48]),o($VC,[2,49]),o($VC,[2,50]),o($VC,[2,51]),o($VC,[2,52]),o($VC,[2,53]),o($VC,[2,54]),o($VC,[2,55]),{16:[1,90]},{23:[1,91]},{16:[1,92],23:$V6},{16:[1,93]},{18:[1,94]},{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:95,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($V8,[2,44]),o($V7,[2,14]),{5:$V9,16:$Va,22:96,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:97,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:98,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:99,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:100,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:101,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:102,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:103,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:104,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:105,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:106,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:107,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:108,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:109,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},o($VA,[2,26]),{17:[1,110],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},o($VD,[2,36],{23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx}),o($V5,[2,8]),{18:[1,111]},{5:$V9,16:$Va,22:112,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},o($V7,[2,16]),o($V5,[2,42]),o($VC,[2,47]),{5:$V9,16:$Va,22:113,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{23:[1,114]},{5:$V9,16:$Va,17:[1,115],19:116,22:48,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$V9,16:$Va,22:117,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},o($VC,[2,65]),{5:$Vh,8:[1,118],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VE,[2,20],{30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VE,[2,21],{30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VF,[2,22],{32:$Vr}),o($VF,[2,23],{32:$Vr}),o($VA,[2,24]),o($VF,[2,25],{32:$Vr}),o($VG,[2,28],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VG,[2,29],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VG,[2,30],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VG,[2,31],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VG,[2,32],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o($VG,[2,33],{24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs}),o([17,18,21,39],[2,34],{23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,40:$Vz}),o($VD,[2,35],{23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx}),o($VA,[2,27]),o($V5,[2,9]),o($V8,[2,12],{23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz}),{17:[1,119],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},{5:$V9,16:$Va,22:120,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{18:[1,121]},{17:[1,122],21:$VB},{17:[1,123],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},o($V5,[2,43]),{6:[1,124]},{18:[1,125],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},o($VC,[2,10]),{18:[1,126]},{6:[1,127]},{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:128,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VC,[2,56]),o($VC,[2,11]),{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:129,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{5:$Vh,8:[1,130],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{5:$Vh,8:[1,131],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VC,[2,57]),o($VC,[2,58],{58:133,59:134,57:[1,132]}),{6:[1,135],56:$VH},o($VC,[2,60],{59:138,57:[1,137]}),o($VI,[2,63]),{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:139,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{16:[1,140]},{6:[1,141],56:$VH},o($VI,[2,62]),{5:$Vh,8:[1,142],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{5:$V9,16:$Va,22:143,24:$Vb,41:$Vc,42:$Vd,43:$Ve,44:$Vf,45:$Vg},{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:144,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VC,[2,59]),{17:[1,145],23:$Vm,24:$Vn,29:$Vo,30:$Vp,31:$Vq,32:$Vr,33:$Vs,34:$Vt,35:$Vu,36:$Vv,37:$Vw,38:$Vx,39:$Vy,40:$Vz},{5:$Vh,8:[1,146],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{6:[1,147]},o($VC,[2,61]),{5:$Vh,11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,46:148,49:51,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},{5:$Vh,8:[1,149],11:52,13:55,20:56,25:11,26:$V2,27:$V3,28:$V4,49:89,50:53,51:54,52:57,53:58,54:$Vi,55:$Vj,56:$Vk,60:$Vl},o($VI,[2,64])],
defaultActions: {14:[2,17],15:[2,18],16:[2,19],23:[2,1]},
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
case 3:return 42
break;
case 4:return 4
break;
case 5:return 26
break;
case 6:return 27
break;
case 7:return 28
break;
case 8:return 43
break;
case 9:return 44
break;
case 10:return 54
break;
case 11:return 55
break;
case 12:return 15
break;
case 13:return 56
break;
case 14:return 60
break;
case 15:return 57
break;
case 16:return 39
break;
case 17:return 40
break;
case 18:return 34
break;
case 19:return 35
break;
case 20:return 36
break;
case 21:return 38
break;
case 22:return 37
break;
case 23:return 23
break;
case 24:return 21
break;
case 25:return 18
break;
case 26:return 6
break;
case 27:return 8
break;
case 28:return 30
break;
case 29:return 31
break;
case 30:return 24
break;
case 31:return 29
break;
case 32:return 32
break;
case 33:return 41
break;
case 34:return 33
break;
case 35:return 16
break;
case 36:return 17
break;
case 37:return 'PI'
break;
case 38:return 'E'
break;
case 39:return 5
break;
case 40:return 45
break;
case 41:return 9
break;
case 42:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:clase\b)/,/^(?:decimal\b)/,/^(?:cadena\b)/,/^(?:bandera\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:cout\b)/,/^(?:while\b)/,/^(?:exec\b)/,/^(?:if\b)/,/^(?:break\b)/,/^(?:else\b)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:>)/,/^(?:<)/,/^(?:,)/,/^(?:;)/,/^(?:\{)/,/^(?:\})/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:([a-zA-Z])([a-zA-Z0-9_])*)/,/^(?:["\""]([^"\""])*["\""])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}}
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