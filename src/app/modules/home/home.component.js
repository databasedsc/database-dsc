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

      controller.people = [
        { name: 'Adam2',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
      ];

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

      this.gatherCompanies = function() {
        searchCompaniesService.getCompanies({searchText: this.query}, getPaginationDetails()).then(function(companies) {
          controller.companyResults = companies.data;
          controller.totalCompanyItems = companies.headers('Total')
        });
      };

      this.gatherInvestors = function() {
        searchInvestorsService.get({searchText: this.query}, getPaginationDetails()).then(function(investors) {
          controller.investorResults = investors.data;
          controller.totalInvestorItems = investors.headers('Total');
        });
      };

      this.gatherHubs = function() {
        searchHubsService.get({searchText: controller.query}, getPaginationDetails()).then(function(hubs) {
          controller.hubResults = hubs.data;
          controller.totalHubItems = hubs.headers('Total');
        })
      }

      this.gatherMtns = function() {
        searchMultinationalsService.get({searchText: controller.query}, getPaginationDetails()).then(function(multinationals) {
          controller.mtnsResults = multinationals.data;
          controller.totalMtnsItems = multinationals.headers('Total');
        })
      }

    });
})();
