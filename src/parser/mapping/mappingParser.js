// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mappingListener = require('./mappingListener').mappingListener;
var grammarFileName = "mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003]\u01a7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u0003\u0002\u0003\u0002\u0007\u0002i\n\u0002\f\u0002\u000e\u0002",
    "l\u000b\u0002\u0003\u0002\u0007\u0002o\n\u0002\f\u0002\u000e\u0002r",
    "\u000b\u0002\u0003\u0002\u0006\u0002u\n\u0002\r\u0002\u000e\u0002v\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u0087\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0096\n\t\u0003\t\u0005\t",
    "\u0099\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0006\n\u009f\n\n\r\n\u000e",
    "\n\u00a0\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u00b0",
    "\n\r\r\r\u000e\r\u00b1\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00b9\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00c1\n\u0010\u0003",
    "\u0010\u0005\u0010\u00c4\n\u0010\u0003\u0010\u0005\u0010\u00c7\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00d0\n\u0012\f\u0012\u000e\u0012\u00d3\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u00d7\n\u0013\u0003\u0013",
    "\u0005\u0013\u00da\n\u0013\u0003\u0013\u0005\u0013\u00dd\n\u0013\u0003",
    "\u0013\u0005\u0013\u00e0\n\u0013\u0003\u0013\u0005\u0013\u00e3\n\u0013",
    "\u0003\u0013\u0005\u0013\u00e6\n\u0013\u0003\u0013\u0005\u0013\u00e9",
    "\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ee\n\u0014",
    "\f\u0014\u000e\u0014\u00f1\u000b\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f8\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00ff\n",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u0113\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0005\u001e\u0118\n\u001e\u0003\u001e\u0005\u001e\u011b\n\u001e\u0003",
    "\u001e\u0005\u001e\u011e\n\u001e\u0003\u001e\u0003\u001e\u0005\u001e",
    "\u0122\n\u001e\u0005\u001e\u0124\n\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0129\n\u001f\u0003 \u0003 \u0003 \u0005 \u012e\n",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0007!\u0135\n!\f!\u000e!\u0138",
    "\u000b!\u0003\"\u0003\"\u0005\"\u013c\n\"\u0003#\u0003#\u0003$\u0003",
    "$\u0003%\u0003%\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003",
    ")\u0003*\u0003*\u0003*\u0003*\u0005*\u0150\n*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0003*\u0003*\u0003*\u0003*\u0007*\u0178\n*\f*\u000e*\u017b\u000b",
    "*\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0003+\u0005+\u0184\n+\u0003",
    ",\u0003,\u0003,\u0003-\u0003-\u0003-\u0005-\u018c\n-\u0003-\u0003-\u0003",
    ".\u0003.\u0005.\u0192\n.\u0003/\u0003/\u0003/\u0005/\u0197\n/\u0003",
    "0\u00030\u00031\u00031\u00032\u00032\u00033\u00033\u00033\u00073\u01a2",
    "\n3\f3\u000e3\u01a5\u000b3\u00033\u0002\u0003R4\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "02468:<>@BDFHJLNPRTVXZ\\^`bd\u0002\u0014\u0004\u0002RRUU\u0004\u0002",
    "\u0016\u0016\\\\\u0005\u0002STWX\\]\u0003\u0002\u001d\u001e\u0003\u0002",
    "\u001f#\u0005\u0002\u001f\u001f!!$%\u0003\u0002&\'\u0003\u0002&)\u0003",
    "\u0002,-\u0004\u0002\u0016\u0016.0\u0004\u0002,-11\u0003\u000236\u0004",
    "\u0002\u0004\u00048:\u0003\u0002;<\u0003\u0002>?\u0004\u0002\u0006\u0006",
    "77\u0003\u0002BI\u0003\u0002JQ\u0002\u01ab\u0002f\u0003\u0002\u0002",
    "\u0002\u0004z\u0003\u0002\u0002\u0002\u0006\u007f\u0003\u0002\u0002",
    "\u0002\b\u0081\u0003\u0002\u0002\u0002\n\u0083\u0003\u0002\u0002\u0002",
    "\f\u008b\u0003\u0002\u0002\u0002\u000e\u008e\u0003\u0002\u0002\u0002",
    "\u0010\u0091\u0003\u0002\u0002\u0002\u0012\u009c\u0003\u0002\u0002\u0002",
    "\u0014\u00a4\u0003\u0002\u0002\u0002\u0016\u00a8\u0003\u0002\u0002\u0002",
    "\u0018\u00ab\u0003\u0002\u0002\u0002\u001a\u00b5\u0003\u0002\u0002\u0002",
    "\u001c\u00ba\u0003\u0002\u0002\u0002\u001e\u00bd\u0003\u0002\u0002\u0002",
    " \u00ca\u0003\u0002\u0002\u0002\"\u00cc\u0003\u0002\u0002\u0002$\u00d4",
    "\u0003\u0002\u0002\u0002&\u00ea\u0003\u0002\u0002\u0002(\u00f2\u0003",
    "\u0002\u0002\u0002*\u00f9\u0003\u0002\u0002\u0002,\u00fb\u0003\u0002",
    "\u0002\u0002.\u0100\u0003\u0002\u0002\u00020\u0103\u0003\u0002\u0002",
    "\u00022\u0106\u0003\u0002\u0002\u00024\u0109\u0003\u0002\u0002\u0002",
    "6\u010c\u0003\u0002\u0002\u00028\u010f\u0003\u0002\u0002\u0002:\u0123",
    "\u0003\u0002\u0002\u0002<\u0128\u0003\u0002\u0002\u0002>\u012a\u0003",
    "\u0002\u0002\u0002@\u0131\u0003\u0002\u0002\u0002B\u013b\u0003\u0002",
    "\u0002\u0002D\u013d\u0003\u0002\u0002\u0002F\u013f\u0003\u0002\u0002",
    "\u0002H\u0141\u0003\u0002\u0002\u0002J\u0143\u0003\u0002\u0002\u0002",
    "L\u0145\u0003\u0002\u0002\u0002N\u0147\u0003\u0002\u0002\u0002P\u0149",
    "\u0003\u0002\u0002\u0002R\u014f\u0003\u0002\u0002\u0002T\u0183\u0003",
    "\u0002\u0002\u0002V\u0185\u0003\u0002\u0002\u0002X\u0188\u0003\u0002",
    "\u0002\u0002Z\u018f\u0003\u0002\u0002\u0002\\\u0196\u0003\u0002\u0002",
    "\u0002^\u0198\u0003\u0002\u0002\u0002`\u019a\u0003\u0002\u0002\u0002",
    "b\u019c\u0003\u0002\u0002\u0002d\u019e\u0003\u0002\u0002\u0002fj\u0005",
    "\u0004\u0003\u0002gi\u0005\n\u0006\u0002hg\u0003\u0002\u0002\u0002i",
    "l\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002kp\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002mo\u0005\u000e",
    "\b\u0002nm\u0003\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003",
    "\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002qt\u0003\u0002\u0002\u0002",
    "rp\u0003\u0002\u0002\u0002su\u0005\u0010\t\u0002ts\u0003\u0002\u0002",
    "\u0002uv\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0007\u0002\u0002\u0003y\u0003",
    "\u0003\u0002\u0002\u0002z{\u0007\u0003\u0002\u0002{|\u0005\u0006\u0004",
    "\u0002|}\u0007\u0004\u0002\u0002}~\u0005\b\u0005\u0002~\u0005\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007R\u0002\u0002\u0080\u0007\u0003",
    "\u0002\u0002\u0002\u0081\u0082\t\u0002\u0002\u0002\u0082\t\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0007\u0005\u0002\u0002\u0084\u0086\u0005\u0006",
    "\u0004\u0002\u0085\u0087\u0005\f\u0007\u0002\u0086\u0085\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002",
    "\u0002\u0002\u0088\u0089\u0007\u0006\u0002\u0002\u0089\u008a\u0005P",
    ")\u0002\u008a\u000b\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0007",
    "\u0002\u0002\u008c\u008d\u0005\b\u0005\u0002\u008d\r\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0007\b\u0002\u0002\u008f\u0090\u0005\u0006\u0004",
    "\u0002\u0090\u000f\u0003\u0002\u0002\u0002\u0091\u0092\u0007\t\u0002",
    "\u0002\u0092\u0093\u0005\b\u0005\u0002\u0093\u0095\u0005\u0018\r\u0002",
    "\u0094\u0096\u0005\u0016\f\u0002\u0095\u0094\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0003\u0002\u0002\u0002\u0096\u0098\u0003\u0002\u0002\u0002",
    "\u0097\u0099\u0005\u0014\u000b\u0002\u0098\u0097\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0005\u0012\n\u0002\u009b\u0011\u0003\u0002\u0002\u0002",
    "\u009c\u009e\u0007\n\u0002\u0002\u009d\u009f\u0005\u001e\u0010\u0002",
    "\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
    "\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\u000b\u0002\u0002",
    "\u00a3\u0013\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\f\u0002\u0002",
    "\u00a5\u00a6\u0005H%\u0002\u00a6\u00a7\u0007\r\u0002\u0002\u00a7\u0015",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u000e\u0002\u0002\u00a9\u00aa",
    "\u0005\b\u0005\u0002\u00aa\u0017\u0003\u0002\u0002\u0002\u00ab\u00ac",
    "\u0007\u000f\u0002\u0002\u00ac\u00af\u0005\u001a\u000e\u0002\u00ad\u00ae",
    "\u0007\u0010\u0002\u0002\u00ae\u00b0\u0005\u001a\u000e\u0002\u00af\u00ad",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00af",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007\u0011\u0002\u0002\u00b4\u0019",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0005N(\u0002\u00b6\u00b8\u0005",
    "\b\u0005\u0002\u00b7\u00b9\u0005\u001c\u000f\u0002\u00b8\u00b7\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u001b\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u0007\u0012\u0002\u0002\u00bb\u00bc\u0005",
    "\b\u0005\u0002\u00bc\u001d\u0003\u0002\u0002\u0002\u00bd\u00c0\u0005",
    "\"\u0012\u0002\u00be\u00bf\u0007\u0013\u0002\u0002\u00bf\u00c1\u0005",
    "&\u0014\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003",
    "\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00c4\u0005",
    "8\u001d\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003",
    "\u0002\u0002\u0002\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c7\u0005",
    " \u0011\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003",
    "\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u00c9\u0007",
    "\u0014\u0002\u0002\u00c9\u001f\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007",
    "R\u0002\u0002\u00cb!\u0003\u0002\u0002\u0002\u00cc\u00d1\u0005$\u0013",
    "\u0002\u00cd\u00ce\u0007\u0010\u0002\u0002\u00ce\u00d0\u0005$\u0013",
    "\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002",
    "\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002",
    "\u0002\u00d2#\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d4\u00d6\u0005,\u0017\u0002\u00d5\u00d7\u0005(\u0015\u0002",
    "\u00d6\u00d5\u0003\u0002\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002",
    "\u00d7\u00d9\u0003\u0002\u0002\u0002\u00d8\u00da\u0005.\u0018\u0002",
    "\u00d9\u00d8\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002",
    "\u00da\u00dc\u0003\u0002\u0002\u0002\u00db\u00dd\u0005J&\u0002\u00dc",
    "\u00db\u0003\u0002\u0002\u0002\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd",
    "\u00df\u0003\u0002\u0002\u0002\u00de\u00e0\u00050\u0019\u0002\u00df",
    "\u00de\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0",
    "\u00e2\u0003\u0002\u0002\u0002\u00e1\u00e3\u00052\u001a\u0002\u00e2",
    "\u00e1\u0003\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3",
    "\u00e5\u0003\u0002\u0002\u0002\u00e4\u00e6\u00054\u001b\u0002\u00e5",
    "\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6",
    "\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e9\u00056\u001c\u0002\u00e8",
    "\u00e7\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9",
    "%\u0003\u0002\u0002\u0002\u00ea\u00ef\u0005:\u001e\u0002\u00eb\u00ec",
    "\u0007\u0010\u0002\u0002\u00ec\u00ee\u0005:\u001e\u0002\u00ed\u00eb",
    "\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002\u0002\u00ef\u00ed",
    "\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002\u00f0\'",
    "\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f2\u00f3",
    "\u0007\u0012\u0002\u0002\u00f3\u00f7\u0005\b\u0005\u0002\u00f4\u00f5",
    "\u0007\\\u0002\u0002\u00f5\u00f6\u0007\u0015\u0002\u0002\u00f6\u00f8",
    "\u0005*\u0016\u0002\u00f7\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f8",
    "\u0003\u0002\u0002\u0002\u00f8)\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\t\u0003\u0002\u0002\u00fa+\u0003\u0002\u0002\u0002\u00fb\u00fe\u0005",
    "\b\u0005\u0002\u00fc\u00fd\u0007\u0017\u0002\u0002\u00fd\u00ff\u0005",
    "\b\u0005\u0002\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00ff\u0003",
    "\u0002\u0002\u0002\u00ff-\u0003\u0002\u0002\u0002\u0100\u0101\u0007",
    "\u0018\u0002\u0002\u0101\u0102\u0005D#\u0002\u0102/\u0003\u0002\u0002",
    "\u0002\u0103\u0104\u0007\u0006\u0002\u0002\u0104\u0105\u0005\b\u0005",
    "\u0002\u01051\u0003\u0002\u0002\u0002\u0106\u0107\u0007\u0019\u0002",
    "\u0002\u0107\u0108\u0005D#\u0002\u01083\u0003\u0002\u0002\u0002\u0109",
    "\u010a\u0007\u001a\u0002\u0002\u010a\u010b\u0005D#\u0002\u010b5\u0003",
    "\u0002\u0002\u0002\u010c\u010d\u0007\u001b\u0002\u0002\u010d\u010e\u0005",
    "D#\u0002\u010e7\u0003\u0002\u0002\u0002\u010f\u0112\u0007\u001c\u0002",
    "\u0002\u0110\u0113\u0005> \u0002\u0111\u0113\u0005\u0012\n\u0002\u0112",
    "\u0110\u0003\u0002\u0002\u0002\u0112\u0111\u0003\u0002\u0002\u0002\u0113",
    "9\u0003\u0002\u0002\u0002\u0114\u0117\u0005,\u0017\u0002\u0115\u0116",
    "\u0007\u0004\u0002\u0002\u0116\u0118\u0005<\u001f\u0002\u0117\u0115",
    "\u0003\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u011a",
    "\u0003\u0002\u0002\u0002\u0119\u011b\u00050\u0019\u0002\u011a\u0119",
    "\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u011d",
    "\u0003\u0002\u0002\u0002\u011c\u011e\u0005L\'\u0002\u011d\u011c\u0003",
    "\u0002\u0002\u0002\u011d\u011e\u0003\u0002\u0002\u0002\u011e\u0124\u0003",
    "\u0002\u0002\u0002\u011f\u0121\u0005> \u0002\u0120\u0122\u00050\u0019",
    "\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0121\u0122\u0003\u0002\u0002",
    "\u0002\u0122\u0124\u0003\u0002\u0002\u0002\u0123\u0114\u0003\u0002\u0002",
    "\u0002\u0123\u011f\u0003\u0002\u0002\u0002\u0124;\u0003\u0002\u0002",
    "\u0002\u0125\u0129\u0005F$\u0002\u0126\u0129\u0005,\u0017\u0002\u0127",
    "\u0129\u0005> \u0002\u0128\u0125\u0003\u0002\u0002\u0002\u0128\u0126",
    "\u0003\u0002\u0002\u0002\u0128\u0127\u0003\u0002\u0002\u0002\u0129=",
    "\u0003\u0002\u0002\u0002\u012a\u012b\u0005\b\u0005\u0002\u012b\u012d",
    "\u0007\u000f\u0002\u0002\u012c\u012e\u0005@!\u0002\u012d\u012c\u0003",
    "\u0002\u0002\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u0007\u0011\u0002\u0002\u0130?\u0003",
    "\u0002\u0002\u0002\u0131\u0136\u0005B\"\u0002\u0132\u0133\u0007\u0010",
    "\u0002\u0002\u0133\u0135\u0005B\"\u0002\u0134\u0132\u0003\u0002\u0002",
    "\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002",
    "\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137A\u0003\u0002\u0002",
    "\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013c\u0005F$\u0002",
    "\u013a\u013c\u0005\b\u0005\u0002\u013b\u0139\u0003\u0002\u0002\u0002",
    "\u013b\u013a\u0003\u0002\u0002\u0002\u013cC\u0003\u0002\u0002\u0002",
    "\u013d\u013e\u0005R*\u0002\u013eE\u0003\u0002\u0002\u0002\u013f\u0140",
    "\t\u0004\u0002\u0002\u0140G\u0003\u0002\u0002\u0002\u0141\u0142\t\u0005",
    "\u0002\u0002\u0142I\u0003\u0002\u0002\u0002\u0143\u0144\t\u0006\u0002",
    "\u0002\u0144K\u0003\u0002\u0002\u0002\u0145\u0146\t\u0007\u0002\u0002",
    "\u0146M\u0003\u0002\u0002\u0002\u0147\u0148\t\b\u0002\u0002\u0148O\u0003",
    "\u0002\u0002\u0002\u0149\u014a\t\t\u0002\u0002\u014aQ\u0003\u0002\u0002",
    "\u0002\u014b\u014c\b*\u0001\u0002\u014c\u0150\u0005T+\u0002\u014d\u014e",
    "\t\n\u0002\u0002\u014e\u0150\u0005R*\r\u014f\u014b\u0003\u0002\u0002",
    "\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0179\u0003\u0002\u0002",
    "\u0002\u0151\u0152\f\f\u0002\u0002\u0152\u0153\t\u000b\u0002\u0002\u0153",
    "\u0178\u0005R*\r\u0154\u0155\f\u000b\u0002\u0002\u0155\u0156\t\f\u0002",
    "\u0002\u0156\u0178\u0005R*\f\u0157\u0158\f\n\u0002\u0002\u0158\u0159",
    "\u00072\u0002\u0002\u0159\u0178\u0005R*\u000b\u015a\u015b\f\t\u0002",
    "\u0002\u015b\u015c\t\r\u0002\u0002\u015c\u0178\u0005R*\n\u015d\u015e",
    "\f\u0007\u0002\u0002\u015e\u015f\t\u000e\u0002\u0002\u015f\u0178\u0005",
    "R*\b\u0160\u0161\f\u0006\u0002\u0002\u0161\u0162\t\u000f\u0002\u0002",
    "\u0162\u0178\u0005R*\u0007\u0163\u0164\f\u0005\u0002\u0002\u0164\u0165",
    "\u0007=\u0002\u0002\u0165\u0178\u0005R*\u0006\u0166\u0167\f\u0004\u0002",
    "\u0002\u0167\u0168\t\u0010\u0002\u0002\u0168\u0178\u0005R*\u0005\u0169",
    "\u016a\f\u0003\u0002\u0002\u016a\u016b\u0007@\u0002\u0002\u016b\u0178",
    "\u0005R*\u0004\u016c\u016d\f\u000f\u0002\u0002\u016d\u016e\u0007\u0017",
    "\u0002\u0002\u016e\u0178\u0005> \u0002\u016f\u0170\f\u000e\u0002\u0002",
    "\u0170\u0171\u0007*\u0002\u0002\u0171\u0172\u0005R*\u0002\u0172\u0173",
    "\u0007+\u0002\u0002\u0173\u0178\u0003\u0002\u0002\u0002\u0174\u0175",
    "\f\b\u0002\u0002\u0175\u0176\t\u0011\u0002\u0002\u0176\u0178\u0005b",
    "2\u0002\u0177\u0151\u0003\u0002\u0002\u0002\u0177\u0154\u0003\u0002",
    "\u0002\u0002\u0177\u0157\u0003\u0002\u0002\u0002\u0177\u015a\u0003\u0002",
    "\u0002\u0002\u0177\u015d\u0003\u0002\u0002\u0002\u0177\u0160\u0003\u0002",
    "\u0002\u0002\u0177\u0163\u0003\u0002\u0002\u0002\u0177\u0166\u0003\u0002",
    "\u0002\u0002\u0177\u0169\u0003\u0002\u0002\u0002\u0177\u016c\u0003\u0002",
    "\u0002\u0002\u0177\u016f\u0003\u0002\u0002\u0002\u0177\u0174\u0003\u0002",
    "\u0002\u0002\u0178\u017b\u0003\u0002\u0002\u0002\u0179\u0177\u0003\u0002",
    "\u0002\u0002\u0179\u017a\u0003\u0002\u0002\u0002\u017aS\u0003\u0002",
    "\u0002\u0002\u017b\u0179\u0003\u0002\u0002\u0002\u017c\u0184\u0005>",
    " \u0002\u017d\u0184\u0005F$\u0002\u017e\u0184\u0005V,\u0002\u017f\u0180",
    "\u0007\u000f\u0002\u0002\u0180\u0181\u0005R*\u0002\u0181\u0182\u0007",
    "\u0011\u0002\u0002\u0182\u0184\u0003\u0002\u0002\u0002\u0183\u017c\u0003",
    "\u0002\u0002\u0002\u0183\u017d\u0003\u0002\u0002\u0002\u0183\u017e\u0003",
    "\u0002\u0002\u0002\u0183\u017f\u0003\u0002\u0002\u0002\u0184U\u0003",
    "\u0002\u0002\u0002\u0185\u0186\u0007A\u0002\u0002\u0186\u0187\u0005",
    "\b\u0005\u0002\u0187W\u0003\u0002\u0002\u0002\u0188\u0189\u0005\b\u0005",
    "\u0002\u0189\u018b\u0007\u000f\u0002\u0002\u018a\u018c\u0005@!\u0002",
    "\u018b\u018a\u0003\u0002\u0002\u0002\u018b\u018c\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018e\u0007\u0011\u0002\u0002",
    "\u018eY\u0003\u0002\u0002\u0002\u018f\u0191\u0007X\u0002\u0002\u0190",
    "\u0192\u0005\\/\u0002\u0191\u0190\u0003\u0002\u0002\u0002\u0191\u0192",
    "\u0003\u0002\u0002\u0002\u0192[\u0003\u0002\u0002\u0002\u0193\u0197",
    "\u0005^0\u0002\u0194\u0197\u0005`1\u0002\u0195\u0197\u0007W\u0002\u0002",
    "\u0196\u0193\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002",
    "\u0196\u0195\u0003\u0002\u0002\u0002\u0197]\u0003\u0002\u0002\u0002",
    "\u0198\u0199\t\u0012\u0002\u0002\u0199_\u0003\u0002\u0002\u0002\u019a",
    "\u019b\t\u0013\u0002\u0002\u019ba\u0003\u0002\u0002\u0002\u019c\u019d",
    "\u0005d3\u0002\u019dc\u0003\u0002\u0002\u0002\u019e\u01a3\u0005\b\u0005",
    "\u0002\u019f\u01a0\u0007\u0017\u0002\u0002\u01a0\u01a2\u0005\b\u0005",
    "\u0002\u01a1\u019f\u0003\u0002\u0002\u0002\u01a2\u01a5\u0003\u0002\u0002",
    "\u0002\u01a3\u01a1\u0003\u0002\u0002\u0002\u01a3\u01a4\u0003\u0002\u0002",
    "\u0002\u01a4e\u0003\u0002\u0002\u0002\u01a5\u01a3\u0003\u0002\u0002",
    "\u0002+jpv\u0086\u0095\u0098\u00a0\u00b1\u00b8\u00c0\u00c3\u00c6\u00d1",
    "\u00d6\u00d9\u00dc\u00df\u00e2\u00e5\u00e8\u00ef\u00f7\u00fe\u0112\u0117",
    "\u011a\u011d\u0121\u0123\u0128\u012d\u0136\u013b\u014f\u0177\u0179\u0183",
    "\u018b\u0191\u0196\u01a3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'map'", "'='", "'uses'", "'as'", "'alias'", 
                     "'imports'", "'group'", "'{'", "'}'", "'<<'", "'>>'", 
                     "'extends'", "'('", "','", "')'", "':'", "'->'", "';'", 
                     "'..'", "'*'", "'.'", "'default'", "'where'", "'check'", 
                     "'log'", "'then'", "'types'", "'type+'", "'first'", 
                     "'not_first'", "'last'", "'not_last'", "'only_one'", 
                     "'share'", "'collate'", "'source'", "'target'", "'queried'", 
                     "'produced'", "'['", "']'", "'+'", "'-'", "'/'", "'div'", 
                     "'mod'", "'&'", "'|'", "'<='", "'<'", "'>'", "'>='", 
                     "'is'", "'~'", "'!='", "'!~'", "'in'", "'contains'", 
                     "'and'", "'or'", "'xor'", "'implies'", "'%'", "'year'", 
                     "'month'", "'week'", "'day'", "'hour'", "'minute'", 
                     "'second'", "'millisecond'", "'years'", "'months'", 
                     "'weeks'", "'days'", "'hours'", "'minutes'", "'seconds'", 
                     "'milliseconds'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "DELIMITEDIDENTIFIER", 
                      "DATETIME", "TIME", "IDENTIFIER", "QUOTEDIDENTIFIER", 
                      "STRING", "NUMBER", "WS", "COMMENT", "LINE_COMMENT", 
                      "INTEGER", "BOOL" ];

