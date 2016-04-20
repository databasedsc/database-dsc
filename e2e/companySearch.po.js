'use strict';

var SearchPage = function() {
  this.body = element(by.css('body'));
  this.searchResultsContainer = element(by.tagName('search-results'));
  this.searchResults = element.all(by.css('.result-item'));
  this.searchField = element(by.id('search-text-field'));
  this.searchFilters = element.all(by.css('fieldset select'));
  this.clearFilters = element(by.id('clear-filters'));
  this.employeesFilter = element(by.id('employees'));
  this.fundingStageFilter = element(by.id('funding-stage'));
  this.fundingAmountFilter = element(by.id('funding-amount'));
  this.productStageFilter = element(by.id('product-stage'));
  this.businessModelFilter = element(by.id('business-model'));
  this.companyStageFilter = element(by.id('company-stage'));

  this.targetMarketsButton = element(by.className('multiselect-dropdown-button'));
  this.europeCheckbox = element.all(by.name("filterCheckbox")).get(2);

  this.findCompany = function(companyName) {
    return element(by.id(companyName + '-item'));
  }
};

module.exports = new SearchPage();
