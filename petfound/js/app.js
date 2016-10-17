
var app = angular.module('dataPet',['ngRoute', 'ngFileUpload']);//en el array inyectamos dependencias

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "index.html",
		controller: "dataManager"
	})

	.when("/pets",{
		templateUrl: "views/pets.html",
		controller: "dataManager"
	})
	.when("/onePet/:petId",{
		templateUrl: "views/onePet.html",
		controller: "onePetManager"
	})
	.when("/type/:typeFilter",{
		templateUrl: "views/typeFilter.html",
		controller: "typeManager"
	})

	.when("/register",{
		templateUrl: "views/registerPet.html",
		controller: "registerPetManager"
	})
.when("/shop1",{
		templateUrl: "shop1.html",
		controller: "dataManager"
	})
.when('/asos/new', {
            templateUrl: 'views/shop.html',
            controller: 'NewEditAsoViewController'
        })

	.otherwise({
		redirecTo: '/',
	})
	
}]);


app.controller('dataManager',['$scope','$http', function($scope, $http){


	$http.get("php/getPetsSQL.php").success (function (data){
		$scope.pets = data;
	});
}]);

app.controller("onePetManager", ['$scope','$http', "$routeParams", function($scope, $http, $routeParams){
	$scope.petId = $routeParams.petId;

	$http.get("php/getPetsSQL.php").success (function (data){
		$scope.pets = data;
	});
}]);

app.controller("typeManager", ['$scope','$http', "$routeParams", function($scope, $http, $routeParams){
	$scope.typeFilter = $routeParams.typeFilter;

	$http.get("php/getPetsSQL.php").success (function (data){
		$scope.pets = data;
	});
}]);

app.controller('registerPetManager', ['$scope','$http','$location','Upload', function ($scope,$http, $location, Upload){

	$scope.upload = function (file, petName, type) {
		Upload.upload({
			url: 'php/uploadImage.php', 
			method: 'POST',
			file: file,
			data: {
				'pet_name': petName,
				'type': type
			}
		})
	};



	$scope.addNewPet = function(add){
		$http.post("php/registerPet.php",
		{
			'nombre': $scope.pet.nombre,  
			'option': $scope.pet.option,
			'description':$scope.pet.description, 
			'telefonoContacto': $scope.pet.telefonoContacto, 
			'location': $scope.pet.location, 
			'type': $scope.pet.type,
			'imagebckg':$scope.filebckg.name

		})
		.success(function(data, status, headers, config){
			$scope.message = data;
			if($scope.message){
				$scope.upload($scope.filebckg, $scope.pet.name,"bckg");
			}
		});
	};
}]);

app.controller('NewEditAsoViewController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.someText =  $routeParams.id;
	
}]);

app.directive("pElement", function(){
	return{
		restrict: "E",
		templateUrl: "views/pet.html"
	}
});

app.directive("appHeader", function(){
	return {
		restrict: "E",
		templateUrl: "views/headerView.html"
	}
});

app.directive("appFooter", function(){
	return {
		restrict: "E",
		templateUrl: "views/footerView.html"
	}
});








