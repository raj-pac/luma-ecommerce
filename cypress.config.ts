/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(
  on: (arg0: string, arg1: any) => void,
  config: any
) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    video: false,
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://magento.softwaretestingboard.com/",
    env: {
      allureReuseAfterSpec: true,
      USER_EMAIL: "test1234@mailsac.com",
      USER_PASSWORD: "Qwerty1234",
    },
  },
});
