(function() {
  angular
    .module('admin')
    .service('listInvestorsService', function(serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/admin/investors';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
