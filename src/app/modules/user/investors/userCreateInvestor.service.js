(function(){
  angular
    .module('user')
    .service('userCreateInvestorService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.create = function(investor) {
        var basePath = serverUrl + '/user/investors';

        var req = {
          method: 'POST',
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          },
          data: investor
        }

        return $http(req).then(function(responseObject) {
          return responseObject;
        })
      };
    });
})();
