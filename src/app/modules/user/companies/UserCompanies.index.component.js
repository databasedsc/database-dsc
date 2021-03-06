(function() {
  "use strict";

  angular
    .module('user')
    .component('userCompaniesIndex', {
      controller: 'UserCompaniesIndexController',
      templateUrl: 'app/modules/user/companies/companies.index.html'
    })
    .controller('UserCompaniesIndexController', function(store, $state, $confirm, jwtHelper, listCompaniesService, userClaimEntityService, deleteCompanyService, restoreCompanyService, Notification, exportToCSV) {
      this.listCompaniesService = listCompaniesService;
      this.deleteCompanyService = deleteCompanyService;
      this.restoreCompanyService = restoreCompanyService;
      this.userClaimEntityService = userClaimEntityService;
      var controller = this;

      getCompanies();

      function getCompanies() {
        listCompaniesService.getAll().then(function(companies) {
          controller.companies = companies;
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

      this.claimCompany = function(e, id) {
        var requestedClaim = {
          entity_id: id,
          entity_type: 'company'
        }

        $confirm({text: "Are you sure you want request ownership of this company?"}).then(function() {
          controller.userClaimEntityService.create(requestedClaim).then(function() {
            var element = angular.element(e.target)
            element.text('Requested');
            element.attr('disabled', true);
            Notification.success('Claim has been requested sucessfully. The Admin team will review this shortly!');
          });
        })
      };

      this.export = function() {
        exportToCSV.export('user', 'companies').then(function(data) {
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
