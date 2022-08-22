const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qbhv2o',
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
