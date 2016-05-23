(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateCompanyService', function(store, serverUrl, $http) {

      this.update = function(company) {
        var basePath = serverUrl + '/user/companies/' + company.id;

        return $http.put(basePath, company).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
