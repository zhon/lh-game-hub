angular.module('app.lap', [
  'ui.router',
  'firebase'
])

.directive('lap', function() {
  return {
    restrict: 'E', //E = element, A = attribute, C = class, M = comment
    scope: {
      //@ reads the attribute value, = provides two-way binding, & works with functions
      editable: '='
    },
    templateUrl: "lap/lap.tpl.html",
    controller: 'LapCtrl' //Embed a custom controller in the directive
  };
})

.controller('LapCtrl', function LapController($scope, session, GameRepository) {

  var init = (function() {
    if (! session.isValidGame()) { return; }
    if (session.isValidLap()) {
      GameRepository.getSquareIds(session.getGame().lapId).then(function(data) {
        $scope.squares = data;
      });
    }
  })();

})

;
