(function() {
  angular
    .module('admin')
    .service('listInvestorsService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.getAll = function() {
        var basePath = serverUrl + '/admin/investors';

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

      this.filter = function(query) {
        var basePath = serverUrl + '/admin/investors?filter=' + query;

        var req = {
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          }
        }

        return $http(req);
      };
    });
})();
