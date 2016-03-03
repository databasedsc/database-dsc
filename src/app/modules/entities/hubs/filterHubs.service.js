(function() {
  'use strict';

  angular
    .module('searchHubs')
    .service('filterHubsService', function() {

      this.filtersData = function() {
        return this.data;
      };

      this.data = {
        hubType: {
          type: 'checklist',
          id: 'hubType',
          label: 'Type',
          selectedValue: '',
          values: [
            {label: 'Education', code: 'E'},
            {label: 'Co-working', code: 'CW'},
            {label: 'Accelerator', code: 'A'},
            {label: 'Incubator', code: 'I'}
          ]
        },
        applicationDeadlines: {
          type: 'dropdown',
          id: 'applicationDeadlines',
          label: 'Application Deadlines',
          selectedValue: '',
          values: ['', 'This Month', 'Next Month', 'Next Three Months', 'Over 3 Months']
        }
      };
    })
})();



