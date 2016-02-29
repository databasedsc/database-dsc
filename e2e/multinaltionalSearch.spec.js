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

  it('should display result list with 3 multinationals', function() {
    expect(page.searchResults.count()).toEqual(3);
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
        page.searchButton.click();

        page.searchResults.then(function(items) {
          expect(items.length).toEqual(1);
          expect(items[0].element(by.css('#name')).getText()).toEqual("Facebook");
          expect(items[0].isElementPresent(by.css('.logo'))).toBe(true);
          expect(items[0].element(by.css('#short-desc')).getText()).toEqual("Facebook is an online social networking service that enables its users to connect with friends and family as well as make new connections.");
        });
      });

      it('should display the specific companies searched by the different keywords', function() {
        // Short Description
        page.searchField.sendKeys("Social Networking");
        page.searchButton.click();

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

  });

});
