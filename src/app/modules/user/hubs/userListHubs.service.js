(function() {
  angular
    .module('user')
    .service('userListHubsService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.getAll = function() {
        var basePath = serverUrl + '/user/hubs';

        var req = {
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          }
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
