(function(){
var module = angular.module('blogmodule',[]);
app.controller('blog', ['$scope', '$resource','$location', function ($scope, $resource, $location) {
var dp = $resource('http://www.bringmyweb.com/assai/assay/testing/testing1/CC/postsr.php',{},{
	'query' : {
		method : 'GET',
		isArray : true
	}
	});
	dp.query(function(response){
		$scope.datap = [];
		for(var i = 0;i<response.length; i++){
			$scope.datap.push(response[i]);
		}
		console.log(response[0].posts);
	});
	var something = localStorage.getItem("un");
	 if(something){
		 $location.url("/home");
	 }

$scope.set = function(){
				        localStorage.setItem("index","index");	
}	
	
	

}]);
})();