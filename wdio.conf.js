exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    runner: 'local',
    path: '/',
    specs: ['./test/**/*.js'],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        outputDir: '.logs',
    }],
    logLevel: 'info',
    outputDir: "./logs",
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-result',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }
    },
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};