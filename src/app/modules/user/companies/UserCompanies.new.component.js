(function() {
  "use strict";

  angular
    .module('user')
    .component('userCompaniesNew', {
      controller: 'UserCompaniesNewController',
      templateUrl: 'app/modules/user/companies/companies.new.html'
    })
    .controller('UserCompaniesNewController', function(userCreateCompanyService, $confirm, Notification, listInvestorsService, listTagsService) {
      this.userCreateCompanyService = userCreateCompanyService;
      var controller = this;

      var setEmptyCompany = function() {
        controller.company = {
          office_locations: [],
          founders: [],
          funding_rounds: [],
          tags: []
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
      }

      controller.queryInvestors = function(query) {
        return listInvestorsService.filter(query);
      };

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addFounder = function() {
        controller.company.founders.push({
          name: "",
          linkedin: ""
        });
      };

      controller.removeFounder = function(founder) {
        controller.company.founders.splice(controller.company.founders.indexOf(founder), 1);
      };

      controller.addFundingRound = function() {
        controller.company.funding_rounds.push({type: ""});
      };

      controller.removeFundingRound = function(round) {
        controller.company.funding_rounds.splice(controller.company.funding_rounds.indexOf(round), 1);
      };

      controller.addOfficeLocation = function() {
        controller.company.office_locations.push({
          id: controller.company.office_locations.length + 1,
          address: "",
          lat: null,
          lng: null
        });
      };

      controller.removeOfficeLocation = function(location) {
        controller.company.office_locations.splice(controller.company.office_locations.indexOf(location), 1);
      };

      controller.addTag = function(tag) {
        controller.company.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.company.tags.splice(controller.company.tags.indexOf(tag.text), 1);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          setTargetMarkets();
          controller.userCreateCompanyService.create(controller.company).then(function() {
            Notification.success('Company Saved sucessfully!');
            setEmptyCompany();
          });
        })
      };
    })

})();
