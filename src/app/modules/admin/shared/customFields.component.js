(function() {
  "use strict";

  angular
    .module('admin')
    .component('customFields', {
      templateUrl: 'app/modules/admin/shared/customFields.html',
      controller: 'CustomFieldsController',
      bindings: {
        entity: '='
      }
    })
    .controller('CustomFieldsController', function() {
    })
})();
