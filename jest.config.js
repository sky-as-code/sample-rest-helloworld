module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	reporters: [
		'default',
		['jest-junit', {
			outputDirectory: './output',
			outputName: 'junit.xml',
		}],
	],

	silent: false,
	verbose: true
};
