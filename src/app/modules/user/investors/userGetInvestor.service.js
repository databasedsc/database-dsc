(function(){
  angular
    .module('user')
    .service('userGetInvestorService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/user/investors/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
