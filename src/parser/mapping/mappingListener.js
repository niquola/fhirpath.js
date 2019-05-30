// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by mappingParser.
function mappingListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

mappingListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
mappingListener.prototype.constructor = mappingListener;

// Enter a parse tree produced by mappingParser#prog.
mappingListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by mappingParser#prog.
mappingListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mapId.
mappingListener.prototype.enterMapId = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mapId.
mappingListener.prototype.exitMapId = function(ctx) {
};


// Enter a parse tree produced by mappingParser#url.
mappingListener.prototype.enterUrl = function(ctx) {
};

// Exit a parse tree produced by mappingParser#url.
mappingListener.prototype.exitUrl = function(ctx) {
};


// Enter a parse tree produced by mappingParser#identifier.
mappingListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#identifier.
mappingListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#structure.
mappingListener.prototype.enterStructure = function(ctx) {
};

// Exit a parse tree produced by mappingParser#structure.
mappingListener.prototype.exitStructure = function(ctx) {
};


// Enter a parse tree produced by mappingParser#structureAlias.
mappingListener.prototype.enterStructureAlias = function(ctx) {
};

// Exit a parse tree produced by mappingParser#structureAlias.
mappingListener.prototype.exitStructureAlias = function(ctx) {
};


// Enter a parse tree produced by mappingParser#imports.
mappingListener.prototype.enterImports = function(ctx) {
};

// Exit a parse tree produced by mappingParser#imports.
mappingListener.prototype.exitImports = function(ctx) {
};


// Enter a parse tree produced by mappingParser#group.
mappingListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by mappingParser#group.
mappingListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mrules.
mappingListener.prototype.enterMrules = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mrules.
mappingListener.prototype.exitMrules = function(ctx) {
};


// Enter a parse tree produced by mappingParser#typeMode.
mappingListener.prototype.enterTypeMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#typeMode.
mappingListener.prototype.exitTypeMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mextends.
mappingListener.prototype.enterMextends = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mextends.
mappingListener.prototype.exitMextends = function(ctx) {
};


// Enter a parse tree produced by mappingParser#parameters.
mappingListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by mappingParser#parameters.
mappingListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by mappingParser#parameter.
mappingListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by mappingParser#parameter.
mappingListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by mappingParser#type.
mappingListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by mappingParser#type.
mappingListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mrule.
mappingListener.prototype.enterMrule = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mrule.
mappingListener.prototype.exitMrule = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleName.
mappingListener.prototype.enterMruleName = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleName.
mappingListener.prototype.exitMruleName = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleSources.
mappingListener.prototype.enterMruleSources = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleSources.
mappingListener.prototype.exitMruleSources = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleSource.
mappingListener.prototype.enterMruleSource = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleSource.
mappingListener.prototype.exitMruleSource = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleTargets.
mappingListener.prototype.enterMruleTargets = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleTargets.
mappingListener.prototype.exitMruleTargets = function(ctx) {
};


// Enter a parse tree produced by mappingParser#sourceType.
mappingListener.prototype.enterSourceType = function(ctx) {
};

// Exit a parse tree produced by mappingParser#sourceType.
mappingListener.prototype.exitSourceType = function(ctx) {
};


// Enter a parse tree produced by mappingParser#upperBound.
mappingListener.prototype.enterUpperBound = function(ctx) {
};

// Exit a parse tree produced by mappingParser#upperBound.
mappingListener.prototype.exitUpperBound = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleContext.
mappingListener.prototype.enterMruleContext = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleContext.
mappingListener.prototype.exitMruleContext = function(ctx) {
};


// Enter a parse tree produced by mappingParser#sourceDefault.
mappingListener.prototype.enterSourceDefault = function(ctx) {
};

// Exit a parse tree produced by mappingParser#sourceDefault.
mappingListener.prototype.exitSourceDefault = function(ctx) {
};


// Enter a parse tree produced by mappingParser#alias.
mappingListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by mappingParser#alias.
mappingListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by mappingParser#whereClause.
mappingListener.prototype.enterWhereClause = function(ctx) {
};

// Exit a parse tree produced by mappingParser#whereClause.
mappingListener.prototype.exitWhereClause = function(ctx) {
};


