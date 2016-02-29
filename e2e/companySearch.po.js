'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchButton = element(by.id('search-button'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.employeesFilter = element(by.id('employees'));
  this.fundingStageFilter = element(by.id('funding-stage'));
};

module.exports = new SearchPage();
