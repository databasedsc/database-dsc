(function(){
  angular
    .module('admin')
    .service('adminGetInvestorService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/investors/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
