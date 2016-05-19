(function() {
  'use strict';

  angular
    .module("admin")
    .component("adminMultinationalsIndex", {
      templateUrl: 'app/modules/admin/multinationals/multinationals.index.html',
      controller: 'AdminMultinationalsIndexController'
    })
    .controller('AdminMultinationalsIndexController', function(listMultinationalsService, restoreMultinationalService, deleteMultinationalService, Notification, exportToCSV) {
      var controller = this;

      function getMultinationals() {
        listMultinationalsService.getAll().then(function(multinationals) {
          controller.multinationals = multinationals;
        }, function() {
          logout();
        });
      }

      function logout() {
        store.remove('jwt');
        $state.go('adminLogin');
      }

      getMultinationals();

      this.deleteMultinational = function(id) {
        deleteMultinationalService.delete(id).then(function() {
          getMultinationals();
          Notification.success('The entry has been deleted.')
        })
      }

      this.restoreMultinational = function(id) {
        restoreMultinationalService.restore(id).then(function() {
          getMultinationals();
          Notification.success('Multinational has been restored!');
        })
      };

      this.export = function() {
        exportToCSV.export('multinationals').then(function(data) {
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: 'data:attachment/csv;charset=utf-8,' + encodeURI(data),
            target: '_blank',
            download: 'multinationals.csv'
          })[0].click();
        })
      };

    })
})();
