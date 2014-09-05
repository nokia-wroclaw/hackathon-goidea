define(['./module', '_'], function(controllers, _) {
  'use strict';

  controllers.controller('Calendar', function($rootScope, $scope) {
    console.log('Calendar');
    $scope.eventSources = [];
    $scope.uiConfig = {
      calendar:{
        height: 350,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: ''
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
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
