'use strict';

describe('MultinationalProfile', function() {
  var page;
  var searchPage;

  beforeEach(function() {
    searchPage = require('./multinationalSearch.po');
    page = require('./multinationalProfile.po');

    browser.get('#/mtns');

    searchPage.searchResults.then(function(items) {
      items[1].element(by.css('#name')).click()
    });
  });


  describe('Overview', function() {
    it("should display the logo", function() {
      expect(page.overview.isElementPresent(by.css('.logo'))).toBe(true);
    });


    it('should display the name', function() {
      expect(page.overview.getText()).toContain('Microsoft');
    });

    it('should display the tagline', function() {
      expect(page.overview.getText()).toContain('Microsoft, a software corporation, develops licensed and support products and services ranging from personal use to enterprise application.');
    });

    it('should display the description', function() {
      expect(page.overview.getText()).toContain('Our mission is to empower every person and every organization on the planet to achieve more. Our strategy is to build best-in-class platforms and productivity services for a mobile-first, cloud-first world. Our ambitions are to reinvent productivity & business processes, build the intelligent cloud platform and to create more personal computing.');
    });
  });

  describe('Details', function() {
    it('should display HQ', function() {
      expect(page.details.getText()).toContain('Redmond, WA');
    });
    it('should display EMEA HQ in Ireland', function() {
      expect(page.details.getText()).toContain('Yes');
    });
    it('should display Irish Office Location', function() {
      expect(page.details.getText()).toContain('Block B, Atrium Building, Sandyford Industrial Estate, Carmangall Road, Dublin 18');
    });
    xit('should display Restricted Contact Option', function() {
      // (Requires login by LinkedIn)
      expect(page.details.getText()).toContain('');
    });
    it('should display Employees in Ireland', function() {
      expect(page.details.getText()).toContain('1646');
    });
    it('should display Functions in Ireland', function() {
      expect(page.details.getText()).toContain('Sales, Customer Service, Finance, Legal, Server Infrastructure, Engineering, Marketing, Research and Development, Manufacturing, Operations, Product Development');
    });
    it('should display Event Space', function() {
      expect(page.details.getText()).toContain('Yes');
    });
    it('should display Event Space Qualifiers', function() {
      expect(page.details.getText()).toContain('');
    });
    it('should display Next event', function() {
      expect(page.details.getText()).toContain('');
    });

    // TODO: test contact logos (facebook, twitter, linkedin)

  });

  describe('Startup package', function() {
    it("should display the startup package details", function() {
      expect(page.startupPackages.getText()).toContain('BizSpark is available to startups that are privately held, less than 5-years-old and earn less than $1M in annual revenue.');
      expect(page.startupPackages.getText()).toContain('BizSpark Plus is Microsoft’s program for mature startups who have been nominated for BizSpark Plus by Microsoft accelerator partners.');
    });
  });

});

