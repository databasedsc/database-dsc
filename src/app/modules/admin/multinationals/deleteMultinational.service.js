(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteMultinationalService', function(serverUrl, $http) {

      this.delete = function(id){
        var baseUrl = serverUrl + '/admin/multinationals/' +id;

        return $http.delete(baseUrl);
      }
    })
})();
