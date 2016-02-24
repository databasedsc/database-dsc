'use strict';

describe('SearchResults', function() {
  var page;

  beforeEach(function() {
    browser.get('#/');
    page = require('./search.po');
  });

  it('should display result list', function() {
    expect(page.searchResultsContainer).toBeDefined();
  });

  it('should display result list with 10 startups', function() {
    expect(page.searchResults.count()).toEqual(10);
  });

  describe('search form', function() {
    beforeEach(function() {
      browser.get('#/');
      page = require('./search.po');
    });

    describe('search field', function() {
      it('should display name, logo and short description when searched by company name', function() {
        page.searchField.sendKeys("Mustard");
        page.searchButton.click();

        page.searchResults.then(function(items) {
          expect(items.length).toEqual(1);
          expect(items[0].element(by.css('#name')).getText()).toEqual("Mustard");
          expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
          expect(items[0].element(by.css('#short-desc')).getText()).toEqual("The on demand staffing network");
        });
      });

      it('should display the specific companies searched by the different keywords', function() {
        // Short Description
        page.searchField.sendKeys("Real-time log");
        page.searchButton.click();

        expect(page.searchResultsContainer.getText()).toContain('Logentries');
        expect(page.searchResultsContainer.getText()).not.toContain('Mustard');


        // Headquarters
        page.searchField.clear().sendKeys("Cork").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Trustev');
        expect(page.searchResultsContainer.getText()).not.toContain('Mustard');

        // Formerly known as - no values!

        // Founders
        page.searchField.clear().sendKeys("Fogarty").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Mustard');
        expect(page.searchResultsContainer.getText()).not.toContain('Trustev');

        // Categories/Tags/Sector
        page.searchField.clear().sendKeys("Personalization").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Boxever');
        expect(page.searchResultsContainer.getText()).not.toContain('Mustard');

        // Investors
        page.searchField.clear().sendKeys("Stanley").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Boxever');
        expect(page.searchResultsContainer.getText()).not.toContain('CurrencyFair');

        // Office Locations
        page.searchField.clear().sendKeys("Digital Exchange").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Mustard');
        expect(page.searchResultsContainer.getText()).not.toContain('Boxever');

        //Incubator/Accelerator
        page.searchField.clear().sendKeys("NDRC").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Mustard');
        expect(page.searchResultsContainer.getText()).not.toContain('Pointy');
      });
    });

    describe('search filters', function() {

      it('should filter search results using drop-downs for string filters', function() {

        page.searchField.clear().sendKeys("Dublin").sendKeys(protractor.Key.ENTER);
        expect(page.searchResults.count()).toEqual(9);

        page.fundingStageFilter.element(by.cssContainingText('option', 'Series B')).click();
        expect(page.searchResults.count()).toEqual(1);
      });

      it('should filter search results using drop-downs for numerical filters', function() {

        page.searchField.clear().sendKeys("Dublin").sendKeys(protractor.Key.ENTER);
        expect(page.searchResults.count()).toEqual(9);

        page.employeesFilter.element(by.cssContainingText('option', '101-250')).click();
        expect(page.searchResults.count()).toEqual(1);
      });

      it('should filter search results using checkbox', function() {

        page.searchField.clear().sendKeys("customer").sendKeys(protractor.Key.ENTER);
        expect(page.searchResults.count()).toEqual(2);

        element(by.id('Europe')).click();
        expect(page.searchResults.count()).toEqual(1);
      });

    });

  });

});
