(function () {
  'use strict';

  describe('restoreMultinational', function () {
    var $httpBackend,
      restoreMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _restoreMultinationalService_) {
      $httpBackend = _$httpBackend_;
      restoreMultinationalService = _restoreMultinationalService_;
    }));

    describe('#restore', function() {
      it('calls the server to restore multinational', function () {
        var id = 1;

        $httpBackend.expectPUT('http://test.example.com/admin/multinationals/1/restore').respond({});

        restoreMultinationalService.restore(id).then(function (response) {
          expect(response.status).toEqual(200);
        });

        $httpBackend.flush();
      });

    });

  });
})();
