(function(){
  angular
    .module('user')
    .service('userClaimEntityService', function(store, serverUrl, $http){

      this.create = function(claim) {
        var basePath = serverUrl + '/user/user_entity_claims';

        return $http.post(basePath, claim).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
