(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsIndex', {
      controller: 'AdminInvestorsIndexController',
      templateUrl: 'app/modules/admin/investors/investors.index.html'
    })
    .controller('AdminInvestorsIndexController', function(store, $state, adminListInvestorsService, deleteInvestorService, restoreInvestorService, Notification, exportToCSV) {
      this.adminListInvestorsService = adminListInvestorsService;
      this.deleteInvestorService = deleteInvestorService;
      this.restoreInvestorService = restoreInvestorService;
      var controller = this;

      getInvestors();

      function getInvestors() {
        adminListInvestorsService.getAll().then(function(investors) {
          controller.investors = investors;
        });
      }

      this.deleteInvestor = function(id) {
        controller.deleteInvestorService.delete(id).then(function() {
          getInvestors();
          Notification.success('The entry has been deleted.')
        })
      };

      this.restoreInvestor = function(id) {
        controller.restoreInvestorService.restore(id).then(function() {
          getInvestors();
          Notification.success('The entry has been restored!')
        })
      };

      this.export = function() {
        exportToCSV.export('admin', 'investors').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'investors.csv'
          })[0].click();
        })
      };

    });
})();
