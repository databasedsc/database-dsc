(function(){
  angular
    .module('admin')
    .service('adminGetHubService', function(store, serverUrl, $http){

      function token() {
        return store.get('jwt');
      }

      this.find = function(id) {
        var basePath = serverUrl + '/admin/hubs/' + id;

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
