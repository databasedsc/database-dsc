(function(){
  angular
    .module('admin')
    .service('getMultinationalService', function(serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/multinationals/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
