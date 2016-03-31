(function() {
  'use strict';

  angular
    .module("admin")
    .component("adminMultinationalsEdit", {
      templateUrl: 'app/modules/admin/multinationals/multinationals.edit.html',
      controller: 'AdminMultinationalsEditController'
    })
    .controller('AdminMultinationalsEditController', function(getMultinationalService, updateMultinationalService, $stateParams, Notification) {
      var controller = this;
      this.functions = [];
      this.tags = [];


      function loadTags() {
        controller.multinational.categories.forEach(function(tag) {
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

      controller.addCategory = function(tag) {
        controller.multinational.categories.push(tag.text);
      };


      getMultinationalService.find($stateParams.id).then(function(multinational) {
        controller.multinational = multinational;
        loadFunctions();
        loadTags();
      });

      this.update = function() {
        console.log(controller.multinational.categories);
        setFunctions();
        updateMultinationalService.update(controller.multinational).then(function() {
          Notification.success("Multinational has been updated successfully.");
        });
      };


    });
})();