var ruleNames =  [ "prog", "mapId", "url", "identifier", "structure", "structureAlias", 
                   "imports", "group", "mrules", "typeMode", "mextends", 
                   "parameters", "parameter", "type", "mrule", "mruleName", 
                   "mruleSources", "mruleSource", "mruleTargets", "sourceType", 
                   "upperBound", "mruleContext", "sourceDefault", "alias", 
                   "whereClause", "checkClause", "log", "dependent", "mruleTarget", 
                   "transform", "invocation", "paramList", "param", "fhirPath", 
                   "literal", "groupTypeMode", "sourceListMode", "targetListMode", 
                   "inputMode", "modelMode", "expression", "term", "externalConstant", 
                   "functn", "quantity", "unit", "dateTimePrecision", "pluralDateTimePrecision", 
                   "typeSpecifier", "qualifiedIdentifier" ];

function mappingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

mappingParser.prototype = Object.create(antlr4.Parser.prototype);
mappingParser.prototype.constructor = mappingParser;

Object.defineProperty(mappingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

mappingParser.EOF = antlr4.Token.EOF;
mappingParser.T__0 = 1;
mappingParser.T__1 = 2;
mappingParser.T__2 = 3;
mappingParser.T__3 = 4;
mappingParser.T__4 = 5;
mappingParser.T__5 = 6;
mappingParser.T__6 = 7;
mappingParser.T__7 = 8;
mappingParser.T__8 = 9;
mappingParser.T__9 = 10;
mappingParser.T__10 = 11;
mappingParser.T__11 = 12;
mappingParser.T__12 = 13;
mappingParser.T__13 = 14;
mappingParser.T__14 = 15;
mappingParser.T__15 = 16;
mappingParser.T__16 = 17;
mappingParser.T__17 = 18;
mappingParser.T__18 = 19;
mappingParser.T__19 = 20;
mappingParser.T__20 = 21;
mappingParser.T__21 = 22;
mappingParser.T__22 = 23;
mappingParser.T__23 = 24;
mappingParser.T__24 = 25;
mappingParser.T__25 = 26;
mappingParser.T__26 = 27;
mappingParser.T__27 = 28;
mappingParser.T__28 = 29;
mappingParser.T__29 = 30;
mappingParser.T__30 = 31;
mappingParser.T__31 = 32;
mappingParser.T__32 = 33;
mappingParser.T__33 = 34;
mappingParser.T__34 = 35;
mappingParser.T__35 = 36;
mappingParser.T__36 = 37;
mappingParser.T__37 = 38;
mappingParser.T__38 = 39;
mappingParser.T__39 = 40;
mappingParser.T__40 = 41;
mappingParser.T__41 = 42;
mappingParser.T__42 = 43;
mappingParser.T__43 = 44;
mappingParser.T__44 = 45;
mappingParser.T__45 = 46;
mappingParser.T__46 = 47;
mappingParser.T__47 = 48;
mappingParser.T__48 = 49;
mappingParser.T__49 = 50;
mappingParser.T__50 = 51;
mappingParser.T__51 = 52;
mappingParser.T__52 = 53;
mappingParser.T__53 = 54;
mappingParser.T__54 = 55;
mappingParser.T__55 = 56;
mappingParser.T__56 = 57;
mappingParser.T__57 = 58;
mappingParser.T__58 = 59;
mappingParser.T__59 = 60;
mappingParser.T__60 = 61;
mappingParser.T__61 = 62;
mappingParser.T__62 = 63;
mappingParser.T__63 = 64;
mappingParser.T__64 = 65;
mappingParser.T__65 = 66;
mappingParser.T__66 = 67;
mappingParser.T__67 = 68;
mappingParser.T__68 = 69;
mappingParser.T__69 = 70;
mappingParser.T__70 = 71;
mappingParser.T__71 = 72;
mappingParser.T__72 = 73;
mappingParser.T__73 = 74;
mappingParser.T__74 = 75;
mappingParser.T__75 = 76;
mappingParser.T__76 = 77;
mappingParser.T__77 = 78;
mappingParser.T__78 = 79;
mappingParser.DELIMITEDIDENTIFIER = 80;
mappingParser.DATETIME = 81;
mappingParser.TIME = 82;
mappingParser.IDENTIFIER = 83;
mappingParser.QUOTEDIDENTIFIER = 84;
mappingParser.STRING = 85;
mappingParser.NUMBER = 86;
mappingParser.WS = 87;
mappingParser.COMMENT = 88;
mappingParser.LINE_COMMENT = 89;
mappingParser.INTEGER = 90;
mappingParser.BOOL = 91;

mappingParser.RULE_prog = 0;
mappingParser.RULE_mapId = 1;
mappingParser.RULE_url = 2;
mappingParser.RULE_identifier = 3;
mappingParser.RULE_structure = 4;
mappingParser.RULE_structureAlias = 5;
mappingParser.RULE_imports = 6;
mappingParser.RULE_group = 7;
mappingParser.RULE_mrules = 8;
mappingParser.RULE_typeMode = 9;
mappingParser.RULE_mextends = 10;
mappingParser.RULE_parameters = 11;
mappingParser.RULE_parameter = 12;
mappingParser.RULE_type = 13;
mappingParser.RULE_mrule = 14;
mappingParser.RULE_mruleName = 15;
mappingParser.RULE_mruleSources = 16;
mappingParser.RULE_mruleSource = 17;
mappingParser.RULE_mruleTargets = 18;
mappingParser.RULE_sourceType = 19;
mappingParser.RULE_upperBound = 20;
mappingParser.RULE_mruleContext = 21;
mappingParser.RULE_sourceDefault = 22;
mappingParser.RULE_alias = 23;
mappingParser.RULE_whereClause = 24;
mappingParser.RULE_checkClause = 25;
mappingParser.RULE_log = 26;
mappingParser.RULE_dependent = 27;
mappingParser.RULE_mruleTarget = 28;
mappingParser.RULE_transform = 29;
mappingParser.RULE_invocation = 30;
mappingParser.RULE_paramList = 31;
mappingParser.RULE_param = 32;
mappingParser.RULE_fhirPath = 33;
mappingParser.RULE_literal = 34;
mappingParser.RULE_groupTypeMode = 35;
mappingParser.RULE_sourceListMode = 36;
mappingParser.RULE_targetListMode = 37;
mappingParser.RULE_inputMode = 38;
mappingParser.RULE_modelMode = 39;
mappingParser.RULE_expression = 40;
mappingParser.RULE_term = 41;
mappingParser.RULE_externalConstant = 42;
mappingParser.RULE_functn = 43;
mappingParser.RULE_quantity = 44;
mappingParser.RULE_unit = 45;
mappingParser.RULE_dateTimePrecision = 46;
mappingParser.RULE_pluralDateTimePrecision = 47;
mappingParser.RULE_typeSpecifier = 48;
mappingParser.RULE_qualifiedIdentifier = 49;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.mapId = function() {
    return this.getTypedRuleContext(MapIdContext,0);
};

ProgContext.prototype.EOF = function() {
    return this.getToken(mappingParser.EOF, 0);
};

ProgContext.prototype.structure = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StructureContext);
    } else {
        return this.getTypedRuleContext(StructureContext,i);
    }
};

