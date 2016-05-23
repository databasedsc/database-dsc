(function(){
  angular
    .module('user')
    .service('userListMultinationalsService', function(store, serverUrl, $http){

      this.getAll = function() {
        var basePath = serverUrl + '/user/multinationals';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
