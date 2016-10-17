//Declaración de la aplicación

var app = angular.module('appBands', ['ngRoute']);

//Rutas
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl:'views/cards.html',
		controller:'BandsViewController'
	})
	.when('/band/:category',{
		templateUrl:'views/cards.html',
		controller:'BandsViewController'
	})
	.when('/band/band/:name',{
		templateUrl:'views/cardBand.html',
		controller:'IdViewController'
	})
	.otherwise({ 
		redirectTo: '/' 
	})
}]);

app.controller('BandsViewController', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {

	$http.get("js/JSON.json").success(function(data, $http){
	$scope.bands = data;
	$scope.appTitle = 'Bands App';
	})
}]);

app.controller('IdViewController', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
	$scope.filter = $routeParams.name;
	
	$http.get("js/JSON.json").success(function(data, $http){
	$scope.bands = data;
	})
}]);

app.directive('hdrHeader', function(){
	return {
		restrict: 'E',//custom tap de html
		templateUrl: 'views/header.html'
        //template: '<div>{{expense.description}}</div>' (le hemos metido html a pelo,no está bien visto)
	};
});

app.directive('ftrFooter', function(){
	return {
		restrict: 'E',//custom tap de html
		templateUrl: 'views/footer.html'
        //template: '<div>{{expense.description}}</div>' (le hemos metido html a pelo,no está bien visto)
	};
});