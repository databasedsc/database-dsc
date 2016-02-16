(function () {
  'use strict';

  angular.module('home')
    .component('home', {
      templateUrl: 'app/modules/home/home.html',
      controller: 'HomeController'
    })
    .controller('HomeController', function () {
      this.message = 'DSC Initial message';
    });
})();
