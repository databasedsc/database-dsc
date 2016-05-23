(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesIndex', {
      controller: 'AdminCompaniesIndexController',
      templateUrl: 'app/modules/admin/companies/companies.index.html'
    })
    .controller('AdminCompaniesIndexController', function(store, $state, jwtHelper, adminListCompaniesService, deleteCompanyService, restoreCompanyService, Notification, exportToCSV) {
      this.adminListCompaniesService = adminListCompaniesService;
      this.deleteCompanyService = deleteCompanyService;
      this.restoreCompanyService = restoreCompanyService;
      var controller = this;

      getCompanies();

      function logout() {
        store.remove('jwt');
        $state.go('adminLogin');
      }

      function getCompanies() {
        adminListCompaniesService.getAll().then(function(companies) {
          controller.companies = companies;
        }, function() {
          logout();
        });
      }

      this.deleteCompany = function(id) {
        controller.deleteCompanyService.delete(id).then(function() {
          getCompanies();
          Notification.success('The entry has been deleted.')
        });
      };

      this.restoreCompany = function(id) {
        controller.restoreCompanyService.restore(id).then(function() {
          getCompanies();
          Notification.success('The entry has been restored!')
        });
      };

      this.export = function() {
        exportToCSV.export('companies').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'companies.csv'
          })[0].click();
        })
      };
    });
})();
