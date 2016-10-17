var app = angular.module('film',['ngRoute','ngMessages']);//en el array inyectamos dependencias

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl: "views/home.html",
		controller: "HomeViewController"
	})
	.when("/category/filter/:category",{
		templateUrl: "views/category.html",
		controller: "CategoryViewController"
	})
	.when ("/data/movie/:id",{
		templateUrl: "views/movie.html",
		controller: "MovieViewController"
	})
	.when("/contact",{
		templateUrl: "views/contact.html",
		controller: "ContactViewController"
	})
	.otherwise({
		redirectTo: "views/category.html",
		controller: "CategoryViewController"
	})
}]);

app.controller ("MovieViewController",['$scope',"$http",'$routeParams',function($scope,$http,$routeParams){
	$scope.id = $routeParams.id;
	$http.get("json/films.json").success (function (data){
        $scope.movies = data;

    });

}]);
app.controller ("formController",['$scope',function ($scope){
	
}]);
app.controller ("ContactViewController",['$scope',function ($scope){
	
}]);
app.controller ("HomeViewController",['$scope','home',function ($scope,home){
	home.initSlider();
}]);

app.controller ("CategoryViewController",['$scope','$http','$routeParams',function ($scope,$http,$routeParams){
	$scope.category = $routeParams.category;
	$http.get("json/films.json").success (function (data){
        $scope.movies = data;
    });
}])

app.controller('movies',['$scope','$http', function($scope,$http){
    $scope.movies = 'Movies';
    
    $http.get("json/films.json").success (function (data){
        $scope.movies = data;
    });
}]);


app.factory("home", function(){
	return {
		initSlider: function (){
			 $('.slider').slider({full_width: true,Interval: 200});
		}
	}
});
