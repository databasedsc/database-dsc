(function() {
  "use strict";

  angular
    .module('user')
    .component('userHubsNew', {
      controller: 'UserHubsNewController',
      templateUrl: 'app/modules/user/hubs/hubs.new.html'
    })
    .controller('UserHubsNewController', function(userCreateHubService, $confirm, Notification, listInvestorsService, listTagsService, listCompaniesService) {
      this.userCreateHubService = userCreateHubService;
      var controller = this;
      this.hub_type = {};
      this.appDeadlineDatePicker = {
        opened: false
      };

      var setEmptyHub = function() {
        controller.hub = {
          founders: [],
          funding_rounds: [],
          tags: [],
          contact_urls: []
        }
      };

      setEmptyHub();

      controller.toggleCalendar = function() {
        controller.appDeadlineDatePicker.opened = true;
      };

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addTag = function(tag) {
        controller.hub.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.hub.tags.splice(controller.hub.tags.indexOf(tag.text), 1);
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

      controller.queryCompanies = function(query) {
        return listCompaniesService.filter(query);
      };

      function setHubTypes() {
        controller.hub.hub_type = [];
        for (var key in controller.hub_type) {
          if (controller.hub_type.hasOwnProperty(key) && controller.hub_type[key]) {
            controller.hub.hub_type.push(key);
          }
        }
        controller.hub.hub_type = controller.hub.hub_type
      }

      this.create = function() {
        setHubTypes();
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          controller.userCreateHubService.create(controller.hub).then(function() {
            Notification.success('Hub Saved sucessfully!');
            setEmptyHub();
          });
        })
      };
    })

})();
