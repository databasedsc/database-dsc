'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.employeesFilter = element(by.id('employees'));
  this.fundingStageFilter = element(by.id('funding-stage'));

  this.findCompany = function(companyName) {
    return element(by.id(companyName + '-item'));
  }
};

module.exports = new SearchPage();
