(function() {
  'use strict';

  angular
    .module('user')
    .component('userMultinationalsNew', {
      templateUrl: 'app/modules/user/multinationals/multinationals.new.html',
      controller: 'UserMultinationalsNewController'
    })
    .controller('UserMultinationalsNewController', function(userCreateMultinationalService, Notification, $confirm, listTagsService) {
      var controller = this;
      this.functions = [];

      function setEmptyMultinational() {
        controller.multinational = {
          tags: [],
          functions: [],
          startup_packages: []
        };
      }

      setEmptyMultinational();

      function setFunctions() {
        Object.keys(controller.functions).forEach(function(func) {
          controller.multinational.functions.push(func);
        });
      }

      controller.addStartupPackage = function() {
        controller.multinational.startup_packages.push({
          name: "",
          description: "",
          link: ""
        });
      };

      controller.removeStartupPackage = function(startupPackage) {
        controller.multinational.startup_packages.splice(controller.multinational.startup_packages.indexOf(startupPackage), 1);
      };

      controller.queryTags = function(query) {
        return listTagsService.filter(query);
      };

      controller.addTag = function(tag) {
        this.multinational.tags.push(tag.text);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {
          setFunctions();
          userCreateMultinationalService.create(controller.multinational).then(function() {
            Notification.success('Multinational has been created!');
            setEmptyMultinational();
          })
        })
      }

    })
})();
