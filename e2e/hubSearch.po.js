'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchFilters = element.all(by.css('fieldset select'));

  this.findHub = function(hubName) {
    return element(by.id(hubName + '-item'));
  }
};

module.exports = new SearchPage();
