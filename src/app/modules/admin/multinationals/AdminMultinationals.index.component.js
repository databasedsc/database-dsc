(function() {
  'use strict';

  angular
    .module("admin")
    .component("adminMultinationalsIndex", {
      templateUrl: 'app/modules/admin/multinationals/multinationals.index.html',
      controller: 'AdminMultinationalsIndexController'
    })
    .controller('AdminMultinationalsIndexController', function(listMultinationalsService, restoreMultinationalService, deleteMultinationalService, Notification) {
      var controller = this;

      function getMultinationals() {
        listMultinationalsService.getAll().then(function(multinationals) {
          controller.multinationals = multinationals;
        });
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
    })
})();
