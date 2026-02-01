const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',      //  demo web app
    supportFile: 'cypress/support/e2e.js',     //  support file

    // Folder for screenshots and videos
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    // Capture screenshots on failure
    screenshotOnRunFailure: true,

    // Record video of test runs
    video: true,

    // Optional: Node event listeners for plugins
    setupNodeEvents(on, config) {
    },
  },
});
