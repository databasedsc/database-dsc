(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteCompanyService', function(store, serverUrl, $http) {

      this.delete = function(id){
        var basePath = serverUrl + '/admin/companies/' +id;
        return $http.delete(basePath);
      }
    })
})();
