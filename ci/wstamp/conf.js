"use strict";
require('dotenv').config()

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  params:{
    wstampLogin:{
      username:process.env.WSTAMP_USERNAME,
      password:process.env.WSTAMP_PASSWORD,
    }
  },

  // sauceUser: process.env.SAUCE_USERNAME,
  // sauceKey: process.env.SAUCE_KEY,
  
  // browserstackUser: process.env.BROWSERSTACK_USERNAME,
  // browserstackKey: process.env.BROWSERSTACK_KEY,

  onPrepare: function(){
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {displayStacktrace: true}
    }));
  },

  jasmineNodeOpts:{
    print: function(){}
  },

  framework: 'jasmine',

  // specs: ['chart.spec.js', 'home.spec.js', 'login.spec.js', 'datasets.spec.js'],
  specs: ['home.spec.js'],
  multiCapabilities: [
    {
      browserName: 'chrome',
      version: 55,
      loggingPrefs: {browser: 'SEVERE'}, // added so that real console errors can be easily detected
      shardTestFiles: true,
      maxInstances: 25
    },
  ]
}