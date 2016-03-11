describe('Service: admin.createCompany.service', function () {

    // load the service's module
    beforeEach(module('admin'));

    // instantiate service
    var service;

    //update the injection
    beforeEach(inject(function (_createCompany.service_) {
        service = _createCompany.service_;
    }));

    /**
     * @description
     * Sample test case to check if the service is injected properly
     * */
    it('should be injected and defined', function () {
        expect(service).toBeDefined();
    });
});
