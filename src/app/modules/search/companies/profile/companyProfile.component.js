(function() {
  'use strict';

  angular
    .module('companyProfile')
    .component('companyProfile', {
      templateUrl: 'app/modules/search/companies/profile/profile.html',
      controller: 'CompaniesProfilesController'
    })
    .controller('CompaniesProfilesController', function($scope, $stateParams, getCompanyService) {
      var controller = this;
      this.getCompanyService = getCompanyService;

      this.company = getCompanyService.find($stateParams.id).then(function(company) {
        controller.company = company;
      });
    });

})();
