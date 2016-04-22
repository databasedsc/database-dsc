(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteInvestorService', function(serverUrl, $http) {

      this.delete = function(id){
        var baseUrl = serverUrl + '/admin/investors/' +id;

        return $http.delete(baseUrl);
      }
    })
})();
