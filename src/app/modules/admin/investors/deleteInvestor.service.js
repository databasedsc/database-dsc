(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteInvestorService', function(store, serverUrl, $http) {

      this.delete = function(id){
        var basePath = serverUrl + '/admin/investors/' +id;
        return $http.delete(basePath);
      }
    })
})();
