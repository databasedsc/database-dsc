(function() {
  'use strict';

  angular
    .module('searchInvestors')
    .component('searchInvestors', {
      templateUrl: 'app/modules/entities/investors/index.html',
      controller: 'SearchInvestorsController'
    })
    .controller('SearchInvestorsController', function($scope, searchInvestorsService, filterInvestorsService) {
      var controller = this;
      this.searchInvestorsService = searchInvestorsService;
      this.filterInvestorsService = filterInvestorsService;

      this.filters = filterInvestorsService.filtersData();

      function getSelectedFilter() {
        var obj = {};
        Object.keys(controller.filters).map(function(filterName) {
          obj[filterName] = controller.filters[filterName].selectedValue;
        })
        return obj;
      }

      searchInvestorsService.get().then(function(investors) {
        controller.results = investors;
      });

      this.search = function() {
        searchInvestorsService.get({searchText: this.query}, getSelectedFilter()).then(function(investors) {
          controller.results = investors;
        });
      };

    });
})();
