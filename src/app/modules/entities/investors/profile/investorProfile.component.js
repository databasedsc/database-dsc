(function() {
  'use strict';

  angular
    .module('investorProfile')
    .component('investorProfile', {
      templateUrl: 'app/modules/entities/investors/profile/profile.html',
      controller: 'InvestorProfileController'
    })
    .controller('InvestorProfileController', function($scope, $stateParams, getInvestorService) {
      var controller = this;
      this.getInvestorService = getInvestorService;

      this.investor = getInvestorService.find($stateParams.id).then(function(investor) {
        controller.investor = investor;
      });
    });

})();

