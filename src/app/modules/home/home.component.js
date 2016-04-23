(function () {
  'use strict';

  angular.module('home')
    .filter('propsFilter', function() {
      return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
          var keys = Object.keys(props);

          items.forEach(function(item) {
            var itemMatches = false;

            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var text = props[prop].toLowerCase();
              if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                itemMatches = true;
                break;
              }
            }

            if (itemMatches) {
              out.push(item);
            }
          });
        } else {
          // Let the output be the input untouched
          out = items;
        }

        return out;
      };
    })
    .component('home', {
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController'
    })
    .controller('HomeController', function ($scope, $interval, searchCompaniesService, searchInvestorsService, searchHubsService, searchMultinationalsService) {
      var controller = this;
      this.searchCompaniesService = searchCompaniesService;



      $scope.currentPage = 1;
      $scope.perPage = 4;
      this.query = "";

      $scope.$watch('currentPage', function () {
        controller.gatherCompanies();
        controller.gatherInvestors();
        controller.gatherHubs();
        controller.gatherMtns();
      }, true);

      function getPaginationDetails() {
        return {
          currentPage: $scope.currentPage,
          perPage: $scope.perPage
        }
      }

      controller.people = [];

      this.gatherCompanies = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getPaginationDetails()).then(function(companies) {
          controller.companyResults = companies.data;
          controller.totalCompanyItems = companies.headers('Total')

          angular.forEach(companies.data, function(company){
            controller.people.push({name: company.name, itemType: 'Company'});
          });
        });
      };

      this.gatherInvestors = function() {
        searchInvestorsService.get({searchText: this.query}, getPaginationDetails()).then(function(investors) {
          controller.investorResults = investors.data;
          controller.totalInvestorItems = investors.headers('Total');

          angular.forEach(investors.data, function(investor){
            controller.people.push({name: investor.name, itemType: 'Investor'});
          });
        });
      };

      this.gatherHubs = function() {
        searchHubsService.get({searchText: controller.query}, getPaginationDetails()).then(function(hubs) {
          controller.hubResults = hubs.data;
          controller.totalHubItems = hubs.headers('Total');

          angular.forEach(hubs.data, function(hub){
            controller.people.push({name: hub.name, itemType: 'Hubs'});
          });
        })
      }

      this.gatherMtns = function() {
        searchMultinationalsService.get({searchText: controller.query}, getPaginationDetails()).then(function(multinationals) {
          controller.mtnsResults = multinationals.data;
          controller.totalMtnsItems = multinationals.headers('Total');

          angular.forEach(multinationals.data, function(multinational){
            controller.people.push({name: multinational.name, itemType: 'Multinationals'});
          });
        })
      }

    });
})();
