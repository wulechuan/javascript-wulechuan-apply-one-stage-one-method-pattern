const productionSourceGlobJs = ['source/**/*.js'];
const productionBuildFolder = 'build';

const allSourceGlobsToWatch = productionSourceGlobJs;

const globsToClearBeforeRebuilding = [
	productionBuildFolder
];





const gulp = require('gulp');
const runTasksInSequence = require('gulp-sequence');
const deleteFiles = require('del');
const renameFiles = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const pump = require('pump');




(function 定义针对脚本的任务() {
	gulp.task('build: js: chief', (thisTaskIsDone) => {
		var actionsToTake = [];

		actionsToTake.push(gulp.src(productionSourceGlobJs));
		actionsToTake.push(minifyJs());
		actionsToTake.push(renameFiles({
			suffix: '.min'
		}));
		actionsToTake.push(gulp.dest(productionBuildFolder));

		pump(actionsToTake, thisTaskIsDone);
	});

	gulp.task('build: js: all', (thisTaskIsDone) => {
		runTasksInSequence(
			'build: js: chief'
		)(thisTaskIsDone);
	});
})();



(function 定义二级公共任务() {
	gulp.task('clear old build', () => {
		return deleteFiles(globsToClearBeforeRebuilding);
	});

	gulp.task('build: all', (thisTaskIsDone) => {
		var tasksToRun = [
			'clear old build',
			[
				'build: js: all'
			]
		];

		runTasksInSequence.apply(null, tasksToRun)(thisTaskIsDone);
	});

	gulp.task('watch', [], () => {
		return gulp.watch(allSourceGlobsToWatch, ['build: all']);
	});
})();


(function 定义所谓顶级任务() {
	gulp.task('default', (thisTaskIsDone) => {
		runTasksInSequence('build: all', 'watch')(thisTaskIsDone);
	});
})();