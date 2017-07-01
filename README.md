# 中文介绍

凡由本辅助类构建的实例对象，可用于将本人设计的一种程序设计模式应用至另一“受体”对象。
“受体”因而被改造，所涉及的其各个方法函数均被依次对应于各自的所谓“执行阶段”，亦可称“步骤”，
每个方法函数对应一个步骤。
自此时起，仅第一个步骤所对应的方法函数被公开（或称“曝露”），
其余后续步骤之方法函数均被隐藏，直至各自前导执行阶段完成，这些方法函数才会陆续公开。

任何“步骤，凡非最终者，其对应之方法函数均返回“受体”对象本身，以实现对其各个方法函数的链式调用；
而最末步骤则负责返回程序作者对执行整个执行链所期望之结果。

某些步骤允许被设置为“可省略”，或称“可跳过”。不可省略的步骤则可称为“必经”步骤。
每当“执行链”行至这些可省略的步骤的前一步骤时，凡代表这些可省略步骤后第一个必经步骤之方法函数
亦被一通曝露，否则，“可跳过”步骤名不副实。
最末步骤则为特例，因其负责返回执行链之结果。何况，“曝露其后续步骤”亦无从谈起。
例如：

	设有“步骤丙”、“步骤丁”及“步骤戊”三者，其中丁为“可省略”步骤，其余两者为“必经”步骤。
	则，当丙结束时，非但代表丁的方法函数会被曝露，戊之对应方法函数亦会一同被曝露。

一言以蔽之，大体上，不执行完早期方法函数，则后续方法函数是隐藏的，无从执行。据此，各个方法之调用次序无从违背。

此番改造之根本目的在于，将传统的形如：“

	var 结果 = 对象.传统方法函数(参数子, 参数丑, 参数寅);

”之调用方式，转变为我之特色方式，形如：“

	var 结果 = 对象.方法函数甲(参数子).方法函数乙(参数丑).方法函数丙(参数寅)；

”，并建议（但不强迫）每个阶段仅接受至多一个参数。
此方式亦有助于构造更为逼近自然语言之计算机程序语句。
例如：

	var 礼物 = 我.掏出钥匙(钥匙实例).解锁自行车(自行车实例).骑行至(目的地).获取礼物自(赠与人);

在上例中，依据“不执行完早期方法函数，则后续方法函数无从执行”之规则，
客户程序调用对象“我”之方法函数时，不允许违背规定顺序。
若不调用“解锁自行车”，或虽调用但有错误抛出，则无法进入“骑行至”方法函数。
假定其中“获取礼物自”方法函数，是应用该程序设计模式时最末添加的阶段所对应之方法，
那么，该原始方法函数之返回值回被传递并最终返回至“外界”；
而其余各阶段则之原始函数的返回值均会被忽略于调用链内部。

通常，我建议奖该程序设计模式应用于“类”之定义内（针对JavaScript，亦即应用于另一个函数内部），
以此方式自动改造每一个由该类构造的实例对象。见例。



# Introduction

Instances of this helper class is to apply a programming pattern design by me
to a given object.
The object is thus decorated, so that, all involved methods of the object
are mapped into so-called stages, each method a stage.
And from then on, only the first method is exposed.
All other methods are hidden untill the first method gets invoked and not thrown.

Any stage other than the last one, when invoked,
returns the instance itself, so that we can chain the invocations.
This way we can easily design natural-language-like invocation chain.

All stages might be configured as skippable, a.k.a. optional.
While for the last stage, this configuration is simply ignored.
Cause anyway we need to invoke it to return what we want.

The purpose of applying such a pattern to a given object,
is to change the traditional statement like:

	var result = anObject.traditionalMethod(arg1, arg2, arg3);

into another format as:

	var result = anObject.methodA(arg1).methodB(arg2).methodC(arg3);

I also suggest but not force to take at most only one argument per stage method.
Besides, this is a good way, I personally think,
to help making computer programming statements
look more like natrual language sentences.

Let''s take another example:

	var gift = I
		.drawOutKey(theKeyInstance)
		.unlockBike(theBikeInstance)
		.driveTo(destination)
		.acceptGiftFrom(anotherPerson);

In the example above, the custom program that consumes the object "I"
is *NOT* able to invoke methods of the "I" disobeying the pre-designed order.
Before the invocation of the "unlockBike" method, the subsequence ones
such as "driveTo" are not even available to the program.
Also, assuming the "acceptGiftFrom" method happens to be the last one that is
added as a stage, then the returning value, no matter what it is,
will be transferred to the "outside world", which is the custom program mentioned above.
While those returning values of any other methods are simply ignored
inside of the invokaction chain scopes.

Usually you want to use an instance of this helper class inside another class,
to decorate each and every instance of the later class.

# 较完整的范例（Examples）

## 基本用法 (Basics)

	function Soldier() {

		var stagesBuilder = new WulechuanApplyOneStageOneMethodProgrammingPatternFor(this);

		stagesBuilder.addStage(methodAsStage1, true, {
			'zh-CN': [ '第一步', '预备', '准备' ],
			'en-US': [ 'prepare', 'getReady', 'methodAsStage1', 'firstOfAll' ]
		});

		stagesBuilder.addStage(shoot, true, {
			'zh-CN': [ '发射子弹', '开火', '开火！' ],
			'en-US': [ 'shoot', 'shootThem', 'fire' ]
		});



		// This line below is essential and required.
		stagesBuilder.setPreferredNaturalLanguageTo('zh-CN');



		function methodAsStage1() {
			// your statements go here
		}

		function shoot() {
			// your statements go here
		}
	}

	var firstSoldier = new Soldier;
	
Now the "firstSoldier" object has only those methods
which are mapped onto the "methodAsStage1" function,
in all three Chinese aliases, of course,
since the usingLanguage has been set to 'zh-CN'.
Those which are mapped onto the "shoot" function
is *NOT* available at this time.

	firstSoldier.第一步();
	// In English, this should have been:
	// firstSoldier.prepare();

From now on, the three aliases for the "methodAsStage1"
are hidden (removed from the instance), since the stage1 is now a past stage.
while the three aliases for the "shoot" function are available now.

If below were in English: var killedEnemies = firstSoldier.shoot();

	var killedEnemies = firstSoldier.发射子弹();


## 链式调用 (Chaining invocations)

Note that: 

	firstSoldier === firstSoldier.第一步() // true
	firstSoldier === firstSoldier.prepare() // true
	firstSoldier === firstSoldier.getReady() // true
	.
	.
	.

because non-terminal stage methods return the decorared object itself.

So we can also do this:

	var secondSoldier = new Soldier;

	// If below were in English:
	// var killedEnemiesBySecondSoldier = secondSoldier.getReady().fire();
	var 被打死的敌人 = secondSoldier.预备().开火！();