// Enter a parse tree produced by mappingParser#checkClause.
mappingListener.prototype.enterCheckClause = function(ctx) {
};

// Exit a parse tree produced by mappingParser#checkClause.
mappingListener.prototype.exitCheckClause = function(ctx) {
};


// Enter a parse tree produced by mappingParser#log.
mappingListener.prototype.enterLog = function(ctx) {
};

// Exit a parse tree produced by mappingParser#log.
mappingListener.prototype.exitLog = function(ctx) {
};


// Enter a parse tree produced by mappingParser#dependent.
mappingListener.prototype.enterDependent = function(ctx) {
};

// Exit a parse tree produced by mappingParser#dependent.
mappingListener.prototype.exitDependent = function(ctx) {
};


// Enter a parse tree produced by mappingParser#mruleTarget.
mappingListener.prototype.enterMruleTarget = function(ctx) {
};

// Exit a parse tree produced by mappingParser#mruleTarget.
mappingListener.prototype.exitMruleTarget = function(ctx) {
};


// Enter a parse tree produced by mappingParser#transform.
mappingListener.prototype.enterTransform = function(ctx) {
};

// Exit a parse tree produced by mappingParser#transform.
mappingListener.prototype.exitTransform = function(ctx) {
};


// Enter a parse tree produced by mappingParser#invocation.
mappingListener.prototype.enterInvocation = function(ctx) {
};

// Exit a parse tree produced by mappingParser#invocation.
mappingListener.prototype.exitInvocation = function(ctx) {
};


// Enter a parse tree produced by mappingParser#paramList.
mappingListener.prototype.enterParamList = function(ctx) {
};

// Exit a parse tree produced by mappingParser#paramList.
mappingListener.prototype.exitParamList = function(ctx) {
};


// Enter a parse tree produced by mappingParser#param.
mappingListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by mappingParser#param.
mappingListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by mappingParser#fhirPath.
mappingListener.prototype.enterFhirPath = function(ctx) {
};

// Exit a parse tree produced by mappingParser#fhirPath.
mappingListener.prototype.exitFhirPath = function(ctx) {
};


// Enter a parse tree produced by mappingParser#literal.
mappingListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by mappingParser#literal.
mappingListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by mappingParser#groupTypeMode.
mappingListener.prototype.enterGroupTypeMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#groupTypeMode.
mappingListener.prototype.exitGroupTypeMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#sourceListMode.
mappingListener.prototype.enterSourceListMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#sourceListMode.
mappingListener.prototype.exitSourceListMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#targetListMode.
mappingListener.prototype.enterTargetListMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#targetListMode.
mappingListener.prototype.exitTargetListMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#inputMode.
mappingListener.prototype.enterInputMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#inputMode.
mappingListener.prototype.exitInputMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#modelMode.
mappingListener.prototype.enterModelMode = function(ctx) {
};

// Exit a parse tree produced by mappingParser#modelMode.
mappingListener.prototype.exitModelMode = function(ctx) {
};


// Enter a parse tree produced by mappingParser#indexerExpression.
mappingListener.prototype.enterIndexerExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#indexerExpression.
mappingListener.prototype.exitIndexerExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#polarityExpression.
mappingListener.prototype.enterPolarityExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#polarityExpression.
mappingListener.prototype.exitPolarityExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#additiveExpression.
mappingListener.prototype.enterAdditiveExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#additiveExpression.
mappingListener.prototype.exitAdditiveExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#multiplicativeExpression.
mappingListener.prototype.enterMultiplicativeExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#multiplicativeExpression.
mappingListener.prototype.exitMultiplicativeExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#unionExpression.
mappingListener.prototype.enterUnionExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#unionExpression.
mappingListener.prototype.exitUnionExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#orExpression.
mappingListener.prototype.enterOrExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#orExpression.
mappingListener.prototype.exitOrExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#andExpression.
mappingListener.prototype.enterAndExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#andExpression.
mappingListener.prototype.exitAndExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#membershipExpression.
mappingListener.prototype.enterMembershipExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#membershipExpression.
mappingListener.prototype.exitMembershipExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#inequalityExpression.
mappingListener.prototype.enterInequalityExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#inequalityExpression.
mappingListener.prototype.exitInequalityExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#invocationExpression.
mappingListener.prototype.enterInvocationExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#invocationExpression.
mappingListener.prototype.exitInvocationExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#equalityExpression.
mappingListener.prototype.enterEqualityExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#equalityExpression.
mappingListener.prototype.exitEqualityExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#impliesExpression.
mappingListener.prototype.enterImpliesExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#impliesExpression.
mappingListener.prototype.exitImpliesExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#termExpression.
mappingListener.prototype.enterTermExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#termExpression.
mappingListener.prototype.exitTermExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#typeExpression.
mappingListener.prototype.enterTypeExpression = function(ctx) {
};

