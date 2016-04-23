(function () {
  'use strict';

  angular.module('home')
    .component('home', {
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController'
    })
    .controller('HomeController', function ($scope, searchCompaniesService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;

      $scope.currentPage = 1;
      $scope.perPage = 4;
      this.query = "";

      $scope.$watch('currentPage', function () {
        controller.gatherCompanies();
      }, true);

      function getPaginationDetails() {
        return {
          currentPage: $scope.currentPage,
          perPage: $scope.perPage
        }
      }

      this.gatherCompanies = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getPaginationDetails()).then(function(companies) {
          controller.results = companies.data;
          controller.totalItems = companies.headers('Total')
        });
      };


    });
})();
