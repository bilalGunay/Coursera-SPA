(function () {

	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckCont);

	LunchCheckCont.$inject = ['$scope'];
	function LunchCheckCont($scope) {
		$scope.cssCon = "";
		$scope.cssBorder = "";
		$scope.message = "";
		$scope.items = "";
		$scope.checkNum = function () {
			var newArr = $scope.items.split(",");
			var count = 0;
			console.log(newArr);
			for (var i = 0; i < newArr.length; i++) {
				if (newArr[i] != "" && newArr[i] != " "){
					count++;
				}
			}
			console.log(count);
			if (count > 0 && count <= 3) {
				$scope.cssBorder = "border:1px solid green;";
				$scope.cssCon = "color:green;";
				$scope.message = "Enjoy!";
			}else if (count > 3) {
				$scope.cssBorder = "border:1px solid green;";
				$scope.cssCon = "color:green;";
				$scope.message = "Too much!";
			}else if (count == 0){
				$scope.cssBorder = "border:1px solid red;";
				$scope.cssCon = "color:red;";
				$scope.message = "Please enter data first";
			}
		}
	}

})();