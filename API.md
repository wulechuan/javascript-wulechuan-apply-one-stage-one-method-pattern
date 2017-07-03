# API

## Constructor

	var stageMethodsOwner = {};
	var stages = new WulechuanApplyOneStageOneMethodProgrammingPatternTo(stageMethodsOwner);




## Methods

### addStage

Define a stage for a provided function. When the time(stage) is correct, the function will then be attached to the methods owner, exposed as a method of its.

#### Signature

	function addStage(stageAction, thisStageCanBeSkipped, actionAliasesInAllLanguages);

#### Arguments

- stageAction

  Must be a **function**.

  A function that will be added to the operator as its method at correct stage.

- thisStageCanBeSkipped

  Must be a **boolean**.

  A value of **true** means the stage being added is an optional stage, so that the method after this optional stage should also be exposed at the previous stage of this optional stage.

- thisStageCanBeSkipped

  Must be an **object**.

  An object that takes several **array**s, each contains aliases in a specific language.




### setPreferredNaturalLanguageTo

Set the preferred language to use.

#### Signature

	function setPreferredNaturalLanguageTo(languageCode);

#### Arguments

- languageCode

  Must be a non-empty **string**.




### startFromFirstStage

Start the execution chain on the methods owner.

#### Signature

	function startFromFirstStage();

#### Arguments

None.


