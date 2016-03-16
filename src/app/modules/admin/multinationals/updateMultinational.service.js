(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateMultinationalService', function(serverUrl, $http) {

      this.update = function(multinational) {
        var basePath = serverUrl + '/admin/multinationals/' + multinational.id;

        return $http.put(basePath, multinational).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
