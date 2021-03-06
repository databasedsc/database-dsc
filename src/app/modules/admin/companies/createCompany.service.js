(function(){
  angular
    .module('admin')
    .service('createCompanyService', function(store, serverUrl, $http){

      this.create = function(company) {
        var basePath = serverUrl + '/admin/companies';

        return $http.post(basePath, company).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
