(function() {
  'use strict';

  angular
    .module("user")
    .component("userMultinationalsEdit", {
      templateUrl: 'app/modules/user/multinationals/multinationals.edit.html',
      controller: 'UserMultinationalsEditController'
    })
    .controller('UserMultinationalsEditController', function(store, $state, userGetMultinationalService, userUpdateMultinationalService, $stateParams, Notification, listTagsService) {
      var controller = this;
      this.tags = [];
      this.functions = [];

      function logout() {
        store.remove('jwt');
        $state.go('adminLogin');
      }

      function loadTags() {
        controller.multinational.tags.forEach(function(tag) {
          controller.tags.push({text: tag})
        });
      }

      function loadFunctions() {
        controller.multinational.functions.forEach(function(func) {
          controller.functions[func] = true;
        });
      }

      function setFunctions() {
        controller.multinational.functions = [];
        Object.keys(controller.functions).forEach(function(func) {
          if (controller.functions[func]) {
            controller.multinational.functions.push(func);
          }
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
        controller.multinational.tags.push(tag.text);
      };

      controller.removeTag = function(tag) {
        controller.multinational.tags.splice(controller.multinational.tags.indexOf(tag.text), 1);
      };

      userGetMultinationalService.find($stateParams.id).then(function(multinational) {
        controller.multinational = multinational;
        loadFunctions();
        loadTags();
      }, function() {
        logout();
      });

      this.update = function() {
        setFunctions();
        userUpdateMultinationalService.update(controller.multinational).then(function() {
          Notification.success("Multinational has been updated successfully.");
        });
      };
    });
})();
