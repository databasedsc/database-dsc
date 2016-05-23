(function(){
  angular
    .module('user')
    .service('userGetHubService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/user/hubs/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
