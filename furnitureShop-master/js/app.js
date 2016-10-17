//Declaración de la aplicación

var app = angular.module('furnitureShop', ['ngRoute']);

//Inicializar

app.factory("Home", function(){
   return{
       initializeSlider: function(){
           $('.slider').slider({full_width: true});
       }    
   }
});

//Rutas
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl:'views/sliderPage.html',
		controller:'SliderViewController'
	})
	.when('/catalog', {
		templateUrl:'views/catalogPage.html',
		controller:'CatalogViewController'
	})
	.when('/catalog/:category',{
		templateUrl:'views/catalogPage.html',
		controller:'CatalogViewController'
	})
	.when('/contact',{
		templateUrl:'views/formPage.html',
		controller:'CatalogViewController'
	})
	.when('/catalog/product/:id',{
		templateUrl:'views/productPage.html',
		controller:'IdViewController'
	})
	.otherwise({ 
		redirectTo: '/' 
	})
}]);

app.controller('SliderViewController', ['$scope','Home', function ($scope, Home) {
		$scope.appTitle = 'Furniture Shop';
		Home.initializeSlider();
}]);

app.controller('CatalogViewController', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {

	$http.get("js/JSON.json").success(function(data, $http){
	$scope.catalog = data;
	})
}]);

app.controller('IdViewController', ['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {
	$scope.id = $routeParams.id;
	
	$scope.someText = 'The world is mine Yeahh!!! The ID is ' +  $routeParams.id;
	
	$http.get("js/JSON.json").success(function(data, $http){
	$scope.catalog = data;
	})
}]);