(function(){
  angular
    .module('admin')
    .service('createCompanyService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.create = function(company) {
        var basePath = serverUrl + '/admin/companies';

        var req = {
          method: 'POST',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: company
        }

        return $http(req).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
