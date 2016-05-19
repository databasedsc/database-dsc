(function() {
  angular
    .module('admin')
    .service('listCompaniesService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.getAll = function() {
        var basePath = serverUrl + '/admin/companies';

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
        var basePath = serverUrl + '/admin/companies?filter=' + query;

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
