'use strict';

describe('CompanyProfile', function() {
  var page;
  var searchPage;

  beforeEach(function() {
    searchPage = require('./companySearch.po');
    page = require('./companyProfile.po');

    browser.get('#/companies');

    searchPage.findCompany('logentries').click();
  });


  describe('Overview', function() {
    it("should display the logo", function() {
      expect(page.overview.isElementPresent(by.css('.logo'))).toBe(true);
    });

    it('should display the name', function() {
      expect(page.overview.getText()).toContain('Logentries');
    });

    it('should display the tagline', function() {
      expect(page.overview.getText()).toContain('Real-time log management and analytics'.toUpperCase());
    });

    it('should display the description', function() {
      expect(page.overview.getText()).toContain('Logentries is the leading real-time log management and analytics service built for the cloud, making business insights from machine-generated log data easily accessible to development, IT and business operations teams of all sizes. With the broadest platform support and an open API, Logentries brings the value of log-level data to any system, to any team member, and to a community of more than 35,000 worldwide users. While traditional log management and analytics solutions require advanced technical skills to use, and are costly to set-up, Logentries provides an alternative designed for managing huge amounts of data, visualizing insights that matter, and automating in-depth analytics and reporting across its global user community. To sign up for the free Logentries service, visit http://logentries.com');
    });
  });

  describe('Tags', function() {
    it("should display the company tags", function() {
      expect(page.tags.getText()).toContain('Business Analytics');
      expect(page.tags.getText()).toContain('Application Performance Monitoring');
      expect(page.tags.getText()).toContain('Big Data Analytics');
    });
  });

  describe('Details', function() {
    it('should display Acquisitions', function() {
      expect(page.details.getText()).toContain('Acquired by Rapid7, October 2015');
    });

    it('should display Headquarter', function() {
      expect(page.details.getText()).toContain('Dublin');
    });

    it('should display Formerly known as', function() {
      expect(page.details.getText()).toContain('');
    });

    it('should display Founders', function() {
      expect(page.details.getText()).toContain('Viliam Holub, Trevor Parsons');
    });

    it('should display Founded', function() {
      expect(page.details.getText()).toContain('2010');
    });

    it('should display Employees', function() {
      expect(page.details.getText()).toContain('40');
    });

    it('should display Funding stage', function() {
      expect(page.details.getText()).toContain('Acquired');
    });

    it('should display Total funding', function() {
      expect(page.details.getText()).toContain('18 M');
    });

    it('should display Target markets', function() {
      expect(page.details.getText()).toContain('Global');
    });

    it('should display Business model', function() {
      expect(page.details.getText()).toContain('B2B');
    });

    it('should display Product stage', function() {
      expect(page.details.getText()).toContain('Live');
    });

    it('should display Contact', function() {
      expect(page.details.getText()).toContain('hello@logentries.com');
    });

    it('should display Company Stage', function() {
      expect(page.details.getText()).toContain('Growth');
    });

    it('should display Incubator/Accelerator', function() {
      expect(page.details.getText()).toContain('NDRC');
    });

    it('should display Government Assistance', function() {
      expect(page.details.getText()).toContain('NDRC');
    });

    it('should display We’re looking for', function() {
      expect(page.details.getText()).toContain('Senior technical talent');
    });
  });

  describe('Funding', function() {
    it("should display the company funding rounds", function() {
      expect(page.funding.getText()).toContain('Undisclosed');
      expect(page.funding.getText()).toContain('January 2010');
      expect(page.funding.getText()).toContain('Pre-seed');
      expect(page.funding.getText()).toContain('1.1m');
      expect(page.funding.getText()).toContain('January 2012');
      expect(page.funding.getText()).toContain('Seed');
      expect(page.funding.getText()).toContain('10m');
      expect(page.funding.getText()).toContain('January 2013');
      expect(page.funding.getText()).toContain('Series A');
    });
  });

});
