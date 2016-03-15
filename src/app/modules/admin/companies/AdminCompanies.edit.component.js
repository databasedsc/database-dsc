(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesEdit', {
      templateUrl: 'app/modules/admin/companies/companies.edit.html',
      controller: 'AdminCompaniesEditController'
    })
    .controller('AdminCompaniesEditController', function(getCompanyService, updateCompanyService, $stateParams, Notification) {
      var controller = this;
      this.tags = [];
      this.geo_markets = {};

      function categoriesToArray() {
        controller.company.categories = controller.company.categories.split(',');
      }

      function loadTags() {
        categoriesToArray();

        controller.company.categories.forEach(function(tag) {
          controller.tags.push({text: tag})
        });
      }

      function loadGeoMarkets() {
        controller.company.geo_markets.split(',').forEach(function(code) {
          controller.geo_markets[code] = true
        });
      }

      getCompanyService.find($stateParams.id).then(function(company) {
        controller.company = company;
        loadTags();
        loadGeoMarkets();
      });

      controller.addCategory = function(tag) {
        controller.company.categories.push(tag.text);
      };

      controller.addFundingRound = function() {
        controller.company.funding_rounds.push({type: ""});
      };

      controller.removeFundingRound = function(round) {
        controller.company.funding_rounds.splice(controller.company.funding_rounds.indexOf(round), 1);
      };

      var joinCategories = function() {
        controller.company.categories = controller.company.categories.join(', ')
      };

      function setGeoMarkets() {
        controller.company.geo_markets = [];
        for (var key in controller.geo_markets) {
          if (controller.geo_markets.hasOwnProperty(key) && controller.geo_markets[key]) {
            controller.company.geo_markets.push(key);
          }
        }
        controller.company.geo_markets = controller.company.geo_markets.join(',')
      }

      this.update = function() {
        joinCategories();
        setGeoMarkets();
        updateCompanyService.update(controller.company)
          .then(function(company) {
            controller.company = company;
            categoriesToArray();
            Notification.success('Company Updated!')
          }, function() {
            Notification.error('Error: Company could not be saved!')
          })
      }
    })
})();
