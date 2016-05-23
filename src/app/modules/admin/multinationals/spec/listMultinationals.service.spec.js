(function() {
  'use strict';

  describe('adminListMultinationalsService', function() {
    var $httpBackend,
      adminListMultinationalsService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _adminListMultinationalsService_) {
      $httpBackend = _$httpBackend_;
      adminListMultinationalsService = _adminListMultinationalsService_;
    }));

    describe('#find', function() {
      it('calls the server to list multinationals', function() {
        var multinationals = [
          {name: 'Multinationals', short_description: 'Very short desc.'},
          {name: 'Multinationals', short_description: 'Very short desc.'},
          {name: 'Multinationals', short_description: 'Very short desc.'}
        ];

        $httpBackend.expectGET('http://test.example.com/admin/multinationals').respond(multinationals);

        adminListMultinationalsService.getAll().then(function(response) {
          expect(response).toEqual(multinationals);
        });

        $httpBackend.flush();
      });

    });

  });
})();
