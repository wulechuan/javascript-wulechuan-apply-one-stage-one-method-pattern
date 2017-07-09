/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var 吴乐川的执行路线 = __webpack_require__(1);

	var 为测试之便不隐藏任何方法函数 = true;
	var 实验对象壹 = new 实验类(为测试之便不隐藏任何方法函数);

	// 曝露以下对象和类，以便在浏览器控制台中进一步把玩。
	window.乐川的执行路线 = 吴乐川的执行路线;
	window.实验对象壹 = 实验对象壹;

	实验针对(实验对象壹);

	// 主体程序结束于此







	function 列示某对象目前所有方法函数(对象, 对象称呼) {
		var 每行日志之前缀 = '\n\t';

		if (!对象称呼 || typeof 对象称呼 !== 'string') {
			对象称呼 = '';
		} else {
			对象称呼 = '【' + 对象称呼.trim() + '】';
		}

		var 方法函数名列表日志片断集 = [
			''
		];

		for (var 属性名 in 对象) {
			var 属性 = 对象[属性名];
			if (typeof 属性 === 'function') {
				方法函数名列表日志片断集.push(属性名);
			}
		}

		console.log(
			(对象称呼 || '无名对象') + '目前有下列方法函数：',
			方法函数名列表日志片断集.join(每行日志之前缀), '\n\n'
		);
	}





	function 实验类(为测试之便不隐藏任何方法函数) {
		var 地支 = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
		var 汉语大写数字 = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'];

		var 执行路线名称之一 = '甲';
		var 执行路线名称之二 = '乙';
		var 通用方法名之前缀 = '通用动作';

		var 本实验实例 = this;
		var 自动生成的多组函数 = _生成多组函数备用();
		var 公用之最终动作 = _生成一个备用函数('动作·终');

		_定义执行路线甲();
		_定义执行路线乙();





		function _生成一个备用函数(方法名称) {
			var 函数本体 = function () {
				console.log('\n实验对象刚刚调用了其【'+方法名称+'】方法函数。\n\n');
			};

			return 函数本体;
		}

		function _生成多组函数备用() {
			var 自动生成的多组函数 = {};
			var 函数系列名称;



			函数系列名称 = 执行路线名称之一;
			自动生成的多组函数 [ 函数系列名称 ] = [];

			地支.forEach(当前地支 => {
				自动生成的多组函数 [ 函数系列名称 ] [ 当前地支 ] =
					_生成一个备用函数(函数系列名称+'·'+当前地支);
			});



			函数系列名称 = 执行路线名称之二;
			自动生成的多组函数 [ 函数系列名称 ] = [];

			地支.forEach(当前地支 => {
				自动生成的多组函数 [ 函数系列名称 ] [ 当前地支 ] =
					_生成一个备用函数(函数系列名称+'·'+当前地支);
			});



			函数系列名称 = 通用方法名之前缀;
			自动生成的多组函数 [ 函数系列名称 ] = [];

			汉语大写数字.forEach(当前数字 => {
				自动生成的多组函数 [ 函数系列名称 ] [ 当前数字 ] =
					_生成一个备用函数(函数系列名称+'·'+当前数字+'');
			});



			return 自动生成的多组函数;
		}


		function _在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体) {
			if (为测试之便不隐藏任何方法函数) {
				本实验实例[方法名] = 函数本体;
			} else {
				执行路线.设有步骤(函数本体, { 'zh-CN': 方法名 });
			}
		}

		function _定义执行路线甲() {
			var 执行路线名 = 执行路线名称之一;



			var 本系列函数之索引 = 执行路线名;
			var 本系列方法本名之前缀 = '动作'+执行路线名;
			var 本函数系列 = 自动生成的多组函数 [ 本系列函数之索引 ];

			var 通用函数系列之索引 = 通用方法名之前缀;
			var 通用函数系列 = 自动生成的多组函数 [ 通用函数系列之索引 ];



			var 执行路线;
			
			if ( ! 为测试之便不隐藏任何方法函数) {
				执行路线 = new 吴乐川的执行路线(本实验实例, 'zh-CN');
			}



			var 方法本名, 方法名, 函数本体;


			方法本名 = '子';
			方法名 = 本系列方法本名之前缀+方法本名;
			函数本体 = 本函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);

			方法本名 = '丑';
			方法名 = 本系列方法本名之前缀+方法本名;
			函数本体 = 本函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);

			方法本名 = '寅';
			方法名 = 本系列方法本名之前缀+方法本名;
			函数本体 = 本函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);

			方法本名 = '卯';
			方法名 = 本系列方法本名之前缀+方法本名;
			函数本体 = 本函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '壹';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '贰';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '叁';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '肆';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			函数本体 = 公用之最终动作;
			_在给定执行路线上定义一个方法(执行路线, '动作终', 函数本体);

			// console.log(执行路线);
			// console.log(本实验实例);
		}

		function _定义执行路线乙() {
			var 执行路线名 = 执行路线名称之一;



			var 本系列函数之索引 = 执行路线名;
			var 本系列方法本名之前缀 = '动作'+执行路线名;
			var 本函数系列 = 自动生成的多组函数 [ 本系列函数之索引 ];

			var 通用函数系列之索引 = 通用方法名之前缀;
			var 通用函数系列 = 自动生成的多组函数 [ 通用函数系列之索引 ];



			var 执行路线;
			
			if ( ! 为测试之便不隐藏任何方法函数) {
				执行路线 = new 吴乐川的执行路线(本实验实例, 'zh-CN');
			}



			var 方法本名, 方法名, 函数本体;


			方法本名 = '子';
			方法名 = 本系列方法本名之前缀+方法本名;
			函数本体 = 本函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '壹';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '贰';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '叁';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			方法本名 = '肆';
			方法名 = 通用方法名之前缀+方法本名;
			函数本体 = 通用函数系列 [ 方法本名 ];
			_在给定执行路线上定义一个方法(执行路线, 方法名, 函数本体);



			函数本体 = 公用之最终动作;
			_在给定执行路线上定义一个方法(执行路线, '动作终', 函数本体);

			// console.log(执行路线);
			// console.log(本实验实例);
		}
	}





	function 实验针对(实验对象) { // 实验全过程
		// console.log(实验对象);

		var 实验对象之称呼 = '某测试对象';
		var 话术之调用某某方法之后 = '调用之后：';
		var 方法名;


		console.group('起初:');
		列示某对象目前所有方法函数(实验对象, 实验对象之称呼);
		console.groupEnd();


		方法名 = '动作甲子';
		实验对象 [ 方法名 ] (); // 调用之
		console.group('【'+方法名+'】'+话术之调用某某方法之后);
		列示某对象目前所有方法函数(实验对象, 实验对象之称呼);
		console.groupEnd();


		方法名 = '动作甲丑';
		实验对象 [ 方法名 ] (); // 调用之
		console.group('【'+方法名+'】'+话术之调用某某方法之后);
		列示某对象目前所有方法函数(实验对象, 实验对象之称呼);
		console.groupEnd();


		方法名 = '动作序列：甲寅 > 甲卯 > 通用壹 > 通用二 > 通用叁';
		实验对象 [ '动作甲寅' ] (); // 调用之
		实验对象 [ '动作甲卯' ] (); // 调用之
		实验对象 [ '通用动作壹' ] (); // 调用之
		实验对象 [ '通用动作贰' ] (); // 调用之
		实验对象 [ '通用动作叁' ] (); // 调用之
		console.group('【'+方法名+'】'+话术之调用某某方法之后);
		列示某对象目前所有方法函数(实验对象, 实验对象之称呼);
		console.groupEnd();


		// 方法名 = '动作乙子';
		// 实验对象 [ 方法名 ] (); // 调用之
		// console.group('【'+方法名+'】'+话术之调用某某方法之后);
		// 列示某对象目前所有方法函数(实验对象, 实验对象之称呼);
		// console.groupEnd();
	}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = WulechuanApplyOneStageOneMethodProgrammingPatternToMethodsOwner;

	/**
	 * @author 吴乐川 <wulechuan@live.com>
	 * 
	 * ----- readme start -----
	 * 
	 * # npm
	 * 
	 * [@wulechuan/apply-one-stage-one-method-pattern](https://www.npmjs.com/package/@wulechuan/apply-one-stage-one-method-pattern)
	 * 
	 * 
	 * 
	 * # 介绍
	 * 
	 * 凡由本类构建的实例对象，可用于将本人设计的一种程序设计模式应用至另一“受体（target）”对象。
	 * “受体”因而被改造，其各个所涉及之方法函数均被依次对应于各自的所谓“执行阶段”，亦可称“步骤”，
	 * 每个方法函数对应一个步骤。
	 * 自此时起，仅第一个步骤所对应的方法函数被公开（或称“曝露”），
	 * 其余后续步骤之方法函数均被隐藏，直至各自前导执行阶段完成，这些方法函数才会陆续公开。
	 * 
	 * 任何“步骤，凡非最终者，其对应之方法函数均返回“受体”对象本身，以实现对其各个方法函数的链式调用；
	 * 而最末步骤则负责返回程序作者对执行整个执行链所期望之结果。
	 * 
	 * 某些步骤允许被设置为“可省略”，或称“可跳过”。不可省略的步骤则可称为“必经”步骤。
	 * 每当“执行链”行至这些可省略的步骤的前一步骤时，凡代表这些可省略步骤后第一个必经步骤之方法函数
	 * 亦被一通曝露，否则，“可跳过”步骤名不副实。
	 * 最末步骤则为特例，因其负责返回执行链之结果。何况，“曝露其后续步骤”亦无从谈起。
	 * 例如：
	 * @example
	 * 	设有“步骤丙”、“步骤丁”及“步骤戊”三者，其中丁为“可省略”步骤，其余两者为“必经”步骤。
	 * 	则，当丙结束时，非但代表丁的方法函数会被曝露，戊之对应方法函数亦会一同被曝露。
	 * 
	 * 一言以蔽之，大体上，不执行完早期方法函数，则后续方法函数是隐藏的，无从执行。据此，各个方法之调用次序无从违背。
	 * 
	 * 此番改造之根本目的在于，将传统的形如：“
	 * @example
	 * 	var 结果 = 对象.传统方法函数(参数子, 参数丑, 参数寅);
	 * 
	 * ”之调用方式，转变为我之特色方式，形如：“
	 * @example
	 * 	var 结果 = 对象.方法函数甲(参数子).方法函数乙(参数丑).方法函数丙(参数寅)；
	 * 
	 * ”，并建议（但不强迫）每个阶段仅接受至多一个参数。
	 * 此方式亦有助于构造更为逼近自然语言之计算机程序语句。
	 * 例如：
	 * @example
	 * 	var 礼物 = 我.掏出钥匙(钥匙实例).解锁自行车(自行车实例).骑行至(目的地).获取礼物自(赠与人);
	 * 
	 * 在上例中，依据“不执行完早期方法函数，则后续方法函数无从执行”之规则，
	 * 客户程序调用对象“我”之方法函数时，不允许违背规定顺序。
	 * 若不调用“解锁自行车”，或虽调用但有错误抛出，则无法进入“骑行至”方法函数。
	 * 假定其中“获取礼物自”方法函数，是应用该程序设计模式时最末添加的阶段所对应之方法，
	 * 那么，该原始方法函数之返回值回被传递并最终返回至“外界”；
	 * 而其余各阶段则之原始函数的返回值均会被忽略于调用链内部。
	 * 
	 * 该模式可应用于所谓“普通对象”，诸如“明文对象（一译‘字面量对象’）”、JSON等。
	 * 而将该程序设计模式应用于“类”之定义内（针对JavaScript，亦即应用于另一个函数内部），
	 * 作用于“this”对象，似乎是更为常见、实用之用法。亦即，每一个有此“类”构建之实例对象
	 * 均会被视为“受体”。见例。
	 * 
	 * 另，倘若将整条执行链称为“执行路线”，我认为，对于任何“受体”，
	 * 完全可以为其构建多条执行路线，而不仅限于一条。
	 * 由于执行线路不可中断，否则无从返回结果；
	 * 何况每当从新的“路线”之首个阶段开始执行时，执行“现状”会被重新配置，没有干扰。
	 * 因此，多条执行线路不会互相干涉，即便它们共用某些方法函数。
	 * 
	 * 
	 * 
	 * # Introduction
	 * 
	 * Instances of this helper class is to apply a programming pattern design by me
	 * to a given object.
	 * The object is thus decorated, so that, all involved methods of the object
	 * are mapped into so-called stages, each method a stage.
	 * And from then on, only the first method is exposed.
	 * All other methods are hidden untill the first method gets invoked and not thrown.
	 * 
	 * Any stage other than the last one, when invoked,
	 * returns the instance itself, so that we can chain the invocations.
	 * This way we can easily design natural-language-like invocation chain.
	 * 
	 * All stages might be configured as skippable, a.k.a. optional.
	 * While for the last stage, this configuration is simply ignored.
	 * Cause anyway we need to invoke it to return what we want.
	 * 
	 * The purpose of applying such a pattern to a given object,
	 * is to change the traditional statement like:
	 * @example
	 * 	var result = anObject.traditionalMethod(arg1, arg2, arg3);
	 * 
	 * into another format as:
	 * @example
	 * 	var result = anObject.methodA(arg1).methodB(arg2).methodC(arg3);
	 * 
	 * I also suggest but not force to take at most only one argument per stage method.
	 * Besides, this is a good way, I personally think,
	 * to help making computer programming statements
	 * look more like natrual language sentences.
	 * 
	 * Let''s take another example:
	 * @example
	 * 	var gift = I
	 * 		.drawOutKey(theKeyInstance)
	 * 		.unlockBike(theBikeInstance)
	 * 		.driveTo(destination)
	 * 		.acceptGiftFrom(anotherPerson);
	 * 
	 * In the example above, the custom program that consumes the object "I"
	 * is *NOT* able to invoke methods of the "I" disobeying the pre-designed order.
	 * Before the invocation of the "unlockBike" method, the subsequence ones
	 * such as "driveTo" are not even available to the program.
	 * Also, assuming the "acceptGiftFrom" method happens to be the last one that is
	 * added as a stage, then the returning value, no matter what it is,
	 * will be transferred to the "outside world", which is the custom program mentioned above.
	 * While those returning values of any other methods are simply ignored
	 * inside of the invokaction chain scopes.
	 * 
	 * This pattern can be applied to any object, such as an object literal, a JSON, etc.
	 * While using it inside the definition of a class(a function), applying it to the "this"
	 * object might be a more useful use case, I guess.
	 * Since that way, each and every instance of the class is automatically decorated.
	 * 
	 * If we call the execution chain a "route", we can expect that multiple routes being
	 * applied to a single object at the same time is allowed and safe.
	 * Because the execution should not exit in the half way, otherwise nothing is able to return.
	 * Plus each time we start a route, the situation we are in is initialized to be clean.
	 * So multiple routes will not disturb each other at all, even if they might share same methods.
	 * 
	 * 
	 * 
	 * 
	 * # 较完整的范例 (Examples)
	 * 
	 * ## 基本用法 (Basics)
	 * @example
	 * 	function Soldier() {
	 * 
	 * 		var stagesBuilder = new WulechuanApplyOneStageOneMethodProgrammingPatternToMethodsOwner(this);
	 * 
	 * 		stagesBuilder.addStage(methodAsStage1, true, {
	 * 			'zh-CN': [ '第一步', '预备', '准备' ],
	 * 			'en-US': [ 'prepare', 'getReady', 'methodAsStage1', 'firstOfAll' ]
	 * 		});
	 * 
	 * 		stagesBuilder.addStage(shoot, true, {
	 * 			'zh-CN': [ '发射子弹', '开火', '开火！' ],
	 * 			'en-US': [ 'shoot', 'shootThem', 'fire' ]
	 * 		});
	 * 
	 * 
	 * 
	 * 		// This line below is essential and required.
	 * 		stagesBuilder.setPreferredNaturalLanguageTo('zh-CN');
	 * 
	 * 
	 * 
	 * 		function methodAsStage1() {
	 * 			// your statements go here
	 * 		}
	 * 
	 * 		function shoot() {
	 * 			// your statements go here
	 * 		}
	 * 	}
	 * 
	 * 	var firstSoldier = new Soldier;
	 * 	
	 * Now the "firstSoldier" object has only those methods
	 * which are mapped onto the "methodAsStage1" function,
	 * in all three Chinese aliases, of course,
	 * since the usingLanguage has been set to 'zh-CN'.
	 * Those which are mapped onto the "shoot" function
	 * is *NOT* available at this time.
	 * @example
	 * 	firstSoldier.第一步();
	 * 	// In English, this should have been:
	 * 	// firstSoldier.prepare();
	 * 
	 * From now on, the three aliases for the "methodAsStage1"
	 * are hidden (removed from the instance), since the stage1 is now a past stage.
	 * while the three aliases for the "shoot" function are available now.
	 * 
	 * If below were in English: var killedEnemies = firstSoldier.shoot();
	 * @example
	 * 	var killedEnemies = firstSoldier.发射子弹();
	 * 
	 * 
	 * ## 链式调用 (Chaining invocations)
	 * 
	 * Note that:
	 * @example
	 * 	firstSoldier === firstSoldier.第一步() // true
	 * 	firstSoldier === firstSoldier.prepare() // true
	 * 	firstSoldier === firstSoldier.getReady() // true
	 * 	.
	 * 	.
	 * 	.
	 * 
	 * because non-terminal stage methods return the decorared object itself.
	 * 
	 * So we can also do this:
	 * @example
	 * 	var secondSoldier = new Soldier;
	 * 
	 * 	var 被打死的敌人 = secondSoldier.预备().开火！();
	 * 	// If above were in English:
	 * 	// var killedEnemiesBySecondSoldier = secondSoldier.getReady().fire();
	 * 
	 * 
	 * ----- readme end -----
	 * 
	 * 
	 * @param {!object} stagesOperator - The object to apply staged-methods pattern to.
	 */
	function WulechuanApplyOneStageOneMethodProgrammingPatternToMethodsOwner(stageMethodsOwner, initialPreferredLanguage) {
		var methodNames_addStage = [
			'设有步骤',
			'添加步骤',
			'addStage'
		];

		var methodNames_setPreferredNaturalLanguageTo = [
			'优先采用该语言',
			'优先使用该语言',
			'setPreferredNaturalLanguageTo'
		];

		var methodNames_abort = [
			'中止',
			'中断',
			'停止',
			'abort',
			'stop'
		];

		var methodNames_startFromFirstStage = [
			'从头开始',
			'开始',
			'startFromFirstStage',
			'start'
		];





		var thisOperatorOfStages = this;

		var allStages = [];
		var indexOfCurrentStage = NaN;
		var theExecutionIsAborted; // Maybe it's some errors occurred.

		var knownLanguagesSoFar = [];
		var knownLanguagesIndicesSoFar = {}; // Simply for easy avoiding duplications
		var preferredLanguage;


		if (initialPreferredLanguage && typeof initialPreferredLanguage === 'string') {
			preferredLanguage = initialPreferredLanguage;
		} 

		_exposeMethodsOfTheOperatorItsOwn(
			addFirstStage,
			methodNames_addStage
		);

		_exposeMethodsOfTheOperatorItsOwn(
			setPreferredNaturalLanguageTo,
			methodNames_setPreferredNaturalLanguageTo
		);

		_exposeMethodsOfTheOperatorItsOwn(
			abort,
			methodNames_abort
		);





		function _isAUsableArray(subject) {
			return Array.isArray(subject) && subject.length > 0;
		}


		/**
		 * Expose a method via several alias on the operator its own,
		 * instead of a method on the target object to operate on.
		 * @param {!function} _methodFunction 
		 * @param {!array} _methodAliases 
		 */
		function _exposeMethodsOfTheOperatorItsOwn(_methodFunction, _methodAliases) {
			for (var _i=0; _i<_methodAliases.length; _i++) {
				var _alias = _methodAliases[_i];
				thisOperatorOfStages[_alias] = _methodFunction;
			}
		}

		function _hideMethodsOfTheseAliases(_methodAliases) {
			for (var _i=0; _i<_methodAliases.length; _i++) {
				var _alias = _methodAliases[_i];
				if (thisOperatorOfStages[_alias]) {
					delete thisOperatorOfStages[_alias];
				}
			}
		}


		/**
		 * 
		 * @param {!object} stageAction - A function that will be added to the operator as its method at correct stage.
		 * @param {?boolean} isAnOptionalStage - True means the stage being added is an optional stage, so that the method
		 * 	after this optional stage should also be exposed at the previous stage of this optional stage.
		 * @param {!object} actionAliases - An object that takes several arrays, each contains aliases in a specific language.
		 * -	@param {!array} actionAliases[languageCode1] - An array that contains aliases of the method that presenting a stage, in a specific language.
		 * -	@param {?array} actionAliases[languageCode2] - An array that contains aliases of the method that presenting a stage, in a specific language.
		 * -	@param {?array} actionAliases['zh-CN'] - An array that contains aliases of the method that presenting a stage, in Chinese.
		 */
		function addOneStageToTargetObject(stageAction, thisStageCanBeSkipped, actionAliasesInAllLanguages) {
			if (typeof stageAction !== 'function') {
				throw TypeError(
					'A so-called stage is basically a function, '+
					'with some associated aliases just for conveniences, '+
					'which not only does some demonded work '+
					'but also exposes subsequence stages '+
					'and hides past stages for a given stages operator. '+
					'Among them, the demonded work is provided by you developer via the first argument, '+
					'So, when defining a stage, the first argument must be a function, '+
					'\nwhile the provided value was of type "'+typeof stageAction+'".'
				);
			}


			if (arguments.length === 2) {
				actionAliasesInAllLanguages = thisStageCanBeSkipped;
				thisStageCanBeSkipped = false;
			}


			var examinedAliasesInAllLanguages =
				// This line below might throw an error if the provided actionAliases is not valid.
				_examineProvidedActionAliases(actionAliasesInAllLanguages);


			var indexOfThisNewStage = allStages.length;

			examinedAliasesInAllLanguages.stageIndex = indexOfThisNewStage;
			examinedAliasesInAllLanguages.usingLanguage = '';

			var newStage = {
				actionAliases: examinedAliasesInAllLanguages,
				allowsToSkip: thisStageCanBeSkipped,
				action: function () {
					if (theExecutionIsAborted) {
						if (indexOfThisNewStage === allStages.length-1) {
							return; // Return undefined if errors occured. Need more think.
						} else {
							return stageMethodsOwner;
						}
					}

					indexOfCurrentStage = indexOfThisNewStage;
					var resultOfTheStageAction = stageAction.apply(stageMethodsOwner, arguments);

					_modifyMethodsOwnerByExposingOrHidingSomeMethods();

					if (indexOfThisNewStage === allStages.length-1) {
						// The final result of the actions chain is really what we want.
						return resultOfTheStageAction;
					} else {
						// Must return the {stagesOperator} for chaining steps,
						// even if errors occur inside the action, as long as nothing get thrown.
						return stageMethodsOwner;
					}
				}
			};

			allStages.push(newStage);

			return newStage;
		}

		function addFirstStage(/* stageAction, thisStageCanBeSkipped, actionAliasesInAllLanguages */) {
			theExecutionIsAborted = false;
			addOneStageToTargetObject.apply(thisOperatorOfStages, arguments);

			_exposeMethodsOfTheOperatorItsOwn(
				addOneStageToTargetObject,
				methodNames_addStage
			);

			_tryToExposeFirstStageSoThatTheTargetIsUsable();
		}

		function _examineProvidedActionAliases(actionAliasesInAllLanguages) {
			var examinedAliases = {};

			var errorMessage1 = 'At least one alias is required for a stage action to publish as a method.';
			var atLeastOneValidAliasIsProvided = false;

			if (typeof actionAliasesInAllLanguages === 'string') {
				if ( ! actionAliasesInAllLanguages) {
					throw RangeError('An alias for a method must not be an empty string');
				}

				if ( ! preferredLanguage) {
					throw TypeError(
						'Before the preferred language is set, '+
						'the language an alias of a method is in must be specified explicitly.'
					);
				}

				var _tempAliasesSettings = {};
				_tempAliasesSettings[preferredLanguage] = [actionAliasesInAllLanguages];
				actionAliasesInAllLanguages = _tempAliasesSettings;
			} else if ( ! actionAliasesInAllLanguages || typeof actionAliasesInAllLanguages !== 'object') {
				throw TypeError(
					'The action aliases argument must be an object, '+
					'containing at least one alias which is marked as in a specified language.'
				);
			}

			for (var language in actionAliasesInAllLanguages) {
				var actionAliasesInASpecificLanguage = actionAliasesInAllLanguages[language];

				if (actionAliasesInASpecificLanguage && typeof actionAliasesInASpecificLanguage === 'string') {
					actionAliasesInASpecificLanguage = [actionAliasesInASpecificLanguage];
					actionAliasesInAllLanguages[language] = actionAliasesInASpecificLanguage;
				}

				if ( ! _isAUsableArray(actionAliasesInASpecificLanguage)) continue;

				var validEntries = [];
				for (var _i=0; _i<actionAliasesInASpecificLanguage.length; _i++) {
					var entry = actionAliasesInASpecificLanguage[_i];
					if (entry && typeof entry === 'string') {
						validEntries.push(entry);
					}
				}

				if (validEntries.length < 1) {
					console.warn('Non of the entries in language "'+language+'" are valid.');
					continue;
				}

				atLeastOneValidAliasIsProvided = true;
				examinedAliases[language] = validEntries;

				var isAnUnknownLanguage = ! knownLanguagesIndicesSoFar[language];
				if (isAnUnknownLanguage) {
					knownLanguagesSoFar.push(language);
					knownLanguagesIndicesSoFar[language] = true;
				}
			}

			if ( ! atLeastOneValidAliasIsProvided) {
				throw TypeError(errorMessage1);
			}

			return examinedAliases;
		}

		function _getActionAliasesBetterInThisLanguage(actionAliasesInAllLanguages, _preferredLanguage) {
			var foundActionAliases = actionAliasesInAllLanguages[_preferredLanguage];
			if (_isAUsableArray(foundActionAliases)) {
				actionAliasesInAllLanguages.usingLanguage = _preferredLanguage;
				return foundActionAliases;
			}

			var aValidAlternativeHasBeenFound = false;
			var language;
			for (language in actionAliasesInAllLanguages) {
				foundActionAliases = actionAliasesInAllLanguages[language];
				if (_isAUsableArray(foundActionAliases)) {
					aValidAlternativeHasBeenFound = true;
					actionAliasesInAllLanguages.usingLanguage = language;
					break;
				}
			}

			if ( ! aValidAlternativeHasBeenFound) {
				throw ReferenceError(
					'No valid aliases in any language for stage '+
					actionAliasesInAllLanguages.stageIndex+
					'!'
				);
			}

			console.warn('For stage', actionAliasesInAllLanguages.stageIndex,
				', none of the aliases is in the preferred language ("'+_preferredLanguage+'").',
				'\nInstead, aliases in "'+language+'" are exposed as methods.'
			);

			return foundActionAliases;
		}

		function setPreferredNaturalLanguageTo(language) {
			if ( ! language || typeof language !== 'string') {
				throw TypeError('Must specify the natural language to use.');
			}
			preferredLanguage = language;
			_tryToExposeFirstStageSoThatTheTargetIsUsable();
		}

		function startFromFirstStage() {
			allStages[0].action.apply(stageMethodsOwner, arguments);
		}

		function abort() {
			if (indexOfCurrentStage >= 0) {
				theExecutionIsAborted = true;
				console.error('The process is stopped at stage', indexOfCurrentStage);
			} else {
				console.info('The execution process has not started yet.');
			}
		}

		function _modifyMethodsOwnerByExposingOrHidingSomeMethods() {
			_hideMethodsOfAllPastOrSkippedStagesIncludingCurrentStage();
			_exposeMethodsOfAllStagesTillFirstRequiredStageStartingWithIndex(indexOfCurrentStage+1);
		}

		function _hideMethodsOfAllPastOrSkippedStagesIncludingCurrentStage() {
			for (var si = 0; si <= indexOfCurrentStage; si++) {
				var stage = allStages[si];
				var actionAliasesInAllLanguages = stage.actionAliases;
				var actionAliasesInActuallyUsingLanuage =
					actionAliasesInAllLanguages[actionAliasesInAllLanguages.usingLanguage];

				for (var ai = 0; ai < actionAliasesInActuallyUsingLanuage.length; ai++) {
					var alias = actionAliasesInActuallyUsingLanuage[ai];
					delete stageMethodsOwner[alias];
				}
			}
		}

		function _tryToExposeFirstStageSoThatTheTargetIsUsable() {
			if (allStages.length < 1) return;
			if ( ! preferredLanguage) return;

			// Expose the method of the first stage with the common name,
			// a.k.a. the "startFromFirstStage" according to the default configuration.
			_exposeMethodsOfTheOperatorItsOwn(startFromFirstStage, methodNames_startFromFirstStage);

			// Also expose it with aliases.
			_exposeMethodsOfStagesWithIndexBetween(0, 1);
		}

		function _exposeMethodsOfAllStagesTillFirstRequiredStageStartingWithIndex(startingStageIndex) {
			var endingExclusiveStageIndex = allStages.length;

			var si, stage;
			for (si = startingStageIndex; si < allStages.length-1; si++) {
				stage = allStages[si];
				if ( ! stage.allowsToSkip) {
					endingExclusiveStageIndex = si+1;
					break;
				}
			}

			_exposeMethodsOfStagesWithIndexBetween(startingStageIndex, endingExclusiveStageIndex);
		}

		function _exposeMethodsOfStagesWithIndexBetween(startingStageIndex, endingExclusiveStageIndex) {
			for (var si = startingStageIndex; si < endingExclusiveStageIndex; si++) {
				var stage = allStages[si];

				var actionToExpose = stage.action;

				var actionAliasesInActuallyUsingLanuage =
					_getActionAliasesBetterInThisLanguage(stage.actionAliases, preferredLanguage);

				for (var ai = 0; ai < actionAliasesInActuallyUsingLanuage.length; ai++) {
					var alias = actionAliasesInActuallyUsingLanuage[ai];
					stageMethodsOwner[alias] = actionToExpose;
				}
			}
		}
	}

/***/ })
/******/ ]);