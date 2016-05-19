(function(){
  "use strict";

  angular
    .module('admin')
    .service('updateMultinationalService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.update = function(multinational) {
        var basePath = serverUrl + '/admin/multinationals/' + multinational.id;

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
