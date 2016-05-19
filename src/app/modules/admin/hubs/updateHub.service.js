(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateHubService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(hub) {
        var basePath = serverUrl + '/admin/hubs/' + hub.id;

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: hub
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
