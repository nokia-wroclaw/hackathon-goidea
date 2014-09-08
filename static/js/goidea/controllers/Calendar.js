define(['./module', '_'], function(controllers, _) {
  'use strict';

  controllers.controller('Calendar', function($rootScope, $scope, Ideas) {
    $scope.eventSources = [];

    Ideas.getIdeas().then(function(ideas) {
      var events = [];
      _.each(ideas, function(idea) {
        events.push({
          title: idea.Title,
          start: idea.EventDate,
          id: idea.Id
        });
      });
      $scope.eventSources.push(events);
    });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.alertOnEventClick = function(event) {
      $rootScope.$broadcast('idea-click-event', event);

    };

    //    $scope.eventPopup = function(event) {
    //      console.log("eventPopup event: ", event);
    //    };

    $scope.dayClick = function(event) {
      $rootScope.$broadcast('day-click-event', event);
    };

    $scope.uiConfig = {
      calendar: {
        height: 350,
        header: {
          left: 'title',
          center: '',
          right: ''
        },
        //        eventMouseover: $scope.eventPopup,
        dayClick: $scope.dayClick,
        eventClick: $scope.alertOnEventClick
      }
    };
    $scope.changeView = function(view, calendar) {
      calendar.fullCalendar('changeView', view);
    };
    $scope.show = function(view, calendar) {
      calendar.fullCalendar(view);
    };
  });
});
