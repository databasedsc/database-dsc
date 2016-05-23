(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateInvestorService', function(store, serverUrl, $http) {

      this.update = function(investor) {
        var basePath = serverUrl + '/user/investors/' + investor.id;

        return $http.put(basePath, investor).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
