(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsNew', {
      controller: 'AdminInvestorsNewController',
      templateUrl: 'app/modules/admin/companies/companies.new.html'
    })
    .controller('AdminInvestorsNewController', function(createInvestorService, $confirm, Notification) {
      this.createInvestorService = createInvestorService;
      var controller = this;

      var setEmptyInvestor = function() {
        controller.investor = {
          founders: []
        }
      };

      setEmptyInvestor();

      controller.addFounder = function() {
        controller.investor.founders.push({
          name: "",
          linkedin: ""
        });
      };

      controller.removeFounder = function(founder) {
        controller.investor.founders.splice(controller.investor.founders.indexOf(founder), 1);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {

          controller.createInvestorService.create(controller.investor).then(function() {
            Notification.success('Investor Saved sucessfully!');
            setEmptyInvestor();
          });
        })
      };
    })

})();
