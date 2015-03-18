var myApp = angular.module('appyto', []);

myApp.controller('somo', ['$scope', '$filter', '$http', function($scope, $filter, $http){
    $scope.dost = 'Rocky!';
    $scope.characters = 6;
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.$watch('handle', function(newVal, oldVal){
        console.info('Watching!');
        console.log('Old: ' + oldVal, 'New: ' + newVal);
    });
    
    $scope.rules = [
        {who: 'Sponge', rulename: 'must come early.'},
        {who: 'Loza', rulename: 'must be happy.'},
        {who: 'Bebo', rulename: 'must do your duty.'}
    ];

}]);