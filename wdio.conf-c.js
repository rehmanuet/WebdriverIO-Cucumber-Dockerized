exports.config = {
	runner: 'local',
	// ====================
	// ChromeDriver Runner
	// ====================
	services: ['chromedriver'],
	path: '/',
	specs: ['./features/**/*.feature'],
	exclude: [],
	maxInstances: 10,
	capabilities: [{
		maxInstances: 5,
		browserName: 'chrome',
	}],
	logLevel: "warn",
	outputDir: './logs',
	bail: 0,
	baseUrl: 'http://localhost:8080',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'cucumber',
	reporters: ['allure', 'spec'],
	reporterOptions: {
		allure: {
			outputDir: 'allure-result',
			disableWebdriverStepsReporting: true,
			disableWebdriverScreenshotsReporting: false,
			useCucumberStepReporter: false
		}
	},
	cucumberOpts: {
		requireModule: ['@babel/register'],
		require: ['./features/step_definitions/**/*.js'], // <string[]> (file/dir) require files before executing features
		backtrace: false, // <boolean> show full backtrace for errors
		dryRun: false, // <boolean> invoke formatters without executing steps
		failFast: false, // <boolean> abort the run on first failure
		format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
		colors: true, // <boolean> disable colors in formatter output
		snippets: false, // <boolean> hide step definition snippets for pending steps
		source: true, // <boolean> hide source uris
		profile: [], // <string[]> (name) specify the profile to use
		strict: false, // <boolean> fail if there are any undefined or pending steps
		tagExpression: '', // <string> (expression) only execute the features or scenarios with tags matching the expression
		timeout: 60000, // <number> timeout for step definitions
		ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	},
};