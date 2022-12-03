const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs");

module.exports = defineConfig({
  projectId: "bgkyxs",
  "chromeWebSecurity": false,
  "experimentalStudio": true,
  "screenshotOnRunFailure": true,
  experimentalWebKitSupport: true,
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
    baseUrl: "http://localhost:3000",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({ plugins: [createEsBuildPlugin(config)], });
      on('file:preprocessor', bundler);
      allureWriter(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      on("task", {
        myLog(message) {
          console.log(message);
          return `Yelding message: ${message}`;
        },
        countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files.length)
            })
          })
        },
        setHref: (val) => {
          return (href = val)
        },
        getHref: () => {
          return href
        },
      });

      return config;
    },
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}']
  },
});


require('@applitools/eyes-cypress')(module);
