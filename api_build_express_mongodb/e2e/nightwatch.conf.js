var C = require('./globals').CONSTANTS;

module.exports = {
  src_folders: ['e2e/spec'],
  output_folder: 'e2e/reports',
  custom_assertions_path: ['e2e/custom-assertions'],
  custom_commands_path: ['e2e/custom-commands'],
  page_objects_path: ['e2e/page-objects'],
  globals_path: 'e2e/globals.js',

  selenium: {
    start_process: true,
    server_path: `bin/selenium-server-standalone-${C.SLM_VERSION}.jar`,
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': `bin/chromedriver_${C.PLATFORM}`,
    },
  },

  test_settings: {
    default: {
      launch_url: `http://${C.APP_HOST}:${C.APP_PORT}`,
      selenium_port: C.SLM_PORT,
      selenium_host: C.SLM_HOST,
      silent: true,
      screenshots: {
        enabled: false,
        on_failure: true,
        on_error: false,
        path: './failed-screenshots',
      },
      request_timeout_options: {
        timeout: 2 * C.LONG_WAIT,
        retry_attempts: 5,
      },
      desiredCapabilities: {
        loggingPrefs: {
          browser: 'ALL',
        },
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['--no-sandbox'],
        },
      },
      end_session_on_fail: false,
    },

    // firefox: {
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //     javascriptEnabled: true,
    //     acceptSslCerts: true,
    //   },
    // },
  },
};
