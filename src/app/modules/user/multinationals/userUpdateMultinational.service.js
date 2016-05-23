(function(){
  "use strict";

  angular
    .module('user')
    .service('userUpdateMultinationalService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(multinational) {
        var basePath = serverUrl + '/user/multinationals/' + multinational.id;

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: multinational
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      }
    })

})();
