(function(){
  angular
    .module('user')
    .service('adminUpdateClaim', function(store, serverUrl, $http){

      this.update = function(claimStatus) {
        var basePath = serverUrl + '/admin/user_entity_claims/' + claimStatus.claim_id;

        return $http.put(basePath, claimStatus).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
