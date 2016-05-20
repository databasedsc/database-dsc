(function() {
  angular
    .module('user')
    .service('userListInvestorsService', function(store, serverUrl, $http) {

      function token() {
        return store.get('jwt');
      }

      this.getAll = function() {
        var basePath = serverUrl + '/user/investors';

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
