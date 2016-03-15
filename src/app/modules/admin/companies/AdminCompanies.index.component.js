(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesIndex', {
      controller: 'AdminCompaniesIndexController',
      templateUrl: 'app/modules/admin/companies/companies.index.html'
    })
    .controller('AdminCompaniesIndexController', function(listCompaniesService) {
      var controller = this;

      listCompaniesService.getAll().then(function(companies) {
        controller.companies = companies;
      });
    })

})();
