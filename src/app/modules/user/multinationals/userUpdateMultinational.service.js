(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateMultinationalService', function(store, serverUrl, $http) {

      this.update = function(multinational) {
        var basePath = serverUrl + '/user/multinationals/' + multinational.id;

        return $http.put(basePath, multinational).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
