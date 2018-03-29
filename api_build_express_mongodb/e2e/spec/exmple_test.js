module.exports = {
  'Demon test': function(browser) {
    browser.url('https://www.baidu.com').waitForElementVisible('input.s_ipt', 10 * 1000);

    console.log(browser.globals);
    browser.end();
  },
};
