'use strict';

describe('InvestorProfile', function() {
  var page;
  var searchPage;

  beforeEach(function() {
    searchPage = require('./investorSearch.po');
    page = require('./investorProfile.po');

    browser.get('#/investors');

    searchPage.findInvestor('frontline-ventures').click();
  });


  describe('Overview', function() {
    it("should display the logo", function() {
      expect(page.overview.isElementPresent(by.css('.logo'))).toBe(true);
    });


    it('should display the name', function() {
      expect(page.overview.getText()).toContain('Frontline Ventures');
    });

    it('should display the tagline', function() {
      expect(page.overview.getText()).toContain('We are a pioneering early-stage venture capital firm, believing in ideas and investing in passion.'.toUpperCase());
    });

    it('should display the description', function() {
      expect(page.overview.getText()).toContain('Frontline Ventures is focused on the needs of the new wave of technology entrepreneurs. They only invest in the best teams, who build capital-efficient businesses in high-growth markets. They build long-term trusted relationships with the people they invest in and seek to develop a community which fosters them and other budding entrepreneurs.');
    });
  });

  xdescribe('Tags', function() {
    it("should display the investor tags", function() {
      expect(page.tags.getText()).toContain('Business Analytics');
      expect(page.tags.getText()).toContain('Application Performance Monitoring');
      expect(page.tags.getText()).toContain('Big Data Analytics');
    });
  });

  describe('Details', function() {
    xit('should display Exits/IPOs', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('');
    });

    it('should display Headquarter', function() {
      expect(page.details.getText()).toContain('London');
    });

    it('should display Founders', function() {
      expect(page.details.getText()).toContain('Shay Garvey');
    });

    xit('should display Founded', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('2010');
    });

    it('should display Funds Raised', function() {
      expect(page.details.getText()).toContain('$54.6m');
    });

    it('should display Type of Fundings', function() {
      expect(page.details.getText()).toContain('Pre-seed, Seed, Series A, Series B');
    });

    xit('should display Investment Size', function() {
      // ???
      expect(page.details.getText()).toContain('100');
    });

    xit('should display Regions', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('Global');
    });

    it('should display Contact', function() {
      expect(page.details.getText()).toContain('info@frontline.vc');
    });

    xit('should display Contact Number', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('');
    });

    xit('should display Deal Structure', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('Complete');
    });

    it('should display Preferred Contact', function() {
      expect(page.details.getText()).toContain('Referral Only');
    });

    it('should display Co-Investors', function() {
      expect(page.details.getText()).toContain('Polaris Partners');
    });

    xit('should display Board Members', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('');
    });

    xit('should display Similar Investors', function() {
      //TODO: No data
      expect(page.details.getText()).toContain('');
    });
  });

  describe('Portfolio', function() {
    it("should display the investor portfolio", function() {

    });
  });

});
