(function(){
  angular
    .module('user')
    .service('userProfileService', function(store, serverUrl, $http){

      this.getUserProfile = function(id) {
        var basePath = serverUrl + '/users/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
