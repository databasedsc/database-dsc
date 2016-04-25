(function() {
  angular
    .module('admin')
    .service('listTagsService', function(serverUrl, $http) {

      this.filter = function(query) {
        var basePath = serverUrl + '/admin/tags?filter=' + query;
        return $http.get(basePath);
      };
    });
})();
