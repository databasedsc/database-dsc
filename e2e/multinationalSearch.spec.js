'use strict';

describe('SearchResults', function() {
  var page,
      profilePage;

  beforeEach(function() {
    browser.get('#/mtns');
    page = require('./multinationalSearch.po');
  });

  it('should display result list', function() {
    expect(page.searchResultsContainer.isPresent()).toBe(true);
  });

  it('should display result list with 5 multinationals', function() {
    expect(page.searchResults.count()).toEqual(5);
  });

  describe('search form', function() {
    beforeEach(function() {
      browser.get('#/mtns').then(function () {
        // There's a PhantomJS issue that prevent the browser from clicking some element.
        // Resizing the window fix it .https://github.com/ariya/phantomjs/issues/11637
        browser.manage().window().maximize();
      });
      page = require('./multinationalSearch.po');
    });

    describe('search field', function() {
      it('should display name, logo and short description when searched by multinational name', function() {
        page.searchField.sendKeys("Facebook");
        page.searchField.sendKeys(protractor.Key.ENTER);

        page.searchResults.then(function(items) {
          expect(items.length).toEqual(1);
          expect(items[0].element(by.css('.name')).getText()).toEqual("Facebook");
          expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
          expect(items[0].element(by.css('.short-desc')).getText()).toEqual("Facebook is an online social networking service that enables its users to connect with friends and family as well as make new connections.");
        });
      });

      it('should display the specific companies searched by the different keywords', function() {
        // Short Description
        page.searchField.sendKeys("Social Networking");
        page.searchField.sendKeys(protractor.Key.ENTER);

        expect(page.searchResultsContainer.getText()).toContain('Facebook');
        expect(page.searchResultsContainer.getText()).not.toContain('Microsoft');

        // Headquarters
        page.searchField.clear().sendKeys("Redmond").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('Microsoft');
        expect(page.searchResultsContainer.getText()).not.toContain('Facebook');

        // Local Office
        page.searchField.clear().sendKeys("Le Pole House").sendKeys(protractor.Key.ENTER);
        expect(page.searchResultsContainer.getText()).toContain('SquareSpace');
        expect(page.searchResultsContainer.getText()).not.toContain('Microsoft');
      });
    });

    describe('search filters', function() {

      it("should filter search results using drop-downs for string filters", function() {
        page.emeaHeadquarterFilter.element(by.xpath("//select[@id='emea-hq']//option[@value='Yes']")).click();
        expect(page.searchResults.count()).toEqual(3);
      })

      it("should filter search results using drop-downs for numerical filters", function() {
        page.employeesFilter.element(by.cssContainingText('option', '101-250')).click();
        expect(page.searchResults.count()).toEqual(1);
      });

      it('should clear filters', function() {

        // filter by emea hq in ireland
        page.emeaHeadquarterFilter.element(by.xpath("//select[@id='emea-hq']//option[@value='Yes']")).click();
        expect(page.searchResults.count()).toEqual(3);
        // perform reset
        page.clearFilters.click();
        expect(page.searchResults.count()).toEqual(5);

        // filter by startup package
        page.startUpPackageFilter.element(by.xpath("//select[@id='startup-packages']//option[@value='Yes']")).click();
        expect(page.searchResults.count()).toEqual(3);
        // perform reset
        page.clearFilters.click();
        expect(page.searchResults.count()).toEqual(5);

        // filter by employees in ireland
        page.employeesFilter.element(by.cssContainingText('option', '101-250')).click();
        expect(page.searchResults.count()).toEqual(1);
        // perform reset
        page.clearFilters.click();
        expect(page.searchResults.count()).toEqual(5);

        // filter by events space
        page.eventSpaceFilter.element(by.xpath("//select[@id='events-space']//option[@value='No']")).click();
        expect(page.searchResults.count()).toEqual(2);
        // perform reset
        page.clearFilters.click();
        expect(page.searchResults.count()).toEqual(5);

        // filter by functions in ireland
        page.functionsInIrelandButton.click();
        page.financeCheckbox.click();
        expect(page.searchResults.count()).toEqual(3);
        // perform reset
        page.clearFilters.click();
        expect(page.searchResults.count()).toEqual(5);
      });
    })

  });

});
