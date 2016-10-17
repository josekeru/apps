
var app = angular.module('asosApp',['ngRoute', 'ui.directives','ui.filters']);




app.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/slide.html',
		controller: 'AsosViewController'
	})
	.when('/asos', {
		templateUrl: 'views/shop.html',
		controller: 'AsosViewController'
	})
	.when('/asos', {
		templateUrl: 'views/validation.html',
		controller: 'AsosViewController'
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
	
	$http.get("catalogo.json").success(function (data){
		$scope.clothes = data;
	})
}]);

app.controller('HomeViewController', ['$scope', function ($scope) {
    $scope.appTitle = ' discover fashion online';

}]);


app.controller('AsosViewController', ['$scope', 'Asos', function ($scope, Asos) {
    $scope.asos = Asos.entries;

}]);

app.controller('NewEditAsoViewController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.someText =  $routeParams.id;
	
}]);


	   




