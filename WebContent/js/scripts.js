var app = angular.module("myApp",[]);
app.controller("indexController", function($scope) {

		$scope.menuNav = ["Home","Nav", "Ref","Contact"];
		var sub = ['b','a','c']

		$scope.sideMenu = {id: 1, name: "A",children: sub};

});
$(document).ready(function(){
$("#menu").show();
$("#left #bo").click(function(){
	$("#menu").slideToggle(300);
});
});