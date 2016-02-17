'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/home');
    page = require('./main.po');
  });

  it('', function() {
    //expect(page.body.getText()).toContain('Dublin Commissioner for Startups Database');
  });
});
