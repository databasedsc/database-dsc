(function() {
  angular
    .module('admin')
    .service('adminListHubsService', function(store, serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/admin/hubs';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
