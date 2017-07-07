var wulechuanApplyStagesPatternToMethodsOwner =
	require('../../source/wulechuan-one-method-one-stage-pattern-builder');
// console.log(wulechuanApplyStagesPatternToMethodsOwner);


function A(initName) {
	var privateThing = 'secret';
	var privateThingAccessingCount = 0;

	this.name = initName;
	this.methodInNeitherRoutes = function () {
		console.log('I alwasy exist.', _getPrivateThing());
	};
	this.method_1_1 = function () {
		console.log('You will never be able to use me, because the "aStagesRoute1" will overwrite me');
	};

	var aStagesRoute1 = new wulechuanApplyStagesPatternToMethodsOwner(this, 'en-US');
	var aStagesRoute2 = new wulechuanApplyStagesPatternToMethodsOwner(this, 'en-US');



	aStagesRoute1.addStage(methodInRoute1Stage1, {
		'en-US': 'method_1_1'
	});

	aStagesRoute1.addStage(methodInRoute1Stage2, {
		'en-US': 'method_1_2'
	});

	aStagesRoute1.addStage(methodThatIsSharedBetweenTwoRoutes, {
		'en-US': 'method_shared'
	});



	aStagesRoute2.addStage(methodInRoute2Stage1, {
		'en-US': 'method_2_1'
	});

	aStagesRoute2.addStage(methodThatIsSharedBetweenTwoRoutes, {
		'en-US': 'method_shared'
	});

	aStagesRoute2.addStage(methodInRoute2Stage3, {
		'en-US': 'method_2_3'
	});



	function methodInRoute1Stage1() { _logInvocationOf('Route 1 > Stage 1'); }
	function methodInRoute1Stage2() { _logInvocationOf('Route 1 > Stage 2'); }
	function methodInRoute2Stage1() { _logInvocationOf('Route 2 > Stage 1'); }
	function methodInRoute2Stage3() { _logInvocationOf('Route 2 > Stage 3'); }
	function methodThatIsSharedBetweenTwoRoutes() { _logInvocationOf('Shared Method [ Note that the two routes are even sharing the method name! ]'); }

	function _getPrivateThing() {
		privateThingAccessingCount++;
		return '\n\t'+privateThing+' '+privateThingAccessingCount;
	}

	function _logInvocationOf(methodCaption) {
		console.log('\n\nInvoking method: '+methodCaption+':', _getPrivateThing(), '\n\n');
	}
}

function logMethodsOf(obj, caption) {
	var prefixPerLine = '\n\t';

	if (!caption || typeof caption !== 'string') {
		caption = '';
	} else {
		caption = ' "'+caption.trim()+'"';
	}

	var logStringSegments = [
		''
	];

	for (var key in obj) {
		var attr = obj[key];
		if (typeof attr === 'function') {
			logStringSegments.push(key);
		}
	}

	console.log('Object'+caption+' has these methods:', logStringSegments.join(prefixPerLine), '\n\n');
}

var a = new A('wulechuan');

window.a = a; // for we to tweak it more.

console.group('At beginning');
logMethodsOf(a, 'a');
console.groupEnd();



a['method_1_1']();
console.group('After invocation of route1 method1');
logMethodsOf(a, 'a');
console.log('Note that the "method_1_1" disappears, while the "method_1_2" appears.');
console.groupEnd();




a['method_2_1']();
console.group('After invocation of route2 method1');
logMethodsOf(a, 'a');
console.groupEnd();



a['method_shared']();
console.group('After invocation of shared method in route 2');
logMethodsOf(a, 'a');
console.groupEnd();



// Delibrately delay the route 1.
a['method_1_2']();
console.group('After invocation of route1 method2');
logMethodsOf(a, 'a');
console.groupEnd();



a['method_2_3']();
console.group('After invocation of route2 method3');
logMethodsOf(a, 'a');
console.groupEnd();



console.group(
	'Finally let\'s try to invoke the shared method, **AGAIN**!',
	'\nBecause we had thought that the version in the route 1 were preserved.',
	'\nBut that\'s simply **NOT** the case. And an error will thrown.',
	'\nBecause the same method name should always mean the exactly the same thing.',
	'\nSince the "method_shared" method has been invoked via the route 2,',
	'It is our responsibility to make sure that there are no route meaning chaos.',
	'\nThe example above is simple not "right".',
	'Besides, generally, although we can design more than one routes for an object',
	'We shall not mixing up the execution of these routes. Otherwise, why routes?'
);
a['method_shared']();
console.groupEnd();