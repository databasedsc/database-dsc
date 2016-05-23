(function(){
  angular
    .module('user')
    .service('userCreateInvestorService', function(store, serverUrl, $http){

      this.create = function(investor) {
        var basePath = serverUrl + '/user/investors';

        return $http.post(basePath, investor).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
