var app = angular.module('boot',[]);
app.controller('bootstrapController', function($scope) {
	$scope.a = 'text';
	$scope.content = "Heyyy";
	$scope.ContentA = function() {
		$scope.content= "Wassup";
	};
	$scope.ContentB = function() {
		$scope.content = "nom";
	}
	$scope.ContentC = function() {
		$scope.content = "ayyy lmao";
	}
	$scope.section = [
		{
			id: 1,
			name: "A",
			url: "#",
		},
		{
			id: 2,
			name: "B",
			url: "#",
		}
	];
});