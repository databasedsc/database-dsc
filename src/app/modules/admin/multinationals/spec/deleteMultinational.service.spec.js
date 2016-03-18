(function () {
  'use strict';

  describe('deleteMultinational', function () {
    var $httpBackend,
      deleteMultinationalService;

    beforeEach(module('admin'));

    beforeEach(module('admin', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function (_$httpBackend_, _deleteMultinationalService_) {
      $httpBackend = _$httpBackend_;
      deleteMultinationalService = _deleteMultinationalService_;
    }));

    describe('#delete', function() {
      it('calls the server to delete multinationals', function () {
        var id = 1;
        $httpBackend.expectDELETE('http://test.example.com/admin/multinationals/' + id).respond({});

        deleteMultinationalService.delete(id).then(function (response) {
          expect(response.status).toEqual(200);
        });

        $httpBackend.flush();
      });

    });

  });
})();
