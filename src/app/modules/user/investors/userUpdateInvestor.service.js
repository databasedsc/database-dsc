(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateInvestorService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(investor) {
        var basePath = serverUrl + '/user/investors/' + investor.id;

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: investor
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
