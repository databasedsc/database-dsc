(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateHubService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(hub) {
        var basePath = serverUrl + '/user/hubs/' + hub.id;

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
