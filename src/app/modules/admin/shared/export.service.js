(function(){
  angular
    .module('admin')
    .service('exportToCSV', function(serverUrl, $http){

      this.export = function(userType, entity) {
        var basePath = serverUrl + '/' + userType +'/' + entity + '.csv';

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
