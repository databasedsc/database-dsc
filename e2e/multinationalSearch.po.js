'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchButton = element(by.id('search-button'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.emeaHeadquarterFilter = element(by.id('emea-hq'));
  this.employeesFilter = element(by.id('employees'));

  this.findMultinational = function(multinationalName) {
    return element(by.id(multinationalName + '-item'));
  }
};

module.exports = new SearchPage();
