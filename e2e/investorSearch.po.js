'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchButton = element(by.id('search-button'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.dealStructureFilter = element(by.id('deal-structure'));

  this.findInvestor = function(investorName) {
    return element(by.id(investorName + '-item'));
  }
};

module.exports = new SearchPage();