ProgContext.prototype.imports = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportsContext);
    } else {
        return this.getTypedRuleContext(ImportsContext,i);
    }
};

ProgContext.prototype.group = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupContext);
    } else {
        return this.getTypedRuleContext(GroupContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitProg(this);
	}
};




mappingParser.ProgContext = ProgContext;

mappingParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, mappingParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.mapId();
        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===mappingParser.T__2) {
            this.state = 101;
            this.structure();
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===mappingParser.T__5) {
            this.state = 107;
            this.imports();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 114; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 113;
            this.group();
            this.state = 116; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===mappingParser.T__6);
        this.state = 118;
        this.match(mappingParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MapIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mapId;
    return this;
}

MapIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MapIdContext.prototype.constructor = MapIdContext;

MapIdContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

MapIdContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MapIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMapId(this);
	}
};

MapIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMapId(this);
	}
};




mappingParser.MapIdContext = MapIdContext;

mappingParser.prototype.mapId = function() {

    var localctx = new MapIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, mappingParser.RULE_mapId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.match(mappingParser.T__0);
        this.state = 121;
        this.url();
        this.state = 122;
        this.match(mappingParser.T__1);
        this.state = 123;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(mappingParser.DELIMITEDIDENTIFIER, 0);
};

UrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUrl(this);
	}
};

UrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUrl(this);
	}
};




mappingParser.UrlContext = UrlContext;

mappingParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, mappingParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(mappingParser.DELIMITEDIDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(mappingParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(mappingParser.DELIMITEDIDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitIdentifier(this);
	}
};




mappingParser.IdentifierContext = IdentifierContext;

mappingParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, mappingParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.DELIMITEDIDENTIFIER || _la===mappingParser.IDENTIFIER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_structure;
    return this;
}

StructureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureContext.prototype.constructor = StructureContext;

StructureContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

StructureContext.prototype.modelMode = function() {
    return this.getTypedRuleContext(ModelModeContext,0);
};

StructureContext.prototype.structureAlias = function() {
    return this.getTypedRuleContext(StructureAliasContext,0);
};

StructureContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterStructure(this);
	}
};

StructureContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitStructure(this);
	}
};




mappingParser.StructureContext = StructureContext;

mappingParser.prototype.structure = function() {

    var localctx = new StructureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, mappingParser.RULE_structure);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(mappingParser.T__2);
        this.state = 130;
        this.url();
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__4) {
            this.state = 131;
            this.structureAlias();
        }

        this.state = 134;
        this.match(mappingParser.T__3);
        this.state = 135;
        this.modelMode();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StructureAliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_structureAlias;
    return this;
}

StructureAliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StructureAliasContext.prototype.constructor = StructureAliasContext;

StructureAliasContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

StructureAliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterStructureAlias(this);
	}
};

StructureAliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitStructureAlias(this);
	}
};




mappingParser.StructureAliasContext = StructureAliasContext;

mappingParser.prototype.structureAlias = function() {

    var localctx = new StructureAliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, mappingParser.RULE_structureAlias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(mappingParser.T__4);
        this.state = 138;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_imports;
    return this;
}

ImportsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportsContext.prototype.constructor = ImportsContext;

ImportsContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

ImportsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterImports(this);
	}
};

ImportsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitImports(this);
	}
};




mappingParser.ImportsContext = ImportsContext;

mappingParser.prototype.imports = function() {

    var localctx = new ImportsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, mappingParser.RULE_imports);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(mappingParser.T__5);
        this.state = 141;
        this.url();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

GroupContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

GroupContext.prototype.mrules = function() {
    return this.getTypedRuleContext(MrulesContext,0);
};

GroupContext.prototype.mextends = function() {
    return this.getTypedRuleContext(MextendsContext,0);
};

GroupContext.prototype.typeMode = function() {
    return this.getTypedRuleContext(TypeModeContext,0);
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitGroup(this);
	}
};




mappingParser.GroupContext = GroupContext;

mappingParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, mappingParser.RULE_group);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(mappingParser.T__6);
        this.state = 144;
        this.identifier();
        this.state = 145;
        this.parameters();
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__11) {
            this.state = 146;
            this.mextends();
        }

        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__9) {
            this.state = 149;
            this.typeMode();
        }

        this.state = 152;
        this.mrules();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MrulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mrules;
    return this;
}

MrulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MrulesContext.prototype.constructor = MrulesContext;

MrulesContext.prototype.mrule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MruleContext);
    } else {
        return this.getTypedRuleContext(MruleContext,i);
    }
};

MrulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMrules(this);
	}
};

MrulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMrules(this);
	}
};




mappingParser.MrulesContext = MrulesContext;

mappingParser.prototype.mrules = function() {

    var localctx = new MrulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, mappingParser.RULE_mrules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(mappingParser.T__7);
        this.state = 156; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 155;
            this.mrule();
            this.state = 158; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===mappingParser.DELIMITEDIDENTIFIER || _la===mappingParser.IDENTIFIER);
        this.state = 160;
        this.match(mappingParser.T__8);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_typeMode;
    return this;
}

TypeModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeModeContext.prototype.constructor = TypeModeContext;

TypeModeContext.prototype.groupTypeMode = function() {
    return this.getTypedRuleContext(GroupTypeModeContext,0);
};

TypeModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTypeMode(this);
	}
};

TypeModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTypeMode(this);
	}
};




mappingParser.TypeModeContext = TypeModeContext;

mappingParser.prototype.typeMode = function() {

    var localctx = new TypeModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, mappingParser.RULE_typeMode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(mappingParser.T__9);
        this.state = 163;
        this.groupTypeMode();
        this.state = 164;
        this.match(mappingParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MextendsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mextends;
    return this;
}

MextendsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MextendsContext.prototype.constructor = MextendsContext;

MextendsContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

MextendsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMextends(this);
	}
};

MextendsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMextends(this);
	}
};




mappingParser.MextendsContext = MextendsContext;

mappingParser.prototype.mextends = function() {

    var localctx = new MextendsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, mappingParser.RULE_mextends);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(mappingParser.T__11);
        this.state = 167;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.parameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParameterContext);
    } else {
        return this.getTypedRuleContext(ParameterContext,i);
    }
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitParameters(this);
	}
};




mappingParser.ParametersContext = ParametersContext;

mappingParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, mappingParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(mappingParser.T__12);
        this.state = 170;
        this.parameter();
        this.state = 173; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 171;
            this.match(mappingParser.T__13);
            this.state = 172;
            this.parameter();
            this.state = 175; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===mappingParser.T__13);
        this.state = 177;
        this.match(mappingParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_parameter;
    return this;
}

ParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterContext.prototype.constructor = ParameterContext;

ParameterContext.prototype.inputMode = function() {
    return this.getTypedRuleContext(InputModeContext,0);
};

ParameterContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParameterContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterParameter(this);
	}
};

ParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitParameter(this);
	}
};




mappingParser.ParameterContext = ParameterContext;

mappingParser.prototype.parameter = function() {

    var localctx = new ParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, mappingParser.RULE_parameter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.inputMode();
        this.state = 180;
        this.identifier();
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__15) {
            this.state = 181;
            this.type();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitType(this);
	}
};




mappingParser.TypeContext = TypeContext;

mappingParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, mappingParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(mappingParser.T__15);
        this.state = 185;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mrule;
    return this;
}

MruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleContext.prototype.constructor = MruleContext;

MruleContext.prototype.mruleSources = function() {
    return this.getTypedRuleContext(MruleSourcesContext,0);
};

MruleContext.prototype.mruleTargets = function() {
    return this.getTypedRuleContext(MruleTargetsContext,0);
};

MruleContext.prototype.dependent = function() {
    return this.getTypedRuleContext(DependentContext,0);
};

MruleContext.prototype.mruleName = function() {
    return this.getTypedRuleContext(MruleNameContext,0);
};

MruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMrule(this);
	}
};

MruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMrule(this);
	}
};




mappingParser.MruleContext = MruleContext;

mappingParser.prototype.mrule = function() {

    var localctx = new MruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, mappingParser.RULE_mrule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.mruleSources();
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__16) {
            this.state = 188;
            this.match(mappingParser.T__16);
            this.state = 189;
            this.mruleTargets();
        }

        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__25) {
            this.state = 192;
            this.dependent();
        }

        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.DELIMITEDIDENTIFIER) {
            this.state = 195;
            this.mruleName();
        }

        this.state = 198;
        this.match(mappingParser.T__17);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleName;
    return this;
}

MruleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleNameContext.prototype.constructor = MruleNameContext;

MruleNameContext.prototype.DELIMITEDIDENTIFIER = function() {
    return this.getToken(mappingParser.DELIMITEDIDENTIFIER, 0);
};

MruleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleName(this);
	}
};

MruleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleName(this);
	}
};




mappingParser.MruleNameContext = MruleNameContext;

mappingParser.prototype.mruleName = function() {

    var localctx = new MruleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, mappingParser.RULE_mruleName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(mappingParser.DELIMITEDIDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleSourcesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleSources;
    return this;
}

MruleSourcesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleSourcesContext.prototype.constructor = MruleSourcesContext;

MruleSourcesContext.prototype.mruleSource = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MruleSourceContext);
    } else {
        return this.getTypedRuleContext(MruleSourceContext,i);
    }
};

MruleSourcesContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleSources(this);
	}
};

MruleSourcesContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleSources(this);
	}
};




mappingParser.MruleSourcesContext = MruleSourcesContext;

mappingParser.prototype.mruleSources = function() {

    var localctx = new MruleSourcesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, mappingParser.RULE_mruleSources);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.mruleSource();
        this.state = 207;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===mappingParser.T__13) {
            this.state = 203;
            this.match(mappingParser.T__13);
            this.state = 204;
            this.mruleSource();
            this.state = 209;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleSourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleSource;
    return this;
}

MruleSourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleSourceContext.prototype.constructor = MruleSourceContext;

MruleSourceContext.prototype.mruleContext = function() {
    return this.getTypedRuleContext(MruleContextContext,0);
};

MruleSourceContext.prototype.sourceType = function() {
    return this.getTypedRuleContext(SourceTypeContext,0);
};

MruleSourceContext.prototype.sourceDefault = function() {
    return this.getTypedRuleContext(SourceDefaultContext,0);
};

MruleSourceContext.prototype.sourceListMode = function() {
    return this.getTypedRuleContext(SourceListModeContext,0);
};

MruleSourceContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

MruleSourceContext.prototype.whereClause = function() {
    return this.getTypedRuleContext(WhereClauseContext,0);
};

MruleSourceContext.prototype.checkClause = function() {
    return this.getTypedRuleContext(CheckClauseContext,0);
};

MruleSourceContext.prototype.log = function() {
    return this.getTypedRuleContext(LogContext,0);
};

MruleSourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleSource(this);
	}
};

MruleSourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleSource(this);
	}
};




mappingParser.MruleSourceContext = MruleSourceContext;

mappingParser.prototype.mruleSource = function() {

    var localctx = new MruleSourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, mappingParser.RULE_mruleSource);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.mruleContext();
        this.state = 212;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__15) {
            this.state = 211;
            this.sourceType();
        }

        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__21) {
            this.state = 214;
            this.sourceDefault();
        }

        this.state = 218;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (mappingParser.T__28 - 29)) | (1 << (mappingParser.T__29 - 29)) | (1 << (mappingParser.T__30 - 29)) | (1 << (mappingParser.T__31 - 29)) | (1 << (mappingParser.T__32 - 29)))) !== 0)) {
            this.state = 217;
            this.sourceListMode();
        }

        this.state = 221;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__3) {
            this.state = 220;
            this.alias();
        }

        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__22) {
            this.state = 223;
            this.whereClause();
        }

        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__23) {
            this.state = 226;
            this.checkClause();
        }

        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__24) {
            this.state = 229;
            this.log();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleTargetsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleTargets;
    return this;
}

MruleTargetsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleTargetsContext.prototype.constructor = MruleTargetsContext;

MruleTargetsContext.prototype.mruleTarget = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MruleTargetContext);
    } else {
        return this.getTypedRuleContext(MruleTargetContext,i);
    }
};

MruleTargetsContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleTargets(this);
	}
};

MruleTargetsContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleTargets(this);
	}
};




mappingParser.MruleTargetsContext = MruleTargetsContext;

mappingParser.prototype.mruleTargets = function() {

    var localctx = new MruleTargetsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, mappingParser.RULE_mruleTargets);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.mruleTarget();
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===mappingParser.T__13) {
            this.state = 233;
            this.match(mappingParser.T__13);
            this.state = 234;
            this.mruleTarget();
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_sourceType;
    return this;
}

SourceTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceTypeContext.prototype.constructor = SourceTypeContext;

SourceTypeContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

SourceTypeContext.prototype.INTEGER = function() {
    return this.getToken(mappingParser.INTEGER, 0);
};

SourceTypeContext.prototype.upperBound = function() {
    return this.getTypedRuleContext(UpperBoundContext,0);
};

SourceTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSourceType(this);
	}
};

SourceTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSourceType(this);
	}
};




mappingParser.SourceTypeContext = SourceTypeContext;

mappingParser.prototype.sourceType = function() {

    var localctx = new SourceTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, mappingParser.RULE_sourceType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(mappingParser.T__15);
        this.state = 241;
        this.identifier();
        this.state = 245;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.INTEGER) {
            this.state = 242;
            this.match(mappingParser.INTEGER);
            this.state = 243;
            this.match(mappingParser.T__18);
            this.state = 244;
            this.upperBound();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UpperBoundContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_upperBound;
    return this;
}

UpperBoundContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UpperBoundContext.prototype.constructor = UpperBoundContext;

UpperBoundContext.prototype.INTEGER = function() {
    return this.getToken(mappingParser.INTEGER, 0);
};

UpperBoundContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUpperBound(this);
	}
};

UpperBoundContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUpperBound(this);
	}
};




mappingParser.UpperBoundContext = UpperBoundContext;

mappingParser.prototype.upperBound = function() {

    var localctx = new UpperBoundContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, mappingParser.RULE_upperBound);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.T__19 || _la===mappingParser.INTEGER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleContextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleContext;
    return this;
}

MruleContextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleContextContext.prototype.constructor = MruleContextContext;

MruleContextContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

MruleContextContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleContext(this);
	}
};

MruleContextContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleContext(this);
	}
};




mappingParser.MruleContextContext = MruleContextContext;

mappingParser.prototype.mruleContext = function() {

    var localctx = new MruleContextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, mappingParser.RULE_mruleContext);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.identifier();
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__20) {
            this.state = 250;
            this.match(mappingParser.T__20);
            this.state = 251;
            this.identifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceDefaultContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_sourceDefault;
    return this;
}

SourceDefaultContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceDefaultContext.prototype.constructor = SourceDefaultContext;

SourceDefaultContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

SourceDefaultContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSourceDefault(this);
	}
};

SourceDefaultContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSourceDefault(this);
	}
};




mappingParser.SourceDefaultContext = SourceDefaultContext;

mappingParser.prototype.sourceDefault = function() {

    var localctx = new SourceDefaultContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, mappingParser.RULE_sourceDefault);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.match(mappingParser.T__21);
        this.state = 255;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitAlias(this);
	}
};




mappingParser.AliasContext = AliasContext;

mappingParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, mappingParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(mappingParser.T__3);
        this.state = 258;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhereClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_whereClause;
    return this;
}

WhereClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhereClauseContext.prototype.constructor = WhereClauseContext;

WhereClauseContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

WhereClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterWhereClause(this);
	}
};

WhereClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitWhereClause(this);
	}
};




mappingParser.WhereClauseContext = WhereClauseContext;

mappingParser.prototype.whereClause = function() {

    var localctx = new WhereClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, mappingParser.RULE_whereClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(mappingParser.T__22);
        this.state = 261;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CheckClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_checkClause;
    return this;
}

CheckClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CheckClauseContext.prototype.constructor = CheckClauseContext;

CheckClauseContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

CheckClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterCheckClause(this);
	}
};

CheckClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitCheckClause(this);
	}
};




mappingParser.CheckClauseContext = CheckClauseContext;

mappingParser.prototype.checkClause = function() {

    var localctx = new CheckClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, mappingParser.RULE_checkClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(mappingParser.T__23);
        this.state = 264;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_log;
    return this;
}

LogContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogContext.prototype.constructor = LogContext;

