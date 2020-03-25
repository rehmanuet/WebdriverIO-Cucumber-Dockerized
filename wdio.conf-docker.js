exports.config = {

    runner: 'local',
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
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    hostname:'selenium',
    path:'/wd/hub',
    port:4444,
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