(function(){
  angular
    .module('admin')
    .service('getCompanyService', function(serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/companies/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
