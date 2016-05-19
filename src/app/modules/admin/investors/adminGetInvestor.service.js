(function(){
  angular
    .module('admin')
    .service('adminGetInvestorService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.find = function(id) {
        var basePath = serverUrl + '/admin/investors/' + id;

        var req = {
          url: basePath,
          headers: {
            'Authorization': 'Bearer ' + token()
          }
        }

        return $http(req).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
