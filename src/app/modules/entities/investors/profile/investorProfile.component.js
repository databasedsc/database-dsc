(function() {
  'use strict';

  angular
    .module('investorProfile')
    .component('investorProfile', {
      templateUrl: 'app/modules/entities/investors/profile/profile.html',
      controller: 'InvestorProfileController'
    })
    .controller('InvestorProfileController', function($scope, $stateParams, getInvestorService, NgMap, searchCompaniesService) {
      var controller = this;
      this.getInvestorService = getInvestorService;

      NgMap.getMap().then(function(map) {
        controller.map = map;
      });

      controller.showOfficeLocationDetail = function(evt, officeLocation) {
        controller.officeLocation = officeLocation;
        controller.map.showInfoWindow('foo-iw', "ol" + officeLocation.id);
      };

      controller.zoomTo = function() {
        var marker = this.map.markers["ol" + this.officeLocation.id];
        var markerPosition = marker.getPosition();
        this.map.setZoom(16);
        this.map.panTo(markerPosition);
      };

      this.investor = getInvestorService.find($stateParams.id).then(function(investor) {
        controller.investor = investor;

        var companyIds = investor.companies_invested_in.map(function(a) { return a.id; });
        searchCompaniesService.getCompaniesWithIDs(companyIds.join(',')).then(function(companies){
          var investedInCompanies = companies.data;
          controller.investor.investedInCompanies = investedInCompanies;
        });
      });
    });

})();
