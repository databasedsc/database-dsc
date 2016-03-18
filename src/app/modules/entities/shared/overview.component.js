(function() {
  "use strict";

  angular
    .module('profile')
    .component('profileOverview', {
      templateUrl: 'app/modules/entities/shared/overview.html',
      controller: 'OverviewController',
      bindings: {
        entity: '='
      }
    })
    .controller('OverviewController', function() {
    })
})();
