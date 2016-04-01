(function() {
  'use strict';

  angular
    .module('companyProfile')
    .component('companyProfile', {
      templateUrl: 'app/modules/entities/companies/profile/profile.html',
      controller: 'CompaniesProfilesController'
    })
    .controller('CompaniesProfilesController', function($scope, $stateParams, getCompanyService) {
      var controller = this;
      this.getCompanyService = getCompanyService;

      this.company = getCompanyService.find($stateParams.id).then(function(company) {
        controller.company = company;
        controller.company.office_locations = controller.company.office_locations.split(';');
      });
    });

})();

