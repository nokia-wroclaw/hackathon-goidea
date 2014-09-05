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
        }, {
          creationDate: '10.10.2012',
          creator: 'creator',
          title: 'Alice in wonderland',
          description: "Alice opened the door and found that it led into a small passage, not"+
              "much larger than a rat-hole: she knelt down and looked along the passage"+
            "into the loveliest garden you ever saw. How she longed to get out of"+
            "that dark hall, and wander about among those beds of bright flowers and"+
            "those cool fountains, but she could not even get her head through the"+
            "doorway; 'and even if my head would go through,' thought poor Alice, 'it"+
            "would be of very little use without my shoulders. Oh, how I wish I could"+
            "shut up like a telescope! I think I could, if I only knew how to begin.'"+
            "For, you see, so many out-of-the-way things had happened lately,"+
            "that Alice had begun to think that very few things indeed were really"+
            "impossible.",
          status: 'proposal',
          proposedDate: '20.12.2017',
          votes: ['ja', 'oni'],
          assigned: ['oni', 'ona'],
          attachments: [],
          icon: '',
          comments: '',
          minAssignes: 3
        }]);
      }
    };
  });
});
