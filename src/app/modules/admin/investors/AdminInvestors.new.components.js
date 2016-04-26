(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsNew', {
      controller: 'AdminInvestorsNewController',
      templateUrl: 'app/modules/admin/investors/investors.new.html'
    })
    .controller('AdminInvestorsNewController', function(createInvestorService, $confirm, Notification) {
      this.createInvestorService = createInvestorService;
      var controller = this;
      this.fundingTypes = [];
      this.officeLocations = [];
      this.boardMembers = [];

      var setEmptyInvestor = function() {
        controller.investor = {
          founders: []
        }
      };

      setEmptyInvestor();

      function setFundingTypes() {
        controller.investor.funding_types = [];
        Object.keys(controller.fundingTypes).forEach(function(fType) {
          if (controller.fundingTypes[fType]) {
            controller.investor.funding_types.push(fType);
          }
        });
      }

      function setOfficeLocations() {
        controller.investor.office_locations = [];
        for (var i=0;i<controller.officeLocations.length;i++) {
          var location = controller.officeLocations[i];
          if (location.trim().length > 0)
            controller.investor.office_locations.push(location);
        }
      }

      function setBoardMembers() {
        controller.investor.board_members = [];
        for (var i=0;i<controller.boardMembers.length;i++) {
          var member = controller.boardMembers[i];
          if (member.trim().length > 0)
            controller.investor.board_members.push(member);
        }
      }

      controller.addFounder = function() {
        controller.investor.founders.push({
          name: "",
          linkedin: ""
        });
      };

      controller.removeFounder = function(founder) {
        controller.investor.founders.splice(controller.investor.founders.indexOf(founder), 1);
      };

      controller.addOfficeLocation = function() {
        controller.officeLocations.push("");
      };

      controller.removeOfficeLocation = function(location) {
        controller.officeLocations.splice(controller.officeLocations.indexOf(location), 1);
      };

      controller.addBoardMember = function() {
        controller.boardMembers.push("");
      };

      controller.removeBoardMember = function(member) {
        controller.boardMembers.splice(controller.boardMembers.indexOf(member), 1);
      };

      this.create = function() {
        $confirm({text: "Are you sure you want to submit?"}).then(function() {

          setFundingTypes();
          setOfficeLocations();
          setBoardMembers();
          controller.createInvestorService.create(controller.investor).then(function() {
            Notification.success('Investor Saved sucessfully!');
            setEmptyInvestor();
          });
        })
      };
    })

})();
