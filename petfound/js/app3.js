
var app = angular.module('animalTienda',['ngRoute', 'ui.directives','ui.filters']);




app.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	
	.when('/', {
		templateUrl: 'views/shop.html',
		controller: 'HomeViewController'
	})
	
	.when('/asos/new', {
            templateUrl: 'views/shop.html',
            controller: 'NewEditAsoViewController'
        })

	.otherwise({
		redirecTo: '/',
	})
}])



//-------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------

app.controller("clothes", ["$scope", "$http", function ($scope, $http){
	
	$http.get("js/catalogo.json").success(function (data){
		$scope.clothes = data;
	})
}]);

app.controller('HomeViewController', ['$scope', function ($scope) {
    $scope.appTitle = ' tienda online de amazon';

}]);


app.controller('NewEditAsoViewController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.someText =  $routeParams.id;
	
}]);


	   




