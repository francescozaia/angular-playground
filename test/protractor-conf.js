exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8086/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
