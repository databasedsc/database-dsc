(function(){
  angular
    .module('admin')
    .service('createInvestorService', function(store, serverUrl, $http){

      this.create = function(investor) {
        var basePath = serverUrl + '/admin/investors';

        return $http.post(basePath, investor).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
