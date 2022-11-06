const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bgkyxs",
  "chromeWebSecurity": false,
  "experimentalStudio": true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
