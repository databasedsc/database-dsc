(function() {
  angular
    .module('admin')
    .service('adminListInvestorsService', function(store, serverUrl, $http) {

      this.getAll = function() {
        var basePath = serverUrl + '/admin/investors';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };

      this.filter = function(query) {
        var basePath = serverUrl + '/admin/investors?filter=' + query;
        return $http.get(basePath);
      };
    });
})();
