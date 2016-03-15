(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateCompanyService', function(serverUrl, $http) {

      this.update = function(company) {
        var basePath = serverUrl + '/admin/companies/' + company.id;

        return $http.put(basePath, company).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