LogContext.prototype.fhirPath = function() {
    return this.getTypedRuleContext(FhirPathContext,0);
};

LogContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterLog(this);
	}
};

LogContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitLog(this);
	}
};




mappingParser.LogContext = LogContext;

mappingParser.prototype.log = function() {

    var localctx = new LogContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, mappingParser.RULE_log);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(mappingParser.T__24);
        this.state = 267;
        this.fhirPath();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DependentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_dependent;
    return this;
}

DependentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DependentContext.prototype.constructor = DependentContext;

DependentContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

DependentContext.prototype.mrules = function() {
    return this.getTypedRuleContext(MrulesContext,0);
};

DependentContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDependent(this);
	}
};

DependentContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDependent(this);
	}
};




mappingParser.DependentContext = DependentContext;

mappingParser.prototype.dependent = function() {

    var localctx = new DependentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, mappingParser.RULE_dependent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(mappingParser.T__25);
        this.state = 272;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.DELIMITEDIDENTIFIER:
        case mappingParser.IDENTIFIER:
            this.state = 270;
            this.invocation();
            break;
        case mappingParser.T__7:
            this.state = 271;
            this.mrules();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MruleTargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mruleTarget;
    return this;
}

MruleTargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MruleTargetContext.prototype.constructor = MruleTargetContext;

MruleTargetContext.prototype.mruleContext = function() {
    return this.getTypedRuleContext(MruleContextContext,0);
};

MruleTargetContext.prototype.transform = function() {
    return this.getTypedRuleContext(TransformContext,0);
};

MruleTargetContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

MruleTargetContext.prototype.targetListMode = function() {
    return this.getTypedRuleContext(TargetListModeContext,0);
};

MruleTargetContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

MruleTargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMruleTarget(this);
	}
};

MruleTargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMruleTarget(this);
	}
};




mappingParser.MruleTargetContext = MruleTargetContext;

mappingParser.prototype.mruleTarget = function() {

    var localctx = new MruleTargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, mappingParser.RULE_mruleTarget);
    var _la = 0; // Token type
    try {
        this.state = 289;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 274;
            this.mruleContext();
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__1) {
                this.state = 275;
                this.match(mappingParser.T__1);
                this.state = 276;
                this.transform();
            }

            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__3) {
                this.state = 279;
                this.alias();
            }

            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (mappingParser.T__28 - 29)) | (1 << (mappingParser.T__30 - 29)) | (1 << (mappingParser.T__33 - 29)) | (1 << (mappingParser.T__34 - 29)))) !== 0)) {
                this.state = 282;
                this.targetListMode();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 285;
            this.invocation();
            this.state = 287;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===mappingParser.T__3) {
                this.state = 286;
                this.alias();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TransformContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_transform;
    return this;
}

TransformContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TransformContext.prototype.constructor = TransformContext;

TransformContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

TransformContext.prototype.mruleContext = function() {
    return this.getTypedRuleContext(MruleContextContext,0);
};

TransformContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};

TransformContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTransform(this);
	}
};

TransformContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTransform(this);
	}
};




mappingParser.TransformContext = TransformContext;

mappingParser.prototype.transform = function() {

    var localctx = new TransformContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, mappingParser.RULE_transform);
    try {
        this.state = 294;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.mruleContext();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 293;
            this.invocation();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InvocationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_invocation;
    return this;
}

InvocationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvocationContext.prototype.constructor = InvocationContext;

InvocationContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

InvocationContext.prototype.paramList = function() {
    return this.getTypedRuleContext(ParamListContext,0);
};

InvocationContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterInvocation(this);
	}
};

InvocationContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitInvocation(this);
	}
};




mappingParser.InvocationContext = InvocationContext;

mappingParser.prototype.invocation = function() {

    var localctx = new InvocationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, mappingParser.RULE_invocation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.identifier();
        this.state = 297;
        this.match(mappingParser.T__12);
        this.state = 299;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & ((1 << (mappingParser.DELIMITEDIDENTIFIER - 80)) | (1 << (mappingParser.DATETIME - 80)) | (1 << (mappingParser.TIME - 80)) | (1 << (mappingParser.IDENTIFIER - 80)) | (1 << (mappingParser.STRING - 80)) | (1 << (mappingParser.NUMBER - 80)) | (1 << (mappingParser.INTEGER - 80)) | (1 << (mappingParser.BOOL - 80)))) !== 0)) {
            this.state = 298;
            this.paramList();
        }

        this.state = 301;
        this.match(mappingParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_paramList;
    return this;
}

ParamListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamListContext.prototype.constructor = ParamListContext;

ParamListContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

ParamListContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterParamList(this);
	}
};

ParamListContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitParamList(this);
	}
};




mappingParser.ParamListContext = ParamListContext;

mappingParser.prototype.paramList = function() {

    var localctx = new ParamListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, mappingParser.RULE_paramList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.param();
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===mappingParser.T__13) {
            this.state = 304;
            this.match(mappingParser.T__13);
            this.state = 305;
            this.param();
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ParamContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitParam(this);
	}
};




mappingParser.ParamContext = ParamContext;

mappingParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, mappingParser.RULE_param);
    try {
        this.state = 313;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.DATETIME:
        case mappingParser.TIME:
        case mappingParser.STRING:
        case mappingParser.NUMBER:
        case mappingParser.INTEGER:
        case mappingParser.BOOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 311;
            this.literal();
            break;
        case mappingParser.DELIMITEDIDENTIFIER:
        case mappingParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 312;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FhirPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_fhirPath;
    return this;
}

FhirPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FhirPathContext.prototype.constructor = FhirPathContext;

FhirPathContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FhirPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterFhirPath(this);
	}
};

FhirPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitFhirPath(this);
	}
};




mappingParser.FhirPathContext = FhirPathContext;

mappingParser.prototype.fhirPath = function() {

    var localctx = new FhirPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, mappingParser.RULE_fhirPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.INTEGER = function() {
    return this.getToken(mappingParser.INTEGER, 0);
};

LiteralContext.prototype.NUMBER = function() {
    return this.getToken(mappingParser.NUMBER, 0);
};

LiteralContext.prototype.STRING = function() {
    return this.getToken(mappingParser.STRING, 0);
};

LiteralContext.prototype.DATETIME = function() {
    return this.getToken(mappingParser.DATETIME, 0);
};

LiteralContext.prototype.TIME = function() {
    return this.getToken(mappingParser.TIME, 0);
};

LiteralContext.prototype.BOOL = function() {
    return this.getToken(mappingParser.BOOL, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitLiteral(this);
	}
};




mappingParser.LiteralContext = LiteralContext;

mappingParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, mappingParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        _la = this._input.LA(1);
        if(!(((((_la - 81)) & ~0x1f) == 0 && ((1 << (_la - 81)) & ((1 << (mappingParser.DATETIME - 81)) | (1 << (mappingParser.TIME - 81)) | (1 << (mappingParser.STRING - 81)) | (1 << (mappingParser.NUMBER - 81)) | (1 << (mappingParser.INTEGER - 81)) | (1 << (mappingParser.BOOL - 81)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GroupTypeModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_groupTypeMode;
    return this;
}

GroupTypeModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupTypeModeContext.prototype.constructor = GroupTypeModeContext;


GroupTypeModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterGroupTypeMode(this);
	}
};

GroupTypeModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitGroupTypeMode(this);
	}
};




mappingParser.GroupTypeModeContext = GroupTypeModeContext;

mappingParser.prototype.groupTypeMode = function() {

    var localctx = new GroupTypeModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, mappingParser.RULE_groupTypeMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.T__26 || _la===mappingParser.T__27)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SourceListModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_sourceListMode;
    return this;
}

SourceListModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceListModeContext.prototype.constructor = SourceListModeContext;


SourceListModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSourceListMode(this);
	}
};

SourceListModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSourceListMode(this);
	}
};




mappingParser.SourceListModeContext = SourceListModeContext;

mappingParser.prototype.sourceListMode = function() {

    var localctx = new SourceListModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, mappingParser.RULE_sourceListMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (mappingParser.T__28 - 29)) | (1 << (mappingParser.T__29 - 29)) | (1 << (mappingParser.T__30 - 29)) | (1 << (mappingParser.T__31 - 29)) | (1 << (mappingParser.T__32 - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TargetListModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_targetListMode;
    return this;
}

TargetListModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetListModeContext.prototype.constructor = TargetListModeContext;


TargetListModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTargetListMode(this);
	}
};

TargetListModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTargetListMode(this);
	}
};




mappingParser.TargetListModeContext = TargetListModeContext;

mappingParser.prototype.targetListMode = function() {

    var localctx = new TargetListModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, mappingParser.RULE_targetListMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 323;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (mappingParser.T__28 - 29)) | (1 << (mappingParser.T__30 - 29)) | (1 << (mappingParser.T__33 - 29)) | (1 << (mappingParser.T__34 - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InputModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_inputMode;
    return this;
}

InputModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputModeContext.prototype.constructor = InputModeContext;


InputModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterInputMode(this);
	}
};

InputModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitInputMode(this);
	}
};




mappingParser.InputModeContext = InputModeContext;

mappingParser.prototype.inputMode = function() {

    var localctx = new InputModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, mappingParser.RULE_inputMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        _la = this._input.LA(1);
        if(!(_la===mappingParser.T__35 || _la===mappingParser.T__36)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModelModeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_modelMode;
    return this;
}

ModelModeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModelModeContext.prototype.constructor = ModelModeContext;


ModelModeContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterModelMode(this);
	}
};

ModelModeContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitModelMode(this);
	}
};




mappingParser.ModelModeContext = ModelModeContext;

