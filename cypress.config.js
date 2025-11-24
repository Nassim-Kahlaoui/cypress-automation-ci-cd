const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
       projectId: "2vox7w",
    baseUrl: 'https://automationexercise.com',
    specPattern: ['cypress/e2e/**/*.cy.js', 'testapi/**/*.js'],
    retries: 0,
    supportFile: 'cypress/support/e2e.js',
    watchForFileChanges: false,
    downloadsFolder: 'cypress/downloads',
    screenshotOnRunFailure: true,
     pageLoadTimeout: 12000,
     

   viewportWidth: 1920,
   viewportHeight: 1080,

    video: true,

    setupNodeEvents(on, config) {
     
    }
  }
});
