(function() {
  'use strict';

  angular
    .module('searchCompanies')
    .component('searchCompanies', {
      templateUrl: 'app/modules/search/companies/search.html',
      controller: 'SearchCompaniesController'
    })
    .controller('SearchCompaniesController', function($scope, searchCompaniesService, filterCompaniesService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;
      this.filterCompaniesService = filterCompaniesService;

      this.filters = filterCompaniesService.filtersData();

      function getSelectedFilter() {
        var obj = {};
        Object.keys(controller.filters).map(function(filterName) {
          obj[filterName] = controller.filters[filterName].selectedValue;
        })
        return obj;
      }

      //TODO: maybe remove this, look for a better approach for a default
      searchCompaniesService.getCompanies().then(function(companies) {
        controller.results = companies;
      });

      this.search = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getSelectedFilter()).then(function(companies) {
          controller.results = companies;
        });
      };
    });
})();
