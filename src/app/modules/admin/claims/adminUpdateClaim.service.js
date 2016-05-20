(function(){
  angular
    .module('user')
    .service('adminUpdateClaim', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.update = function(claimStatus) {
        var basePath = serverUrl + '/admin/user_entity_claims/' + claimStatus.claim_id;

        var req = {
          method: 'PUT',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: claimStatus
        }

        return $http(req).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
