(function () {
  'use strict';

  angular
    .module('searchCompanies')
    .component('searchCompanies', {
      templateUrl: 'app/modules/search/companies/search.html',
      controller: 'SearchCompaniesController'
    })
    .controller('SearchCompaniesController', function (searchCompaniesService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;

      //TODO: maybe remove this, look for a better approach for a default
      searchCompaniesService.getCompanies().then(function (companies) {
        controller.results = companies;
      });

      this.search = function (){
        searchCompaniesService.getCompanies({searchText: this.query}).then(function (companies) {
          controller.results = companies;
        });
      }

    });
})();
