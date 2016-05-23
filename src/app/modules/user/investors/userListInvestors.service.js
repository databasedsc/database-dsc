(function() {
  angular
    .module('user')
    .service('userListInvestorsService', function(store, serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/user/investors';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };

    });
})();
