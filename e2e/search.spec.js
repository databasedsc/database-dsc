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

  it('should display result list with 9 startups', function() {
    expect(page.searchResults.count()).toEqual(9);
  });
});
