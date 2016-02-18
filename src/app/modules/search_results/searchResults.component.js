(function () {
  'use strict';

  angular.module('searchResults')
    .component('searchResults', {
      templateUrl: 'app/modules/search_results/search_results.html',
      controller: 'SearchResultsController'
    })
    .controller('SearchResultsController', function (companiesSearchService) {
      var controller = this;

      companiesSearchService.getCompanies().then(function (companies) {
        controller.results = companies;
      });
    });
})();
