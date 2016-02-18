(function () {
  'use strict';

  angular.module('searchResults')
    .component('searchResults', {
      templateUrl: 'app/modules/search_results/search_results.html',
      controller: 'SearchResultsController'
    })
    .controller('SearchResultsController', function () {
      this.results = [{
        "name": "Mustard",
        "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_150,w_250/v1455114908/tmpxdogqv3vysbaww9g3.png",
        "acquisitions": "",
        "acquiredIpo": "",
        "headquarters": "Dublin",
        "shortDesc": "The on demand staffing network",
        "longDescription": "Mustard instantly connects those with short term positions to fill, with the best available candidates. A data-science focussed company, pairing gamification and on demand technology to build the worlds largest and most functional network of instant talent.",
        "video": ""
      }];
    });
})();
