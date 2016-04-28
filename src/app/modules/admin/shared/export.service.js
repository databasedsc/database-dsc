(function(){
  angular
    .module('admin')
    .service('exportToCSV', function(serverUrl, $http){

      this.export = function(entity) {
        var basePath = serverUrl + '/admin/' + entity + '.csv';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
