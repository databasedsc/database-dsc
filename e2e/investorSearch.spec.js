'use strict';

describe('SearchResults', function() {
  var page;

  beforeEach(function() {
    browser.get('#/investors');
    page = require('./investorSearch.po');
  });

  it('should display result list', function() {
    expect(page.searchResultsContainer.isPresent()).toBe(true);
  });

  it('should display result list with 2 investors', function() {
    expect(page.searchResults.count()).toEqual(2);
  });

  describe('search form', function() {
    beforeEach(function() {
      browser.get('#/investors').then(function () {
        // There's a PhantomJS issue that prevent the browser from clicking some element.
        // Resizing the window fix it .https://github.com/ariya/phantomjs/issues/11637
        browser.manage().window().maximize();
      });
      page = require('./investorSearch.po');
    });

    describe('search field', function() {
      it('should display name, logo and short description when searched by investors name', function() {
        page.searchField.sendKeys("Frontline");
        page.searchButton.click();

        page.searchResults.then(function(items) {
          expect(items.length).toEqual(1);
          expect(items[0].element(by.css('#name')).getText()).toEqual("Frontline Ventures");
          expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
          expect(items[0].element(by.css('#short-desc')).getText()).toEqual("We are a pioneering early-stage venture capital firm, believing in ideas and investing in passion.");
        });
      });

      it('should display the specific companies searched by the different keywords', function() {
        // Short Description
        page.searchField.sendKeys("Social Networking");
        page.searchButton.click();

        // Company Name
        page.searchField.clear().sendKeys("Partners").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Polaris Partners');
        expect(page.searchResultsContainer.getText()).not.toContain('Frontline Ventures');

        // Headquarters
        page.searchField.clear().sendKeys("London").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Frontline Ventures');
        expect(page.searchResultsContainer.getText()).not.toContain('Polaris Partners');

        // Founders
        page.searchField.clear().sendKeys("Arnold").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Polaris Partners');
        expect(page.searchResultsContainer.getText()).not.toContain('Frontline Ventures');

        // Short Description
        page.searchField.clear().sendKeys("believing").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Frontline Ventures');
        expect(page.searchResultsContainer.getText()).not.toContain('Polaris Partners');

        // Irish Office
        page.searchField.clear().sendKeys("Lombard").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Frontline Ventures');
        expect(page.searchResultsContainer.getText()).not.toContain('Polaris Partners');

        // Tags
        page.searchField.clear().sendKeys("Big Data").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Frontline Ventures');
        expect(page.searchResultsContainer.getText()).not.toContain('Polaris Partners');

        // Office Locations
        page.searchField.clear().sendKeys("Winter").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Polaris Partners');
        expect(page.searchResultsContainer.getText()).not.toContain('Frontline Ventures');

      });
    });

    describe('search filters', function() {

      //no data
      //TODO: uncomment test when seed data becomes available

      //it("should filter search results using drop-downs for string filters", function() {
      //  page.dealStructureFilter.element(by.cssContainingText('option', 'Mezzanine'))
      //  expect(page.searchResults.count()).toEqual(3);
      //});

      //it("should filter search results using slider for numerical filters", function() {
      //  page.employeesFilter.element(by.cssContainingText('option', '101-250')).click();
      //  expect(page.searchResults.count()).toEqual(1);
      //});
    })

  });

});
