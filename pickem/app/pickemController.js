angular.module('pickemApp')
    .controller('pickemCtrl', function($scope, PickemService) {
        $scope.games = PickemService.getGames();
        $scope.teams = PickemService.getTeams();
        $scope.matchups = [];



        $scope.confidencePoints = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

        $scope.sortOptions = {
            disabled: false,
            stop: assignPoints,
            handle: '.rowHandle'
        };


        $scope.generateMatchups = function(){
            for (var stepper = 0; stepper < 32; stepper++){
                var matchup = "<input type='radio' />" + $scope.teams[stepper] + " vs " +  "<input type='radio' />" + $scope.teams[stepper+1];
                if(stepper === 0 || stepper % 2 === 0){
                    $scope.matchups.push(matchup);
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


