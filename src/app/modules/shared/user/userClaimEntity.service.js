(function(){
  angular
    .module('user')
    .service('userClaimEntityService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.create = function(claim) {
        var basePath = serverUrl + '/user/user_entity_claims';

        var req = {
          method: 'POST',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: claim
        }

        return $http(req).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
