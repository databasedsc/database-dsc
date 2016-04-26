(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsEdit', {
      templateUrl: 'app/modules/admin/investors/investors.edit.html',
      controller: 'AdminInvestorsEditController'
    })
    .controller('AdminInvestorsEditController', function(getInvestorService,
      updateInvestorService, $stateParams, Notification, listTagsService) {

      var controller = this;
      this.tags = [];
      this.fundingTypes = [];

      function loadTags() {
        controller.investor.tags.forEach(function(tag) {
          controller.tags.push({text: tag})
        });
      }

      function loadFundingTypes() {
        controller.investor.funding_types.forEach(function(fType) {
          controller.fundingTypes[fType] = true;
        });
      }

      function setFundingTypes() {
        controller.investor.funding_types = [];
        Object.keys(controller.fundingTypes).forEach(function(fType) {
          if (controller.fundingTypes[fType]) {
            controller.investor.funding_types.push(fType);
          }
        });
      }

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

      getInvestorService.find($stateParams.id).then(function(investor) {
        controller.investor = investor;
        loadTags();
        loadFundingTypes();
      });

      this.update = function() {
        setFundingTypes();
        updateInvestorService.update(controller.investor)
          .then(function(investor) {
            controller.investor = investor;
            Notification.success('Investor Updated!')
          }, function() {
            Notification.error('Error: Investor could not be saved!')
          })
      }
    })
})();
