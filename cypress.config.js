const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bgkyxs",
  "chromeWebSecurity": false,
  "experimentalStudio": true,
  "screenshotOnRunFailure": true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  env: {
    //externalAPI: 'https://jsonplaceholder.cypress.io/' //
    externalAPI: 'https://jsonplaceholder.typicode.com/'
  },
  e2e: {
    baseUrl:"http://localhost:3000",
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
