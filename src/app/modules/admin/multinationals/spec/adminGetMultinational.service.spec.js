(function () {
  'use strict';

  describe('adminGetMultinationalService', function () {
    var $httpBackend,
      adminGetMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _adminGetMultinationalService_) {
      $httpBackend = _$httpBackend_;
      adminGetMultinationalService = _adminGetMultinationalService_;
    }));

    describe('#find', function() {
      it('calls the server to get multinationals', function () {
        var multinational = { name: 'Multinational', short_description: 'Very short desc.'}

        $httpBackend.expectGET('http://test.example.com/admin/multinationals/1').respond(multinational);

        adminGetMultinationalService.find(1).then(function (response) {
          expect(response).toEqual(multinational);
        });

        $httpBackend.flush();
      });

    });

  });
})();
