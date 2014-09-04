define(['./module', '_'], function(services, _) {
  'use strict';

  services.factory('Ideas', function() {
    return {
      getIdeas: function(callback) {
        callback([{
          creationDate: '10.10.2012',
          creator: 'creator',
          title: 'Obiad dla Chmursona',
          description: 'Zamawiaj jedzenie z głodnym Chmursonem',
          status: 'proposal',
          proposedDate: '20.12.2017',
          votes: ['ja', 'oni'],
          assigned: ['oni'],
          attachments: [],
          icon: '',
          comments: '',
          minAssignes: 3
        }
        ]);
      }
    };
  });
});
