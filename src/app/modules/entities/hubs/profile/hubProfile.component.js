(function (){
  "use strict";

  angular
    .module('hubProfile')
    .component('hubProfile', {
      templateUrl: 'app/modules/entities/hubs/profile/profile.html',
      controller: 'HubProfileController'
    })

    .controller('HubProfileController', function($stateParams, getHubService){
      var controller = this;
      this.getHubService = getHubService;
      getHubService.find($stateParams.id).then(function(hub){
        controller.hub = hub;
      });
    });
})();
