(function(){
  angular
    .module('admin')
    .service('createHubService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.create = function(hub) {
        var basePath = serverUrl + '/admin/hubs';

        var req = {
          method: 'POST',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: hub
        }

        return $http(req).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
