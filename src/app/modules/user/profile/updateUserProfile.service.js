(function(){
  "use strict";

  angular
    .module('user')
    .service('updateUserProfileService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(user) {
        var basePath = serverUrl + '/users/' + user.id;

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: {
            'user': user
          }
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
