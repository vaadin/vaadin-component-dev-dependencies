const merge = require('deepmerge');

const USING_TRAVIS = Boolean(process.env.TRAVIS);
const USING_SAUCE = process.env['TEST_PLATFORM'] === 'sauce';

const SL_LAUNCHERS = {
  'sl-safari-latest': {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'macOS 10.13',
    version: 'latest'
  },
  'sl-ios-12': {
    base: 'SauceLabs',
    browserName: 'iphone',
    platform: 'OS X 10.13',
    version: '12.2'
  },
  'sl-edge-18': {
    base: 'SauceLabs',
    browserName: 'microsoftedge',
    platform: 'Windows 10',
    version: '18'
  }
};

const HEADLESS_LAUNCHERS = {
  ChromeHeadlessNoSandbox: {
    base: 'ChromeHeadless',
    flags: ['--no-sandbox']
  },
  FirefoxHeadless: {
    base: 'Firefox',
    flags: ['-headless']
  }
};

function determineBrowsers() {
  return [...Object.keys(USING_SAUCE ? SL_LAUNCHERS : HEADLESS_LAUNCHERS)];
}

function createKarmaConfig() {
  let config = {
    singleRun: true,
    browsers: determineBrowsers(),
    customLaunchers: { ...SL_LAUNCHERS, ...HEADLESS_LAUNCHERS },
    frameworks: ['esm', 'mocha', 'sinon-chai', 'source-map-support'],
    files: [
      {
        pattern: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
        watched: false
      },
      {
        pattern: 'test/unit/*.test.ts',
        type: 'module'
      }
    ],
    reporters: ['dots', 'coverage-istanbul'],
    port: 9876,
    colors: true,

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: 'coverage',
      combineBrowserReports: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        global: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
      }
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      },
      chai: {
        includeStack: true
      }
    },

    browserDisconnectTimeout: 180000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 180000,
    captureTimeout: 180000,
    concurrency: 3,

    plugins: [
      // load plugin
      require.resolve('@open-wc/karma-esm'),

      // fallback: resolve any karma- plugins
      'karma-*'
    ],

    esm: {
      coverage: true,
      babel: true,
      nodeResolve: true,
      fileExtensions: ['.ts'],
      babelModernExclude: [
        '**/node_modules/sinon/**/*',
        '**/node_modules/mocha/**/*',
        '**/node_modules/chai/**/*',
        '**/node_modules/sinon/chai/**/*'
      ]
    }
  };

  if (USING_SAUCE) {
    config = {
      ...config,
      sauceLabs: {
        testName: 'Vaadin component tests',
        recordVideo: false,
        recordScreenshots: false,
        idleTimeout: 600,
        commandTimeout: 600,
        maxDuration: 5400,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY
      },
      concurrency: 10,
      transports: ['polling'],
      browserDisconnectTolerance: 3,
      reporters: ['dots', 'mocha']
    };

    if (USING_TRAVIS) {
      config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    }
  }

  return config;
}

module.exports = {
  createKarmaConfig,
  merge
};
