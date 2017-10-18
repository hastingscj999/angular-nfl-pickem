angular.module('pickemApp')
    .controller('pickemCtrl', function($scope, PickemService) {
        $scope.games = PickemService.getGames();
        $scope.teams = PickemService.getTeams();
        $scope.stepper = 0;



        $scope.confidencePoints = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

        $scope.sortOptions = {
            disabled: false,
            stop: assignPoints,
            handle: '.rowHandle'
        };

        $scope.generateMatchups = function(){
            if($scope.stepper <= 31){
                var matchup = $scope.teams[$scope.stepper] + " vs " + $scope.teams[$scope.stepper+1];
                $scope.stepper++;
                if($scope.stepper % 2 == 0){
                    console.log(matchup);
                    return matchup;
                }
            }
        }

        function assignPoints() {
            var ref = event.target.nextElementSibling;
            var index = ref.nextElementSibling.nextElementSibling.innerHTML.trim();
            for (var i in $scope.games){
                if($scope.games[i].matchup === ref.innerHTML.trim()){
                    $scope.games[i].confidence = index;
                    break;
                }
            }
        }
    });


