(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateInvestorService', function(store, serverUrl, $http) {

      this.update = function(investor) {
        var basePath = serverUrl + '/admin/investors/' + investor.id;

        return $http.put(basePath, investor).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
