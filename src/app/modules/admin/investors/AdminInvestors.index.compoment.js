(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsIndex', {
      controller: 'AdminInvestorsIndexController',
      templateUrl: 'app/modules/admin/investors/investors.index.html'
    })
    .controller('AdminInvestorsIndexController', function(listInvestorsService, deleteInvestorService, restoreInvestorService, Notification) {
      this.listInvestorsService = listInvestorsService;
      this.deleteInvestorService = deleteInvestorService;
      this.restoreInvestorService = restoreInvestorService;
      var controller = this;

      getInvestors();

      function getInvestors() {
        listInvestorsService.getAll().then(function(investors) {
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
          Notification.sucess('The entry has been restored!')
        })
      };
    });
})();
