(function() {
  'use strict';

  angular
    .module('admin')
    .component('adminMultinationalsNew', {
      templateUrl: 'app/modules/admin/multinationals/multinationals.new.html',
      controller: 'AdminMultinationalsNewController'
    })
    .controller('AdminMultinationalsNewController', function(createMultinationalService, Notification, $confirm) {
      var controller = this;
      this.functions = [];

      function setEmptyMultinational() {
        controller.multinational = {
          categories: [],
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

      this.addStartupPackage = function() {
        controller.multinational.startup_packages.push('');
      };

      this.removeStartupPackage = function(startupPackage) {
        controller.multinational.startup_packages.splice(controller.multinational.startup_packages.indexOf(startupPackage), 1);
      };

      controller.addCategory = function(tag) {
        this.multinational.categories.push(tag.text);
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
