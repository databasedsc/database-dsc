'use strict';

var CompanyProfilePage = function() {
  this.body = element(by.css('body'));

  // sections
  this.overview = element(by.id('overview'));
  this.details = element(by.id('details'));
  this.funding = element(by.id('funding'));
  this.tags = element(by.id('tags'));
};

module.exports = new CompanyProfilePage();
