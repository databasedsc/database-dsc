(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminCompaniesNew', {
      controller: 'AdminCompaniesController',
      templateUrl: 'app/modules/admin/companies/companies.new.html'
    })
    .controller('AdminCompaniesController', function(createCompanyService, $confirm) {
      this.createCompanyService = createCompanyService;
      var controller = this;

      var setEmptyCompany = function() {
        controller.company = {
          funding_rounds: [],
          categories: []
        }
      };

      setEmptyCompany();

      var setGeoMarkets = function(){
        controller.company.geo_markets = [];
        for (var key in controller.geo_markets){
          if (controller.geo_markets.hasOwnProperty(key) && controller.geo_markets[key]) {
            controller.company.geo_markets.push(key);
          }
        }
        controller.company.geo_markets = controller.company.geo_markets.join(', ')
      };

      var joinCategories = function () {
        controller.company.categories = controller.company.categories.join(', ')
      };

      controller.addFundingRound = function() {
        controller.company.funding_rounds.push({type: ""});
      };

      controller.removeFundingRound = function(round) {
        controller.company.funding_rounds.splice( controller.company.funding_rounds.indexOf(round), 1);
      };

      controller.addCategory = function(tag){
        this.company.categories.push(tag.text);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function(){
          setGeoMarkets();
          joinCategories();
          controller.createCompanyService.create(controller.company).then(function(){
            setEmptyCompany();
          });
        })
      };
    })

})();
