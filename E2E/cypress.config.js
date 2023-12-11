const cucumber = require('cypress-cucumber-preprocessor').default
const report = require('multiple-cucumber-html-reporter');

const { defineConfig } = require("cypress");

module.exports = defineConfig({

  includeShadowDom: true,
  e2e: {
    //baseUrl: 'App URL',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    experimentalModifyObstructiveThirdPartyCode: true,
    
  }
});


report.generate({
  jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  });
