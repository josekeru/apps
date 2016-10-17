
var app = angular.module('animalTienda',['ngRoute', 'ui.directives','ui.filters']);




app.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl: 'shop.html',
		controller: 'AsosViewController'
	})
	
	.when('/asos/new', {
            templateUrl: 'shop.html',
            controller: 'NewEditAsoViewController'
        })

	.otherwise({
		redirecTo: '/',
	})
}])



//-------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------

app.controller("clothes", ["$scope", "$http", function ($scope, $http){
	
	$http.get("catalogo.json").success(function (data){
		$scope.clothes = data;
	})
}]);

app.controller('HomeViewController', ['$scope', function ($scope) {
    $scope.appTitle = ' discover fashion online';

}]);


app.controller('NewEditAsoViewController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.someText =  $routeParams.id;
	
}]);


	   




