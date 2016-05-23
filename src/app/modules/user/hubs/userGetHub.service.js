(function(){
  angular
    .module('user')
    .service('userGetHubService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.find = function(id) {
        var basePath = serverUrl + '/user/hubs/' + id;

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
