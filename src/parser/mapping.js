const antlr4 = require("antlr4");
const Lexer = require("./mapping/mappingLexer").mappingLexer;
const Parser = require("./mapping/mappingParser").mappingParser;
const Listener = require("./mapping/mappingListener").mappingListener;


var ErrorListener = function(errors) {
  antlr4.error.ErrorListener.call(this);
  this.errors = errors;
  return this;
};

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function(rec, sym, line, col, msg, e) {
  this.errors.push([rec, sym, line, col, msg, e]);
};

var parse = function(path){
  var chars = new antlr4.InputStream(path);
  var lexer = new Lexer(chars);

  var tokens  = new antlr4.CommonTokenStream(lexer);


  var parser = new Parser(tokens);
  parser.buildParseTrees = true;
  var errors = [];
  var listener = new ErrorListener(errors);

  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);

  var tree = parser.prog();

  function PathListener() {
    Listener.call(this); // inherit default listener
    return this;
  }
  // inherit default listener
  PathListener.prototype = Object.create(Listener.prototype);
  PathListener.prototype.constructor = PathListener;

  var ast = {};
  var node;
  var parentStack = [ast];
  for (let p of Object.keys(Listener.prototype)) {
    if (p.startsWith("enter")) {
      PathListener.prototype[p] = function(ctx) {
        let parentNode = parentStack[parentStack.length - 1];
        let nodeType = p.slice(5); // remove "enter"
        node = {type: nodeType};
        node.text = ctx.getText();
        if (!parentNode.children)
          parentNode.children = [];
        parentNode.children.push(node);
        parentStack.push(node);
        // Also collect this node's terminal nodes, if any.  Terminal nodes are
        // not walked with the rest of the tree, but include things like "+" and
        // "-", which we need.
        node.terminalNodeText = [];
        for (let c of ctx.children) {
          // Test for node type "TerminalNodeImpl".  Minimized code no longer
          // has the original function names, so we can't rely on
          // c.constructor.name.  It appears the TerminalNodeImpl is the only
          // node with a "symbol" property, so test for that.
          if (c.symbol)
            node.terminalNodeText.push(c.getText());
        }
      };
    }
    else if (p.startsWith("exit")) {
      PathListener.prototype[p] = function() {
        parentStack.pop();
      };
    }
  }

  var printer = new PathListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

  if (errors.length > 0) {
    let errMsgs = [];
    for (let i=0, len=errors.length; i<len; ++i) {
      let err = errors[i];
      let msg = "line: "+err[2]+"; column: "+ err[3]+"; message: "+err[4];
      errMsgs.push(msg);
    }
    var e = new Error(errMsgs.join("\n"));
    e.errors = errors;
    throw e;
  }
  return ast;
};


module.exports = {
  parse: parse
};



var prog =    `
map "http://hl7.org/fhir/StructureMap/Patient3to4" = "R3 to R4 Conversions for Patient"

// uses "http://hl7.org/fhir/3.0/StructureDefinition/Patient" alias PatientR3 as source
// uses "http://hl7.org/fhir/StructureDefinition/Patient" alias Patient as target

// imports "http://hl7.org/fhir/StructureMap/*3to4"

group Patient(source src : PatientR3, target tgt : Patient) extends DomainResource <<type+>> {
  src.identifier -> tgt.identifier;
  src.active -> tgt.active;
  src.name -> tgt.name;
  src.telecom -> tgt.telecom;
  src.gender -> tgt.gender;
  src.birthDate -> tgt.birthDate;
  src.deceased : boolean as vs -> tgt.deceased = create('boolean') as vt then boolean(vs, vt);
  src.deceased : dateTime as vs -> tgt.deceased = create('dateTime') as vt then dateTime(vs, vt);
  src.address -> tgt.address;
  src.maritalStatus -> tgt.maritalStatus;
  src.multipleBirth : boolean as vs -> tgt.multipleBirth = create('boolean') as vt then boolean(vs, vt);
  src.multipleBirth : integer as vs -> tgt.multipleBirth = create('integer') as vt then integer(vs, vt);
  src.photo -> tgt.photo;
  src.contact as vs0 -> tgt.contact as vt0 then contact(vs0, vt0);
  src.animal as vs0 -> tgt.extension as vt0 then animal(vs0, vt0);
  src.communication as vs0 -> tgt.communication as vt0 then communication(vs0, vt0);
  src.generalPractitioner -> tgt.generalPractitioner;
  src.managingOrganization -> tgt.managingOrganization;
  src.link as vs0 -> tgt.link as vt0 then link(vs0, vt0);
}

group contact(source src, target tgt) extends BackboneElement {
  src.relationship -> tgt.relationship;
  src.name -> tgt.name;
  src.telecom -> tgt.telecom;
  src.address -> tgt.address;
  src.gender -> tgt.gender;
  src.organization -> tgt.organization;
  src.period -> tgt.period;
}

// group animal(source src, target tgt) extends Element {
//   src -> tgt.url = 'http://hl7.org/fhir/StructureDefinition/patient-animal' "animal";
//   src.species as vs ->  tgt.extension as ext,  ext.url = 'species',  ext.value = vs;
//   src.breed as vs ->  tgt.extension as ext,  ext.url = 'breed',  ext.value = vs;
//   src.genderStatus as vs ->  tgt.extension as ext,  ext.url = 'genderStatus',  ext.value = vs;
// }

// group communication(source src, target tgt) extends BackboneElement {
//   src.language -> tgt.language;
//   src.preferred -> tgt.preferred;
// }

// group link(source src, target tgt) extends BackboneElement {
//   src.other -> tgt.other;
//   src.type -> tgt.type;
// }
`;

console.log(prog);
console.log(JSON.stringify(parse(prog), null, " "));
