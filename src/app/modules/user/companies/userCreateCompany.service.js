(function(){
  angular
    .module('user')
    .service('userCreateCompanyService', function(store, serverUrl, $http){

      this.create = function(company) {
        var basePath = serverUrl + '/user/companies';

        return $http.post(basePath, company).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
