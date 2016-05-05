'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.clearFilters = element(by.id('clear-filters'));
  this.emeaHeadquarterFilter = element(by.id('emea-hq'));
  this.startUpPackageFilter = element(by.id('startup-packages'));
  this.employeesFilter = element(by.id('employees'));
  this.eventSpaceFilter = element(by.id('events-space'));

  this.functionsInIrelandButton = element(by.className('multiselect-dropdown-button'));
  this.financeCheckbox = element.all(by.name("filterCheckbox")).get(2);

  this.findMultinational = function(multinationalName) {
    return element(by.id(multinationalName + '-item'));
  }
};

module.exports = new SearchPage();
