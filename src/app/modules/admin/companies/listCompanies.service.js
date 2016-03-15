(function(){
  angular
    .module('admin')
    .service('listCompaniesService', function(serverUrl, $http){

      this.getAll = function() {
        var basePath = serverUrl + '/admin/companies';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();