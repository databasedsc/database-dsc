'use strict';

describe('SearchResults', function() {
  var page;

  beforeEach(function() {
    browser.get('#/hubs');
    page = require('./hubSearch.po');
  });

  it('should display result list', function() {
    expect(page.searchResultsContainer.isPresent()).toBe(true);
  });

  it('should display result list with 2 hubs', function() {
    expect(page.searchResults.count()).toEqual(2);
  });

  describe('search form', function() {
    beforeEach(function() {
      browser.get('#/hubs').then(function () {
        // There's a PhantomJS issue that prevent the browser from clicking some element.
        // Resizing the window fix it .https://github.com/ariya/phantomjs/issues/11637
        browser.manage().window().maximize();
      });
      page = require('./hubSearch.po');
    });

    describe('search field', function() {
      it('should display name, logo and short description when searched by hub name', function() {
        page.searchField.sendKeys("NDRC");
        page.searchButton.click();

        page.searchResults.then(function(items) {
          expect(items.length).toEqual(1);
          expect(items[0].element(by.css('#name')).getText()).toEqual("NDRC");
          expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
          expect(items[0].element(by.css('#short-desc')).getText()).toEqual("Making Ventures Happen");
        });
      });

      it('should display the specific hubs searched by the different keywords', function() {
        // Short Description
        page.searchField.sendKeys("Making Ventures Happen");
        page.searchButton.click();

        // Company Name
        page.searchField.clear().sendKeys("NDRC").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('NDRC');
        expect(page.searchResultsContainer.getText()).not.toContain('Dogpatch Labs');

        // Short Description
        page.searchField.clear().sendKeys("Making Ventures").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('NDRC');
        expect(page.searchResultsContainer.getText()).not.toContain('Dogpatch Labs');

        // Programs - No Data
        //page.searchField.clear().sendKeys("Lombard").sendKeys(protractor.Key.ENTER);
        //expect(page.searchResultsContainer.getText()).toContain('Frontline Ventures');
        //expect(page.searchResultsContainer.getText()).not.toContain('Polaris Partners');
      });
    });

    describe('filters', function(){
      //no data
      //TODO: uncomment test when seed data becomes available

      //it("should filter search results using drop-downs for string filters", function() {
      //  page.emeaHeadquarterFilter.element(by.cssContainingText('option', 'Yes')).click();
      //  expect(page.searchResults.count()).toEqual(3);
      //});
      //
      //it("should filter search results using drop-downs for numerical filters", function() {
      //  page.employeesFilter.element(by.cssContainingText('option', '101-250')).click();
      //  expect(page.searchResults.count()).toEqual(1);
      //});

    });

  });

});
