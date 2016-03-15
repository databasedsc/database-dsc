(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteCompanyService', function(serverUrl, $http) {

      this.delete = function(id){
        var baseUrl = serverUrl + '/admin/companies/' +id;

        return $http.delete(baseUrl);
      }
    })
})();
