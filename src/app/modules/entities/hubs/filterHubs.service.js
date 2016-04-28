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
          noSelectionString: 'All types',
          selectedString: 'All types',
          values: [
            {label: 'Incubator', code: 'I'},
            {label: 'Accelerator', code: 'A'},
            {label: 'Co-working', code: 'CW'},
            {label: 'Education', code: 'E'},
            {label: 'Government', code: 'G'},
            {label: 'Community', code: 'C'}
          ]
        },
        applicationDeadlines: {
          type: 'dropdown',
          id: 'applicationDeadlines',
          label: 'Application Deadlines',
          selectedValue: '',
          noSelectionString: 'Any deadlines',
          values: ['This Month', 'Next Month', 'Next Three Months', 'Over 3 Months']
        }
      };
    })
})();
