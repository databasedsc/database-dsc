(function() {
  "use strict";

  angular
    .module('admin')
    .component('adminInvestorsEdit', {
      templateUrl: 'app/modules/admin/investors/investors.edit.html',
      controller: 'AdminInvestorsEditController'
    })
    .controller('AdminInvestorsEditController', function(getInvestorService,
      updateInvestorService, $stateParams, Notification) {

      var controller = this;
      this.fundingTypes = [];
      this.boardMembers = [];

      function loadFundingTypes() {
        controller.investor.funding_types.forEach(function(fType) {
          controller.fundingTypes[fType] = true;
        });
      }

      function setFundingTypes() {
        controller.investor.funding_types = [];
        Object.keys(controller.fundingTypes).forEach(function(fType) {
          if (controller.fundingTypes[fType]) {
            controller.investor.funding_types.push(fType);
          }
        });
      }

      function loadBoardMembers() {
        controller.investor.board_members.forEach(function(member) {
          controller.boardMembers.push(member);
        });
      }

      function setBoardMembers() {
        controller.investor.board_members = [];
        for (var i=0;i<controller.boardMembers.length;i++) {
          var member = controller.boardMembers[i];
          if (member.trim().length > 0)
            controller.investor.board_members.push(member);
        };
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
        controller.investor.office_locations.push({
          id: controller.investor.office_locations.length + 1,
          address: "",
          lat: null,
          lng: null
        });
      };

      controller.removeOfficeLocation = function(location) {
        controller.investor.office_locations.splice(controller.investor.office_locations.indexOf(location), 1);
      };

      controller.addBoardMember = function() {
        controller.boardMembers.push("");
      };

      controller.removeBoardMember = function(member) {
        controller.boardMembers.splice(controller.boardMembers.indexOf(member), 1);
      };

      getInvestorService.find($stateParams.id).then(function(investor) {
        controller.investor = investor;
        loadFundingTypes();
        loadBoardMembers();
      });

      this.update = function() {
        setFundingTypes();
        setBoardMembers();
        updateInvestorService.update(controller.investor)
          .then(function(investor) {
            controller.investor = investor;
            Notification.success('Investor Updated!')
          }, function() {
            Notification.error('Error: Investor could not be saved!')
          })
      }
    })
})();
