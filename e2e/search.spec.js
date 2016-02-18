'use strict';

describe('SearchResults', function () {
  var page;

  beforeEach(function () {
    browser.get('#/');
    page = require('./search.po');
  });

  it('should display result list', function() {
    expect(page.searchResultsContainer).toBeDefined();
  });

  it('should display result list with 1 startups', function() {
    expect(page.searchResults.count()).toEqual(1);
  });

  describe('search form', function () {
    beforeEach(function () {
      browser.get('#/');
      page = require('./search.po');
    });
    it('should display the specific companies', function() {
      page.searchField.sendKeys("Mustard");
      page.searchButton.click();

      page.searchResults.then(function(items) {
        expect(items[0].element(by.css('#name')).getText()).toEqual("Mustard");
        expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
        expect(items[0].element(by.css('#short-desc')).getText()).toEqual("The on demand staffing network");
      });
    });

  });

});