// Exit a parse tree produced by mappingParser#typeExpression.
mappingListener.prototype.exitTypeExpression = function(ctx) {
};


// Enter a parse tree produced by mappingParser#invocationTerm.
mappingListener.prototype.enterInvocationTerm = function(ctx) {
};

// Exit a parse tree produced by mappingParser#invocationTerm.
mappingListener.prototype.exitInvocationTerm = function(ctx) {
};


// Enter a parse tree produced by mappingParser#literalTerm.
mappingListener.prototype.enterLiteralTerm = function(ctx) {
};

// Exit a parse tree produced by mappingParser#literalTerm.
mappingListener.prototype.exitLiteralTerm = function(ctx) {
};


// Enter a parse tree produced by mappingParser#externalConstantTerm.
mappingListener.prototype.enterExternalConstantTerm = function(ctx) {
};

// Exit a parse tree produced by mappingParser#externalConstantTerm.
mappingListener.prototype.exitExternalConstantTerm = function(ctx) {
};


// Enter a parse tree produced by mappingParser#parenthesizedTerm.
mappingListener.prototype.enterParenthesizedTerm = function(ctx) {
};

// Exit a parse tree produced by mappingParser#parenthesizedTerm.
mappingListener.prototype.exitParenthesizedTerm = function(ctx) {
};


// Enter a parse tree produced by mappingParser#externalConstant.
mappingListener.prototype.enterExternalConstant = function(ctx) {
};

// Exit a parse tree produced by mappingParser#externalConstant.
mappingListener.prototype.exitExternalConstant = function(ctx) {
};


// Enter a parse tree produced by mappingParser#functn.
mappingListener.prototype.enterFunctn = function(ctx) {
};

// Exit a parse tree produced by mappingParser#functn.
mappingListener.prototype.exitFunctn = function(ctx) {
};


// Enter a parse tree produced by mappingParser#quantity.
mappingListener.prototype.enterQuantity = function(ctx) {
};

// Exit a parse tree produced by mappingParser#quantity.
mappingListener.prototype.exitQuantity = function(ctx) {
};


// Enter a parse tree produced by mappingParser#unit.
mappingListener.prototype.enterUnit = function(ctx) {
};

// Exit a parse tree produced by mappingParser#unit.
mappingListener.prototype.exitUnit = function(ctx) {
};


// Enter a parse tree produced by mappingParser#dateTimePrecision.
mappingListener.prototype.enterDateTimePrecision = function(ctx) {
};

// Exit a parse tree produced by mappingParser#dateTimePrecision.
mappingListener.prototype.exitDateTimePrecision = function(ctx) {
};


// Enter a parse tree produced by mappingParser#pluralDateTimePrecision.
mappingListener.prototype.enterPluralDateTimePrecision = function(ctx) {
};

// Exit a parse tree produced by mappingParser#pluralDateTimePrecision.
mappingListener.prototype.exitPluralDateTimePrecision = function(ctx) {
};


// Enter a parse tree produced by mappingParser#typeSpecifier.
mappingListener.prototype.enterTypeSpecifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#typeSpecifier.
mappingListener.prototype.exitTypeSpecifier = function(ctx) {
};


// Enter a parse tree produced by mappingParser#qualifiedIdentifier.
mappingListener.prototype.enterQualifiedIdentifier = function(ctx) {
};

// Exit a parse tree produced by mappingParser#qualifiedIdentifier.
mappingListener.prototype.exitQualifiedIdentifier = function(ctx) {
};



exports.mappingListener = mappingListener;