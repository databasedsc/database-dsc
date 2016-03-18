(function () {
  'use strict';

  describe('getMultinationalService', function () {
    var $httpBackend,
      getMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _getMultinationalService_) {
      $httpBackend = _$httpBackend_;
      getMultinationalService = _getMultinationalService_;
    }));

    describe('#find', function() {
      it('calls the server to get companies', function () {
        var multinational = { name: 'Multinational', short_description: 'Very short desc.'}

        $httpBackend.expectGET('http://test.example.com/admin/multinationals/1').respond(multinational);

        getMultinationalService.find(1).then(function (response) {
          expect(response).toEqual(multinational);
        });

        $httpBackend.flush();
      });

    });

  });
})();
