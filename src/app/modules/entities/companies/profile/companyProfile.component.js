(function() {
  'use strict';

  angular
    .module('companyProfile')
    .component('companyProfile', {
      templateUrl: 'app/modules/entities/companies/profile/profile.html',
      controller: 'CompaniesProfilesController'
    })
    .controller('CompaniesProfilesController', function($scope, $stateParams, getCompanyService, NgMap) {
      var controller = this;
      this.getCompanyService = getCompanyService;

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

      this.company = getCompanyService.find($stateParams.id).then(function(company) {
        controller.company = company;
      });
    });

})();
