(function() {
  'use strict';

  angular
    .module('searchInvestors')
    .component('searchInvestors', {
      templateUrl: 'app/modules/entities/investors/index.html',
      controller: 'SearchInvestorsController'
    })
    .controller('SearchInvestorsController', function($scope, searchInvestorsService) {
      var controller = this;
      this.searchInvestorsService = searchInvestorsService;

      searchInvestorsService.get().then(function(investors) {
        controller.results = investors;
      });

      this.search = function() {
        searchInvestorsService.get({searchText: this.query}).then(function(investors) {
          controller.results = investors;
        });
      };
    });
})();
