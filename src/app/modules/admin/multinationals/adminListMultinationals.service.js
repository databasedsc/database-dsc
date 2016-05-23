(function(){
  angular
    .module('admin')
    .service('adminListMultinationalsService', function(store, serverUrl, $http){

      this.getAll = function() {
        var basePath = serverUrl + '/admin/multinationals';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
