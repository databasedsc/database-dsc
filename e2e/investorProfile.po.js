'use strict';

var InvestorProfilePage = function() {
  this.body = element(by.css('body'));

  // sections
  this.overview = element(by.id('overview'));
  this.tags = element(by.id('tags'));
  this.details = element(by.id('details'));
  this.portfolio = element(by.id('portfolio'));
};

module.exports = new InvestorProfilePage();
