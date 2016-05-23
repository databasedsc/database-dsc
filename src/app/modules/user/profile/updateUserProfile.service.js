(function(){
  "use strict";

  angular
    .module('user')
    .service('updateUserProfileService', function(store, serverUrl, $http) {

      this.update = function(user) {
        var basePath = serverUrl + '/users/' + user.id;

        return $http.put(basePath, user).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
