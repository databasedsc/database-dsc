(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesNew', {
      controller: 'AdminCompaniesNewController',
      templateUrl: 'app/modules/admin/companies/companies.new.html'
    })
    .controller('AdminCompaniesNewController', function(createCompanyService, $confirm, Notification) {
      this.createCompanyService = createCompanyService;
      var controller = this;

      var setEmptyCompany = function() {
        controller.company = {
          funding_rounds: [],
          categories: []
        }
      };

      setEmptyCompany();

      var setTargetMarkets = function() {
        controller.company.target_markets = [];
        for (var key in controller.target_markets) {
          if (controller.target_markets.hasOwnProperty(key) && controller.target_markets[key]) {
            controller.company.target_markets.push(key);
          }
        }
        controller.company.target_markets = controller.company.target_markets.join(',')
      };

      var joinCategories = function() {
        controller.company.categories = controller.company.categories.join(',')
      };

      controller.addFundingRound = function() {
        controller.company.funding_rounds.push({type: ""});
      };

      controller.removeFundingRound = function(round) {
        controller.company.funding_rounds.splice(controller.company.funding_rounds.indexOf(round), 1);
      };

      controller.addCategory = function(tag) {
        this.company.categories.push(tag.text);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          setTargetMarkets();
          joinCategories();
          controller.createCompanyService.create(controller.company).then(function() {
            Notification.success('Company Saved sucessfully!');
            setEmptyCompany();
          });
        })
      };
    })

})();
