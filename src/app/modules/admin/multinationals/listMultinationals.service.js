(function(){
  angular
    .module('admin')
    .service('listMultinationalsService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.getAll = function() {
        var basePath = serverUrl + '/admin/multinationals';

        var req = {
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          }
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
