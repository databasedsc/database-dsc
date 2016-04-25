(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminHubsEdit', {
      templateUrl: 'app/modules/admin/hubs/hubs.edit.html',
      controller: 'AdminHubsEditController'
    })
    .controller('AdminHubsEditController', function(getHubService,
      updateHubService, $stateParams, Notification, listTagsService) {

      var controller = this;
      this.tags = [];
      this.fundingTypes = [];
      this.officeLocations = [];
      this.boardMembers = [];

      function loadTags() {
        controller.hub.tags.forEach(function(tag) {
          controller.tags.push({text: tag})
        });
      }

      function loadFundingTypes() {
        controller.hub.funding_types.forEach(function(fType) {
          controller.fundingTypes[fType] = true;
        });
      }

      function setFundingTypes() {
        controller.hub.funding_types = [];
        Object.keys(controller.fundingTypes).forEach(function(fType) {
          if (controller.fundingTypes[fType]) {
            controller.hub.funding_types.push(fType);
          }
        });
      }

      function loadOfficeLocations() {
        controller.hub.office_locations.forEach(function(location) {
          controller.officeLocations.push(location);
        });
      }

      function setOfficeLocations() {
        controller.hub.office_locations = [];
        for (var i=0;i<controller.officeLocations.length;i++) {
          var location = controller.officeLocations[i];
          if (location.trim().length > 0)
            controller.hub.office_locations.push(location);
        };
      }

      function loadBoardMembers() {
        controller.hub.board_members.forEach(function(member) {
          controller.boardMembers.push(member);
        });
      }

      function setBoardMembers() {
        controller.hub.board_members = [];
        for (var i=0;i<controller.boardMembers.length;i++) {
          var member = controller.boardMembers[i];
          if (member.trim().length > 0)
            controller.hub.board_members.push(member);
        };
      }

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addTag = function(tag) {
        controller.hub.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.hub.tags.splice(controller.hub.tags.indexOf(tag.text), 1);
      };

      controller.addFounder = function() {
        controller.hub.founders.push({
          name: "",
          linkedin: ""
        });
      };

      controller.removeFounder = function(founder) {
        controller.hub.founders.splice(controller.hub.founders.indexOf(founder), 1);
      };

      controller.addOfficeLocation = function() {
        controller.officeLocations.push("");
      };

      controller.removeOfficeLocation = function(location) {
        controller.officeLocations.splice(controller.officeLocations.indexOf(location), 1);
      };

      controller.addBoardMember = function() {
        controller.boardMembers.push("");
      };

      controller.removeBoardMember = function(member) {
        controller.boardMembers.splice(controller.boardMembers.indexOf(member), 1);
      };

      getHubService.find($stateParams.id).then(function(hub) {
        controller.hub = hub;
        loadTags();
      });

      this.update = function() {
        updateHubService.update(controller.hub)
          .then(function(hub) {
            controller.hub = hub;
            Notification.success('Hub Updated!')
          }, function() {
            Notification.error('Error: Hub could not be saved!')
          })
      }
    })
})();
