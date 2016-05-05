(function(){
  angular
    .module('admin')
    .service('createHubService', function(serverUrl, $http){

      this.create = function(hub) {
        var basePath = serverUrl + '/admin/hubs';

        return $http.post(basePath, hub).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