mappingParser.prototype.modelMode = function() {

    var localctx = new ModelModeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, mappingParser.RULE_modelMode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (mappingParser.T__35 - 36)) | (1 << (mappingParser.T__36 - 36)) | (1 << (mappingParser.T__37 - 36)) | (1 << (mappingParser.T__38 - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IndexerExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexerExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IndexerExpressionContext.prototype.constructor = IndexerExpressionContext;

mappingParser.IndexerExpressionContext = IndexerExpressionContext;

IndexerExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IndexerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterIndexerExpression(this);
	}
};

IndexerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitIndexerExpression(this);
	}
};


function PolarityExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PolarityExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PolarityExpressionContext.prototype.constructor = PolarityExpressionContext;

mappingParser.PolarityExpressionContext = PolarityExpressionContext;

PolarityExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PolarityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPolarityExpression(this);
	}
};

PolarityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPolarityExpression(this);
	}
};


function AdditiveExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AdditiveExpressionContext.prototype.constructor = AdditiveExpressionContext;

mappingParser.AdditiveExpressionContext = AdditiveExpressionContext;

AdditiveExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AdditiveExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterAdditiveExpression(this);
	}
};

AdditiveExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitAdditiveExpression(this);
	}
};


function MultiplicativeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MultiplicativeExpressionContext.prototype.constructor = MultiplicativeExpressionContext;

mappingParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

MultiplicativeExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MultiplicativeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMultiplicativeExpression(this);
	}
};

MultiplicativeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMultiplicativeExpression(this);
	}
};


function UnionExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnionExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnionExpressionContext.prototype.constructor = UnionExpressionContext;

mappingParser.UnionExpressionContext = UnionExpressionContext;

UnionExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
UnionExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUnionExpression(this);
	}
};

UnionExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUnionExpression(this);
	}
};


function OrExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OrExpressionContext.prototype = Object.create(ExpressionContext.prototype);
OrExpressionContext.prototype.constructor = OrExpressionContext;

mappingParser.OrExpressionContext = OrExpressionContext;

OrExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OrExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterOrExpression(this);
	}
};

OrExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitOrExpression(this);
	}
};


function AndExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AndExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AndExpressionContext.prototype.constructor = AndExpressionContext;

mappingParser.AndExpressionContext = AndExpressionContext;

AndExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
AndExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterAndExpression(this);
	}
};

AndExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitAndExpression(this);
	}
};


function MembershipExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MembershipExpressionContext.prototype = Object.create(ExpressionContext.prototype);
MembershipExpressionContext.prototype.constructor = MembershipExpressionContext;

mappingParser.MembershipExpressionContext = MembershipExpressionContext;

MembershipExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
MembershipExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMembershipExpression(this);
	}
};

MembershipExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMembershipExpression(this);
	}
};


function InequalityExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InequalityExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InequalityExpressionContext.prototype.constructor = InequalityExpressionContext;

mappingParser.InequalityExpressionContext = InequalityExpressionContext;

InequalityExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
InequalityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterInequalityExpression(this);
	}
};

InequalityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitInequalityExpression(this);
	}
};


function InvocationExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationExpressionContext.prototype = Object.create(ExpressionContext.prototype);
InvocationExpressionContext.prototype.constructor = InvocationExpressionContext;

mappingParser.InvocationExpressionContext = InvocationExpressionContext;

InvocationExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InvocationExpressionContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};
InvocationExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterInvocationExpression(this);
	}
};

InvocationExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitInvocationExpression(this);
	}
};


function EqualityExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualityExpressionContext.prototype = Object.create(ExpressionContext.prototype);
EqualityExpressionContext.prototype.constructor = EqualityExpressionContext;

mappingParser.EqualityExpressionContext = EqualityExpressionContext;

EqualityExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
EqualityExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterEqualityExpression(this);
	}
};

EqualityExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitEqualityExpression(this);
	}
};


function ImpliesExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ImpliesExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ImpliesExpressionContext.prototype.constructor = ImpliesExpressionContext;

mappingParser.ImpliesExpressionContext = ImpliesExpressionContext;

ImpliesExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
ImpliesExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterImpliesExpression(this);
	}
};

ImpliesExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitImpliesExpression(this);
	}
};


function TermExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TermExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TermExpressionContext.prototype.constructor = TermExpressionContext;

mappingParser.TermExpressionContext = TermExpressionContext;

TermExpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};
TermExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTermExpression(this);
	}
};

TermExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTermExpression(this);
	}
};


function TypeExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeExpressionContext.prototype = Object.create(ExpressionContext.prototype);
TypeExpressionContext.prototype.constructor = TypeExpressionContext;

mappingParser.TypeExpressionContext = TypeExpressionContext;

TypeExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

TypeExpressionContext.prototype.typeSpecifier = function() {
    return this.getTypedRuleContext(TypeSpecifierContext,0);
};
TypeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTypeExpression(this);
	}
};

TypeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTypeExpression(this);
	}
};



mappingParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 80;
    this.enterRecursionRule(localctx, 80, mappingParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__12:
        case mappingParser.T__62:
        case mappingParser.DELIMITEDIDENTIFIER:
        case mappingParser.DATETIME:
        case mappingParser.TIME:
        case mappingParser.IDENTIFIER:
        case mappingParser.STRING:
        case mappingParser.NUMBER:
        case mappingParser.INTEGER:
        case mappingParser.BOOL:
            localctx = new TermExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 330;
            this.term();
            break;
        case mappingParser.T__41:
        case mappingParser.T__42:
            localctx = new PolarityExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 331;
            _la = this._input.LA(1);
            if(!(_la===mappingParser.T__41 || _la===mappingParser.T__42)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 332;
            this.expression(11);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 375;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 373;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 335;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 336;
                    _la = this._input.LA(1);
                    if(!(((((_la - 20)) & ~0x1f) == 0 && ((1 << (_la - 20)) & ((1 << (mappingParser.T__19 - 20)) | (1 << (mappingParser.T__43 - 20)) | (1 << (mappingParser.T__44 - 20)) | (1 << (mappingParser.T__45 - 20)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 337;
                    this.expression(11);
                    break;

                case 2:
                    localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 338;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 339;
                    _la = this._input.LA(1);
                    if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (mappingParser.T__41 - 42)) | (1 << (mappingParser.T__42 - 42)) | (1 << (mappingParser.T__46 - 42)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 340;
                    this.expression(10);
                    break;

                case 3:
                    localctx = new UnionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 341;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 342;
                    this.match(mappingParser.T__47);
                    this.state = 343;
                    this.expression(9);
                    break;

                case 4:
                    localctx = new InequalityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 344;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 345;
                    _la = this._input.LA(1);
                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (mappingParser.T__48 - 49)) | (1 << (mappingParser.T__49 - 49)) | (1 << (mappingParser.T__50 - 49)) | (1 << (mappingParser.T__51 - 49)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 346;
                    this.expression(8);
                    break;

                case 5:
                    localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 347;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 348;
                    _la = this._input.LA(1);
                    if(!(_la===mappingParser.T__1 || ((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (mappingParser.T__53 - 54)) | (1 << (mappingParser.T__54 - 54)) | (1 << (mappingParser.T__55 - 54)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 349;
                    this.expression(6);
                    break;

                case 6:
                    localctx = new MembershipExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 350;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 351;
                    _la = this._input.LA(1);
                    if(!(_la===mappingParser.T__56 || _la===mappingParser.T__57)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 352;
                    this.expression(5);
                    break;

                case 7:
                    localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 353;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 354;
                    this.match(mappingParser.T__58);
                    this.state = 355;
                    this.expression(4);
                    break;

                case 8:
                    localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 356;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 357;
                    _la = this._input.LA(1);
                    if(!(_la===mappingParser.T__59 || _la===mappingParser.T__60)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 358;
                    this.expression(3);
                    break;

                case 9:
                    localctx = new ImpliesExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 359;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 360;
                    this.match(mappingParser.T__61);
                    this.state = 361;
                    this.expression(2);
                    break;

                case 10:
                    localctx = new InvocationExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 362;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 363;
                    this.match(mappingParser.T__20);
                    this.state = 364;
                    this.invocation();
                    break;

                case 11:
                    localctx = new IndexerExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 365;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 366;
                    this.match(mappingParser.T__39);
                    this.state = 367;
                    this.expression(0);
                    this.state = 368;
                    this.match(mappingParser.T__40);
                    break;

                case 12:
                    localctx = new TypeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, mappingParser.RULE_expression);
                    this.state = 370;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 371;
                    _la = this._input.LA(1);
                    if(!(_la===mappingParser.T__3 || _la===mappingParser.T__52)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 372;
                    this.typeSpecifier();
                    break;

                } 
            }
            this.state = 377;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExternalConstantTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExternalConstantTermContext.prototype = Object.create(TermContext.prototype);
ExternalConstantTermContext.prototype.constructor = ExternalConstantTermContext;

mappingParser.ExternalConstantTermContext = ExternalConstantTermContext;

ExternalConstantTermContext.prototype.externalConstant = function() {
    return this.getTypedRuleContext(ExternalConstantContext,0);
};
ExternalConstantTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterExternalConstantTerm(this);
	}
};

ExternalConstantTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitExternalConstantTerm(this);
	}
};


function LiteralTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralTermContext.prototype = Object.create(TermContext.prototype);
LiteralTermContext.prototype.constructor = LiteralTermContext;

mappingParser.LiteralTermContext = LiteralTermContext;

LiteralTermContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterLiteralTerm(this);
	}
};

LiteralTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitLiteralTerm(this);
	}
};


function ParenthesizedTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesizedTermContext.prototype = Object.create(TermContext.prototype);
ParenthesizedTermContext.prototype.constructor = ParenthesizedTermContext;

mappingParser.ParenthesizedTermContext = ParenthesizedTermContext;

ParenthesizedTermContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesizedTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterParenthesizedTerm(this);
	}
};

ParenthesizedTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitParenthesizedTerm(this);
	}
};


function InvocationTermContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InvocationTermContext.prototype = Object.create(TermContext.prototype);
InvocationTermContext.prototype.constructor = InvocationTermContext;

mappingParser.InvocationTermContext = InvocationTermContext;

InvocationTermContext.prototype.invocation = function() {
    return this.getTypedRuleContext(InvocationContext,0);
};
InvocationTermContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterInvocationTerm(this);
	}
};

InvocationTermContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitInvocationTerm(this);
	}
};



mappingParser.TermContext = TermContext;

mappingParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, mappingParser.RULE_term);
    try {
        this.state = 385;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.DELIMITEDIDENTIFIER:
        case mappingParser.IDENTIFIER:
            localctx = new InvocationTermContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 378;
            this.invocation();
            break;
        case mappingParser.DATETIME:
        case mappingParser.TIME:
        case mappingParser.STRING:
        case mappingParser.NUMBER:
        case mappingParser.INTEGER:
        case mappingParser.BOOL:
            localctx = new LiteralTermContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 379;
            this.literal();
            break;
        case mappingParser.T__62:
            localctx = new ExternalConstantTermContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 380;
            this.externalConstant();
            break;
        case mappingParser.T__12:
            localctx = new ParenthesizedTermContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 381;
            this.match(mappingParser.T__12);
            this.state = 382;
            this.expression(0);
            this.state = 383;
            this.match(mappingParser.T__14);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExternalConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_externalConstant;
    return this;
}

ExternalConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExternalConstantContext.prototype.constructor = ExternalConstantContext;

ExternalConstantContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExternalConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterExternalConstant(this);
	}
};

ExternalConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitExternalConstant(this);
	}
};




mappingParser.ExternalConstantContext = ExternalConstantContext;

mappingParser.prototype.externalConstant = function() {

    var localctx = new ExternalConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, mappingParser.RULE_externalConstant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this.match(mappingParser.T__62);
        this.state = 388;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_functn;
    return this;
}

FunctnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctnContext.prototype.constructor = FunctnContext;

FunctnContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

FunctnContext.prototype.paramList = function() {
    return this.getTypedRuleContext(ParamListContext,0);
};

FunctnContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterFunctn(this);
	}
};

FunctnContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitFunctn(this);
	}
};




mappingParser.FunctnContext = FunctnContext;

mappingParser.prototype.functn = function() {

    var localctx = new FunctnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, mappingParser.RULE_functn);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.identifier();
        this.state = 391;
        this.match(mappingParser.T__12);
        this.state = 393;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & ((1 << (mappingParser.DELIMITEDIDENTIFIER - 80)) | (1 << (mappingParser.DATETIME - 80)) | (1 << (mappingParser.TIME - 80)) | (1 << (mappingParser.IDENTIFIER - 80)) | (1 << (mappingParser.STRING - 80)) | (1 << (mappingParser.NUMBER - 80)) | (1 << (mappingParser.INTEGER - 80)) | (1 << (mappingParser.BOOL - 80)))) !== 0)) {
            this.state = 392;
            this.paramList();
        }

        this.state = 395;
        this.match(mappingParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuantityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_quantity;
    return this;
}

QuantityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantityContext.prototype.constructor = QuantityContext;

QuantityContext.prototype.NUMBER = function() {
    return this.getToken(mappingParser.NUMBER, 0);
};

QuantityContext.prototype.unit = function() {
    return this.getTypedRuleContext(UnitContext,0);
};

QuantityContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterQuantity(this);
	}
};

QuantityContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitQuantity(this);
	}
};




mappingParser.QuantityContext = QuantityContext;

mappingParser.prototype.quantity = function() {

    var localctx = new QuantityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, mappingParser.RULE_quantity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397;
        this.match(mappingParser.NUMBER);
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (mappingParser.T__63 - 64)) | (1 << (mappingParser.T__64 - 64)) | (1 << (mappingParser.T__65 - 64)) | (1 << (mappingParser.T__66 - 64)) | (1 << (mappingParser.T__67 - 64)) | (1 << (mappingParser.T__68 - 64)) | (1 << (mappingParser.T__69 - 64)) | (1 << (mappingParser.T__70 - 64)) | (1 << (mappingParser.T__71 - 64)) | (1 << (mappingParser.T__72 - 64)) | (1 << (mappingParser.T__73 - 64)) | (1 << (mappingParser.T__74 - 64)) | (1 << (mappingParser.T__75 - 64)) | (1 << (mappingParser.T__76 - 64)) | (1 << (mappingParser.T__77 - 64)) | (1 << (mappingParser.T__78 - 64)) | (1 << (mappingParser.STRING - 64)))) !== 0)) {
            this.state = 398;
            this.unit();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_unit;
    return this;
}

UnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnitContext.prototype.constructor = UnitContext;

UnitContext.prototype.dateTimePrecision = function() {
    return this.getTypedRuleContext(DateTimePrecisionContext,0);
};

UnitContext.prototype.pluralDateTimePrecision = function() {
    return this.getTypedRuleContext(PluralDateTimePrecisionContext,0);
};

UnitContext.prototype.STRING = function() {
    return this.getToken(mappingParser.STRING, 0);
};

UnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUnit(this);
	}
};

UnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUnit(this);
	}
};




mappingParser.UnitContext = UnitContext;

mappingParser.prototype.unit = function() {

    var localctx = new UnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, mappingParser.RULE_unit);
    try {
        this.state = 404;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__63:
        case mappingParser.T__64:
        case mappingParser.T__65:
        case mappingParser.T__66:
        case mappingParser.T__67:
        case mappingParser.T__68:
        case mappingParser.T__69:
        case mappingParser.T__70:
            this.enterOuterAlt(localctx, 1);
            this.state = 401;
            this.dateTimePrecision();
            break;
        case mappingParser.T__71:
        case mappingParser.T__72:
        case mappingParser.T__73:
        case mappingParser.T__74:
        case mappingParser.T__75:
        case mappingParser.T__76:
        case mappingParser.T__77:
        case mappingParser.T__78:
            this.enterOuterAlt(localctx, 2);
            this.state = 402;
            this.pluralDateTimePrecision();
            break;
        case mappingParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 403;
            this.match(mappingParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateTimePrecisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_dateTimePrecision;
    return this;
}

DateTimePrecisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateTimePrecisionContext.prototype.constructor = DateTimePrecisionContext;


DateTimePrecisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterDateTimePrecision(this);
	}
};

DateTimePrecisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitDateTimePrecision(this);
	}
};




mappingParser.DateTimePrecisionContext = DateTimePrecisionContext;

mappingParser.prototype.dateTimePrecision = function() {

    var localctx = new DateTimePrecisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, mappingParser.RULE_dateTimePrecision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        _la = this._input.LA(1);
        if(!(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (mappingParser.T__63 - 64)) | (1 << (mappingParser.T__64 - 64)) | (1 << (mappingParser.T__65 - 64)) | (1 << (mappingParser.T__66 - 64)) | (1 << (mappingParser.T__67 - 64)) | (1 << (mappingParser.T__68 - 64)) | (1 << (mappingParser.T__69 - 64)) | (1 << (mappingParser.T__70 - 64)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PluralDateTimePrecisionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_pluralDateTimePrecision;
    return this;
}

PluralDateTimePrecisionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PluralDateTimePrecisionContext.prototype.constructor = PluralDateTimePrecisionContext;


PluralDateTimePrecisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPluralDateTimePrecision(this);
	}
};

PluralDateTimePrecisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPluralDateTimePrecision(this);
	}
};




mappingParser.PluralDateTimePrecisionContext = PluralDateTimePrecisionContext;

mappingParser.prototype.pluralDateTimePrecision = function() {

    var localctx = new PluralDateTimePrecisionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, mappingParser.RULE_pluralDateTimePrecision);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        _la = this._input.LA(1);
        if(!(((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (mappingParser.T__71 - 72)) | (1 << (mappingParser.T__72 - 72)) | (1 << (mappingParser.T__73 - 72)) | (1 << (mappingParser.T__74 - 72)) | (1 << (mappingParser.T__75 - 72)) | (1 << (mappingParser.T__76 - 72)) | (1 << (mappingParser.T__77 - 72)) | (1 << (mappingParser.T__78 - 72)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_typeSpecifier;
    return this;
}

TypeSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeSpecifierContext.prototype.constructor = TypeSpecifierContext;

TypeSpecifierContext.prototype.qualifiedIdentifier = function() {
    return this.getTypedRuleContext(QualifiedIdentifierContext,0);
};

TypeSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterTypeSpecifier(this);
	}
};

TypeSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitTypeSpecifier(this);
	}
};




mappingParser.TypeSpecifierContext = TypeSpecifierContext;

mappingParser.prototype.typeSpecifier = function() {

    var localctx = new TypeSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, mappingParser.RULE_typeSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        this.qualifiedIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualifiedIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_qualifiedIdentifier;
    return this;
}

QualifiedIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedIdentifierContext.prototype.constructor = QualifiedIdentifierContext;

QualifiedIdentifierContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

QualifiedIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterQualifiedIdentifier(this);
	}
};

QualifiedIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitQualifiedIdentifier(this);
	}
};




mappingParser.QualifiedIdentifierContext = QualifiedIdentifierContext;

mappingParser.prototype.qualifiedIdentifier = function() {

    var localctx = new QualifiedIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, mappingParser.RULE_qualifiedIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.identifier();
        this.state = 417;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 413;
                this.match(mappingParser.T__20);
                this.state = 414;
                this.identifier(); 
            }
            this.state = 419;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


mappingParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 40:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

mappingParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 10);
		case 1:
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		case 9:
			return this.precpred(this._ctx, 13);
		case 10:
			return this.precpred(this._ctx, 12);
		case 11:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.mappingParser = mappingParser;
