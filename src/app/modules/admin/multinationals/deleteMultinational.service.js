(function(){
  "use strict";

  angular
    .module('admin')
    .service('deleteMultinationalService', function(store, serverUrl, $http) {

      this.delete = function(id){
        var basePath = serverUrl + '/admin/multinationals/' + id;
        return $http.delete(basePath);
      }
    })
})();
