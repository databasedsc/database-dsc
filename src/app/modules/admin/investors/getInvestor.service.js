(function(){
  angular
    .module('admin')
    .service('getInvestorService', function(serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/investors/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
