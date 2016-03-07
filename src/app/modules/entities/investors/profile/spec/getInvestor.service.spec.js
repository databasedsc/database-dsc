(function () {
  'use strict';

  describe('getInvestorsService', function() {
    var $httpBackend,
      getInvestorService;

    beforeEach(module('investorProfile'));

    beforeEach(module('investorProfile', function($provide) {
      $provide.constant('serverUrl', 'http://test.example.com');
    }));

    beforeEach(inject(function(_$httpBackend_, _getInvestorService_) {
      $httpBackend = _$httpBackend_;
      getInvestorService = _getInvestorService_;
    }));

    describe('#find by id', function() {
      it('calls the server to get the investor by id', function() {
        var investor = {
          id: 1,
          name: 'Investor',
          logo: "somelogo.png",
          shortDesc: "short description"
        };

        $httpBackend.expectGET('http://test.example.com/investors/1').respond(investor);

        getInvestorService.find(1).then(function(response) {
          expect(response).toEqual(investor);
        });

        $httpBackend.flush();
      });
    });
  });
})();
