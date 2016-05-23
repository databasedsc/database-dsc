(function(){
  angular
    .module('admin')
    .service('adminGetHubService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/hubs/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
