(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminHubsNew', {
      controller: 'AdminHubsNewController',
      templateUrl: 'app/modules/admin/hubs/hubs.new.html'
    })
    .controller('AdminHubsNewController', function(createHubService, $confirm, Notification, listInvestorsService, listTagsService) {
      this.createHubService = createHubService;
      var controller = this;

      var setEmptyHub = function() {
        controller.hub = {
          office_locations: [],
          founders: [],
          funding_rounds: [],
          tags: []
        }
      };

      setEmptyHub();

      var joinTags = function() {
        controller.hub.tags = controller.hub.tags.join(',')
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

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          setTargetMarkets();
          joinTags();
          controller.createHubService.create(controller.hub).then(function() {
            Notification.success('Hub Saved sucessfully!');
            setEmptyHub();
          });
        })
      };
    })

})();
