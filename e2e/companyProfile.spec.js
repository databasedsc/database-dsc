'use strict';

describe('CompanyProfile', function() {
  var page;

  beforeEach(function() {
    browser.get('#/profile');
    page = require('./companyProfile.po');
  });

  describe('Overview', function() {
    it("should display the logo", function() {
      expect(page.overview.isElementPresent(by.css('.logoz'))).toBe(true);
    });


    it('should display the name', function() {
      expect(page.overview.getText()).toContain('Logentries');
    });

    it('should display the tagline', function() {
      expect(page.overview.getText()).toContain('Real-time log management and analytics');
    });

    it('should display the description', function() {
      expect(page.overview.getText()).toContain('Logentries is the leading real-time log management and analytics service built for the cloud, making business insights from machine-generated log data easily accessible to development, IT and business operations teams of all sizes. With the broadest platform support and an open API, Logentries brings the value of log-level data to any system, to any team member, and to a community of more than 35,000 worldwide users. While traditional log management and analytics solutions require advanced technical skills to use, and are costly to set-up, Logentries provides an alternative designed for managing huge amounts of data, visualizing insights that matter, and automating in-depth analytics and reporting across its global user community. To sign up for the free Logentries service, visit http://logentries.com');
    });
  });

});

