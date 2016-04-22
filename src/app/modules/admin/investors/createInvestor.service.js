(function(){
  angular
    .module('admin')
    .service('createInvestorService', function(serverUrl, $http){

      this.create = function(investor) {
        var basePath = serverUrl + '/admin/investors';

        return $http.post(basePath, investor).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
