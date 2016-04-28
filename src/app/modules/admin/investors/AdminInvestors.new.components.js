(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsNew', {
      controller: 'AdminInvestorsNewController',
      templateUrl: 'app/modules/admin/investors/investors.new.html'
    })
    .controller('AdminInvestorsNewController', function(createInvestorService, $confirm, Notification, listTagsService, listCompaniesService) {
      this.createInvestorService = createInvestorService;
      var controller = this;
      this.fundingTypes = [];
      this.officeLocations = [];

      var setEmptyInvestor = function() {
        controller.investor = {
          office_locations: [],
          founders: [],
          tags: []
        }
      };

      setEmptyInvestor();

      function setFundingTypes() {
        controller.investor.funding_types = [];
        Object.keys(controller.fundingTypes).forEach(function(fType) {
          if (controller.fundingTypes[fType]) {
            controller.investor.funding_types.push(fType);
          }
        });
      }

      controller.queryCompanies = function(query) {
        return listCompaniesService.filter(query);
      };

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addTag = function(tag) {
        controller.investor.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.investor.tags.splice(controller.investor.tags.indexOf(tag.text), 1);
      };

      controller.addFounder = function() {
        controller.investor.founders.push({
          name: "",
          linkedin: ""
        });
      };

      controller.removeFounder = function(founder) {
        controller.investor.founders.splice(controller.investor.founders.indexOf(founder), 1);
      };

      controller.addOfficeLocation = function() {
        controller.investor.office_locations.push({
          id: controller.investor.office_locations.length + 1,
          address: "",
          lat: null,
          lng: null
        });
      };

      controller.removeOfficeLocation = function(location) {
        controller.investor.office_locations.splice(controller.investor.office_locations.indexOf(location), 1);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          setFundingTypes();
          controller.createInvestorService.create(controller.investor).then(function() {
            Notification.success('Investor Saved sucessfully!');
            setEmptyInvestor();
          });
        })
      };
    })

})();
