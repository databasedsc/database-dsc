(function() {
  'use strict';

  describe('Admin Companies Index Component', function() {
    var $ctrl,
      $scope;

    beforeEach(module('admin'));

    beforeEach(inject(function($componentController, $rootScope, $q, deleteCompanyService, restoreCompanyService, listCompaniesService, Notification) {
      $scope = $rootScope.$new();

      spyOn(listCompaniesService, 'getAll').andReturn([{name: 'company 1'}, {name: 'company 2'}]);

      $ctrl = $componentController('adminCompaniesIndex', {
        $scope: $scope,
        listCompaniesService: listCompaniesService,
        Notification: Notification
      })
    }));

    xit('should get list of companies from service and set in company variable', function() {
      $scope.$apply();

      expect($ctrl.listCompaniesService.getAll).toHaveBeenCalled();
      expect($ctrl.companies.length).toEqual(2);
    });

  });
})();
