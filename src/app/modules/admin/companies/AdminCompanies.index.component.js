(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesIndex', {
      controller: 'AdminCompaniesIndexController',
      templateUrl: 'app/modules/admin/companies/companies.index.html'
    })
    .controller('AdminCompaniesIndexController', function(listCompaniesService, deleteCompanyService, restoreCompanyService, Notification) {
      var controller = this;

      getCompanies();

      function getCompanies() {
        listCompaniesService.getAll().then(function(companies) {
          controller.companies = companies;
        });
      }


      this.deleteCompany = function(id) {
        deleteCompanyService.delete(id).then(function(){
          getCompanies();
          Notification.success('The entry has been deleted.')
        })
      }

      this.restoreCompany = function(id) {
        restoreCompanyService.restore(id).then(function() {
          getCompanies();
          Notification.sucess('The entry has been restored!')
        })
      }
    })

})();
