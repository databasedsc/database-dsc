(function(){
  angular
    .module('user')
    .service('userCreateHubService', function(store, serverUrl, $http){

      this.create = function(hub) {
        var basePath = serverUrl + '/user/hubs';

        return $http.post(basePath, hub).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
