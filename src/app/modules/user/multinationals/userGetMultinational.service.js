(function(){
  angular
    .module('user')
    .service('userGetMultinationalService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/user/multinationals/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
