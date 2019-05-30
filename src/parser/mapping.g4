/**
 * Define a grammar called FhirMapper
 */
grammar mapping;

import FHIRPath;

prog
    : mapId structure* imports* group+ EOF
    ;

mapId
	: 'map' url '=' identifier
	;

url
    : DELIMITEDIDENTIFIER
    ;

identifier
    : IDENTIFIER
    | DELIMITEDIDENTIFIER
    ;

structure
	: 'uses' url structureAlias? 'as'  modelMode
	;

structureAlias
    : 'alias' identifier
    ;

imports
	: 'imports' url
	;

group
	: 'group' identifier parameters mextends? typeMode? mrules
	;

mrules
    : '{' mrule+ '}'
    ;

typeMode
    : '<<' groupTypeMode '>>'
    ;

mextends
    : 'extends' identifier
    ;

parameters
    : '(' parameter (',' parameter)+ ')'
    ;

parameter
    : inputMode identifier type?
	;

type
    : ':' identifier
    ;

mrule
 	: mruleSources ('->' mruleTargets)? dependent? mruleName? ';'
 	;

mruleName
    : DELIMITEDIDENTIFIER
    ;

mruleSources
    : mruleSource (',' mruleSource)*
    ;

mruleSource
    :  mruleContext sourceType? sourceDefault? sourceListMode? alias? whereClause? checkClause? log?
    ;

mruleTargets
    : mruleTarget (',' mruleTarget)*
    ;

sourceType
    : ':' identifier (INTEGER '..' upperBound)?
    ;

upperBound
    : INTEGER
    | '*'
    ;

mruleContext
	: identifier ('.' identifier)?
	;

sourceDefault
    : 'default' fhirPath
    ;

alias
	: 'as' identifier
	;

whereClause
    : 'where' fhirPath
    ;

checkClause
    : 'check' fhirPath
    ;

log
    : 'log' fhirPath
    ;

dependent
    : 'then' (invocation | mrules)
    ;

mruleTarget
    : mruleContext ('=' transform)? alias? targetListMode?
    | invocation alias?     // alias is not required when simply invoking a group
    ;

transform
    : literal           // trivial constant transform
    | mruleContext       // 'copy' transform
    | invocation        // other named transforms
    ;

invocation
    : identifier '(' paramList? ')'
    ;

paramList
    : param (',' param)*
    ;

param
    : literal
    | identifier
    ;

fhirPath
    : expression
    ;

literal
    : INTEGER
    | NUMBER
    | STRING
    | DATETIME
    | TIME
    | BOOL
    ;

groupTypeMode
    : 'types' | 'type+'
    ;

sourceListMode
    : 'first' | 'not_first' | 'last' | 'not_last' | 'only_one'
    ;

targetListMode
   : 'first' | 'share' | 'last' | 'collate'
   ;

inputMode
   : 'source' | 'target'
   ;

modelMode           // StructureMapModelMode binding
    : 'source' | 'queried' | 'target' | 'produced'
    ;



    /*
     * Syntax for embedded ConceptMaps excluded for now
     *
    conceptMap
        : 'conceptMap' '"#'	IDENTIFIER '{' (prefix)+ conceptMapping '}'
        ;

    prefix
    	: 'prefix' conceptMappingVar '=' URL
    	;

    conceptMappingVar
    	:  IDENTIFIER
    	;
    conceptMapping
    	:  conceptMappingVar ':' field
    	   (('<=' | '=' | '==' | '!=' '>=' '>-' | '<-' | '~') conceptMappingVar ':' field) | '--'
    	;
    */

/****************************************************************
    Lexical mrules from FhirPath
*****************************************************************/

// BOOL
//         : 'true'
//         | 'false'
//         ;

// DATETIME
//         : '@'
//             [0-9][0-9][0-9][0-9] // year
//             (
//                 '-'[0-9][0-9] // month
//                 (
//                     '-'[0-9][0-9] // day
//                     (
//                         'T' TIMEFORMAT
//                     )?
//                  )?
//              )?
//              'Z'? // UTC specifier
//         ;

// TIME
//         : '@' 'T' TIMEFORMAT
//         ;

// fragment TIMEFORMAT
//         :
//             [0-9][0-9] (':'[0-9][0-9] (':'[0-9][0-9] ('.'[0-9]+)?)?)?
//             ('Z' | ('+' | '-') [0-9][0-9]':'[0-9][0-9])? // timezone
//         ;

// IDENTIFIER
//         : ([A-Za-z] | '_')([A-Za-z0-9] | '_')*            // Added _ to support CQL (FHIR could constrain it out)
//         ;

DELIMITEDIDENTIFIER
        : '"' (ESC | .)*? '"'
        | '`' (ESC | .)*? '`'
        ;

// STRING
//         : '\'' (ESC | .)*? '\''
//         ;

// INTEGER
//     : [0-9]+
//     ;

// // Also allows leading zeroes now (just like CQL and XSD)
// NUMBER
//     : INTEGER ('.' [0-9]+)?
//     ;

// Pipe whitespace to the HIDDEN channel to support retrieving source text through the parser.
// WS
//     : [ \r\n\t]+ -> channel(HIDDEN)
//     ;

// COMMENT
//         : '/*' .*? '*/' -> channel(HIDDEN)
//         ;

// LINE_COMMENT
//         : '//' ~[\r\n]* -> channel(HIDDEN)
//         ;

// fragment ESC
//         : '\\' (["'\\/fnrt] | UNICODE)    // allow \", \', \\, \/, \f, etc. and \uXXX
//         ;

// fragment UNICODE
//         : 'u' HEX HEX HEX HEX
//         ;

// fragment HEX
//         : [0-9a-fA-F]
//         ;
