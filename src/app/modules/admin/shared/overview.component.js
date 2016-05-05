(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminOverview', {
      templateUrl: 'app/modules/admin/shared/overview.html',
      controller: 'OverviewController',
      bindings: {
        entity: '=',
        entityType: "@"
      }
    })
    .controller('OverviewController', function() {
    })
})();
