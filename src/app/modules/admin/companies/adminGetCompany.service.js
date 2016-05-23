(function(){
  angular
    .module('admin')
    .service('adminGetCompanyService', function(store, serverUrl, $http){

      this.find = function(id) {
        var basePath = serverUrl + '/admin/companies/' + id;

        return $http.get(basePath).then(function(responseObject) {
          return responseObject.data;
        })
      };
    });
})();
