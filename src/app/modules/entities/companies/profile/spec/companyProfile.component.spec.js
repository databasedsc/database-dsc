(function() {
  'use strict';

  describe('Show company profiles', function() {
    var $ctrl,
      $scope,
      resultsDeferred;

    beforeEach(module('companyProfile'));

    beforeEach(inject(function($componentController, $rootScope,  $stateParams, $q, getCompanyService) {
      $scope = $rootScope.$new();

      resultsDeferred = $q.defer();
      spyOn(getCompanyService, 'find').and.callFake(function() {
        return resultsDeferred.promise
      });

      $ctrl = $componentController('companyProfile', {
        $scope: $scope,
        $stateParams:  $stateParams,
        getCompanyService: getCompanyService
      })
    }));

    it('should ask for the company details', function() {
      resultsDeferred.resolve(
        {
          "id": 3,
          "name": "Logentries",
          "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1415669358/cfx78b8ybfao4orxttaa.png",
          "short_description": "Real-time log management and analytics",
          "headquarters": "Dublin",
          "formerly_known_as": "",
          "founders": "Viliam Holub, Trevor Parsons",
          "tags": "Business Analytics, Application Performance Monitoring, Big Data Analytics",
          "investors": "NDRC, Seed Polaris Partners - Seed, Series A; Floodgate - Seed, Series A; Frontline Ventures - Series A; RRE Ventures - Series A",
          "office_locations": "26-28 Lomard Street, Dublin 2, Dublin; 34 Farnsworth Street, Floor 4, Boston, MA 02110, USA",
          "incubator": "NDRC",
          "funding_stage": "Acquired",
          "employees": 40,
          "funding_amount": 18000000,
          "product_stage": "Live",
          "target_markets": "G",
          "business_model": "B2B",
          "company_stage": "Acquired",
          "operational_status": "Active"
        }
      );

      $scope.$apply();

      expect($ctrl.getCompanyService.find.calls.count()).toEqual(1);
      expect($ctrl.company.name).toEqual('Logentries');
      expect($ctrl.company.headquarters).toEqual('Dublin');
      expect($ctrl.company.incubator).toEqual('NDRC');
      expect($ctrl.company.company_stage).toEqual('Acquired');
      expect($ctrl.company.operational_status).toEqual('Active');
    });
  });
})();
