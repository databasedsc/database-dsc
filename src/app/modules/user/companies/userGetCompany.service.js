(function(){
  angular
    .module('user')
    .service('userGetCompanyService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/user/companies/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
