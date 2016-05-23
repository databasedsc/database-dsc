(function(){
  angular
    .module('user')
    .service('userCreateMultinationalService', function(store, serverUrl, $http){

      this.create = function(multinational) {
        var basePath = serverUrl + '/user/multinationals';

        return $http.post(basePath, multinational).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
