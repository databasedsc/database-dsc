(function () {
  'use strict';

  describe('Search results', function () {
    var $ctrl,
      $scope;

    beforeEach(module('searchResults'));

    beforeEach(inject(function ($componentController, $rootScope) {
      $scope = $rootScope.$new();

      $ctrl = $componentController('searchResults', {
        $scope: $scope
      })
    }));

    it('should have search results', function () {
      expect($ctrl.results.length).toEqual(1);
    });

  });
})();
