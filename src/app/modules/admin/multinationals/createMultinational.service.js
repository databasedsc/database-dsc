(function(){
  angular
    .module('admin')
    .service('createMultinationalService', function(serverUrl, $http){

      this.create = function(multinational) {
        var basePath = serverUrl + '/admin/multinationals';

        return $http.post(basePath, multinational).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
