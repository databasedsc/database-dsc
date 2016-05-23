(function() {
  angular
    .module('admin')
    .service('adminListClaimsService', function(store, serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/admin/user_entity_claims';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
