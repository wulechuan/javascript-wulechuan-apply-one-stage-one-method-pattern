# API

## Constructor

Construct a operator to manage the stages for another object, called "methods owner".
Generally, the operator helps the methods owner, by exposing or hiding some methods for the methods owner at correct stage.

#### Signature

	// Note that the stagesOperator is NOT the stageMethodsOwner.
	var stagesOperator = new WulechuanApplyOneStageOneMethodProgrammingPatternToMethodsOwner(
		stageMethodsOwner,
		preferredLanguage
	);

#### arguments

- **stageMethodsOwner** [required]

	The object to add or remove methods upon.

- **preferredLanguage** [Optional]

	The preferred language for exposing and hiding methods.
	This argument is optional here as constructing an instance, but the preferred language is required anyway before starting from the first stage.


#### Usage

	var StagesOperator = require('@wulechuan/apply-one-stage-one-method-pattern');

	var a = {};
	var stagesOperator = new StagesOperator(a, 'en-US');




## Methods

### addStage

Define a stage for a provided function. When the time(stage) is correct, the function will then be attached to the methods owner, exposed as a method of its.

#### Signature

Might be any of below:

	function addStage(
		stageAction, /* a function */
		actionAliasesInAllLanguages /* an object */
	);

	function addStage(
		stageAction, /* a function */
		thisStageCanBeSkipped, /* a boolean */
		actionAliasesInAllLanguages /* an object */
	);

	function addStage(
		stageAction, /* a function */
		anAliasInPreferredLanguage /* a non-empty string */
	);

	function addStage(
		stageAction, /* a function */
		thisStageCanBeSkipped, /* a boolean */
		anAliasInPreferredLanguage /* a non-empty string */
	);


#### Arguments

- **stageAction** [required]

	Must be a **function**.

	A function that will be added to the operator as its method at correct stage.

- **thisStageCanBeSkipped** [Optional]

	Must be a **boolean**.

	A value of **true** means the stage being added is an optional stage, so that the method after this optional stage should also be exposed at the previous stage of this optional stage.

- **actionAliasesInAllLanguages** [required]

	- If the preferred language has **NOT** been set before the invocation of this method,
		then this argument must be an **object**.
	- If the preferred language has been set before the invocation of this method,
		then a non-empty string is allowed, which will be treated as the alias in the preferred language. Of course, an object is allowed as always.

	An object that takes several **array**s, each contains aliases in a specific language.

#### Usage

	stageOperator.addStage(aFunction, {
		'en-US': 'myFirstMethod',
		'zh-CN': '第一步'
	});

	// or
	stageOperator.addStage(
		anotherFunction,
		true // Skippable,
		'nonImportantStep'
	);

	// or
	stageOperator.addStage(
		anotherFunction,
		'youCanNotSkipMe'
	);



### setPreferredNaturalLanguageTo

Set the preferred language to use.

#### Signature

	function setPreferredNaturalLanguageTo(languageCode);

#### Arguments

- **languageCode**

	Must be a non-empty **string**.

#### Usage

	stageOperator.setPreferredNaturalLanguageTo('en-US');



### startFromFirstStage

Start the execution chain on the methods owner.

#### Signature

	function startFromFirstStage();

#### Arguments

None.

#### Usage

	stageOperator.startFromFirstStage();




### abort

Stop the execution chain on the methods owner.
If this method of the **operator** is invoked, all methods for all subsequence stages of the owner will be skipped.
And the finally returned value of the last stage is **always** undefined.

- Tip:

	This method of the **operator** is often, though not forced to be, invoked withing a method of the **methods owner**, which make sense. 


#### Signature

	function abort();

#### Arguments

None.

#### Usage

	stageOperator.abort();


