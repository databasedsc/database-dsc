(function() {
  "use strict";

  angular
    .module('user')
    .component('userHubsEdit', {
      templateUrl: 'app/modules/user/hubs/hubs.edit.html',
      controller: 'UserHubsEditController'
    })
    .controller('UserHubsEditController', function(store, $state, userGetHubService,
      userUpdateHubService, $stateParams, Notification, listTagsService, listCompaniesService) {

      var controller = this;
      this.hub_type = {};
      this.tags = [];
      this.fundingTypes = [];
      this.officeLocations = [];
      this.appDeadlineDatePicker = {
        opened: false
      };

      this.currentAppDeadlineDate;

      function loadTags() {
        controller.hub.tags.forEach(function(tag) {
          controller.tags.push({text: tag})
        });
      }

      function convertDateForDisplay() {
        if (controller.hub.application_deadline) {
          controller.hub.application_deadline = Date.parse(controller.hub.application_deadline);
        }
      }

      function convertDateForUpdate() {
        if (controller.hub.application_deadline == controller.currentAppDeadlineDate) {
          controller.hub.application_deadline = new Date(controller.hub.application_deadline)
        }
      }

      controller.queryCompanies = function(query) {
        return listCompaniesService.filter(query);
      };

      controller.toggleCalendar = function() {
        controller.appDeadlineDatePicker.opened = true;
      };

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addPrivateContact = function() {
        controller.hub.contact_urls.push({
          name: "",
          email: "",
          phone: ""
        });
      };

      controller.removePrivateContact = function(contact) {
        controller.hub.contact_urls.splice(controller.hub.contact_urls.indexOf(contact), 1);
      };

      controller.addTag = function(tag) {
        controller.hub.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.hub.tags.splice(controller.hub.tags.indexOf(tag.text), 1);
      };

      function loadHubTypes() {
        controller.hub.hub_type.forEach(function(code) {
          controller.hub_type[code] = true
        });
      }

      function setHubTypes() {
        controller.hub.hub_type = [];
        for (var key in controller.hub_type) {
          if (controller.hub_type.hasOwnProperty(key) && controller.hub_type[key]) {
            controller.hub.hub_type.push(key);
          }
        }
        controller.hub.hub_type = controller.hub.hub_type
      }

      userGetHubService.find($stateParams.id).then(function(hub) {
        controller.hub = hub;

        if (!angular.isArray(controller.hub.contact_urls)) {
          controller.hub.contact_urls = [];
        }

        convertDateForDisplay();
        controller.currentAppDeadlineDate = hub.application_deadline;
        loadTags();
        loadHubTypes();
      });

      this.update = function() {
        setHubTypes();
        convertDateForUpdate();
        userUpdateHubService.update(controller.hub)
          .then(function(hub) {
            controller.hub = hub;
            convertDateForDisplay();
            Notification.success('Hub Updated!')
          }, function() {
            Notification.error('Error: Hub could not be saved!')
          })
      }
    })
})();
