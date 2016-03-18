(function () {
  'use strict';

  describe('createMultinationalService', function () {
    var $httpBackend,
      createMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _createMultinationalService_) {
      $httpBackend = _$httpBackend_;
      createMultinationalService = _createMultinationalService_;
    }));

    describe('#create', function() {
      it('calls the server to create companies', function () {
        var multinational = { name: 'Multinational', short_description: 'Very short desc.'}

        $httpBackend.expectPOST('http://test.example.com/admin/multinationals').respond(multinational);

        createMultinationalService.create(multinational).then(function (response) {
          expect(response.data).toEqual(multinational);
        });

        $httpBackend.flush();
      });

    });

  });
})();
