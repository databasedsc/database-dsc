(function(){
  angular
    .module('user')
    .service('userProfileService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.getUserProfile = function(id) {
        var basePath = serverUrl + '/users/' + id;

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
