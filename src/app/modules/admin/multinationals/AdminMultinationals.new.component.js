(function() {
  'use strict';

  angular
    .module('admin')
    .component('adminMultinationalsNew', {
      templateUrl: 'app/modules/admin/multinationals/multinationals.new.html',
      controller: 'AdminMultinationalsNewController'
    })
    .controller('AdminMultinationalsNewController', function(createMultinationalService, Notification, $confirm, listTagsService) {
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
          createMultinationalService.create(controller.multinational).then(function() {
            Notification.success('Multinational has been created!');
            setEmptyMultinational();
          })
        })
      }

    })
})();
