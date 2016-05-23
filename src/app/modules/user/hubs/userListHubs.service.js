(function() {
  angular
    .module('user')
    .service('userListHubsService', function(store, serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/user/hubs';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
