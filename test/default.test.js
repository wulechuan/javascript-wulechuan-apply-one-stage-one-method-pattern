// eslint-disable-next-line
var should = require('should');
var pathTool = require('path');

// var stages = require('@wulechuan/apply-one-stage-one-method-pattern');
var stages = require(pathTool.resolve(
	__dirname,
	'../source',
	'@wulechuan-apply-one-stage-one-method-pattern')
);

describe('an object, which modified by wulechuan methods in stages', () => {
	var objectA = {};
	var objectAOperator = new stages(objectA, 'en-US');


	it('should have no methods', () => {
		objectA.should.not.have.property();
	});


	it('should have single method after first addStage invocation', () => {
		objectAOperator.addStage(function () {
			console.log('Cool action!');
		}, {
			'en-US': 'coolAction'
		});

		objectA.should.have.a.property('coolAction').and.is.a.Function();
	});
});