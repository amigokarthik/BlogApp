(function(){
var module = angular.module('homemodule',['ngFileUpload']);
app.controller('home', ['$scope', '$resource','$location','Upload','$timeout', function ($scope, $resource, $location, Upload, $timeout) {
	
	var something = localStorage.getItem("un");
	if(!something)
	{
	    $location.url('/');

	}
		$scope.dataun = something;
	var url="http://www.bringmyweb.com/assai/assay/testing/testing1/CC/imgret.php"+"?un="+something;
	var dp = $resource(url,{},{
	'query' : {
		method : 'GET',
		isArray : false
	}
	});
	dp.query(function(response){
		var data = Object.keys(response);
$scope.data = "";
		for(var i = 0;i<data.length-2; i++){
			$scope.data = $scope.data+response[data[i]];
		}
		console.log($scope.data);
	});
	
		
$scope.postfunction = function() {

var url="http://www.bringmyweb.com/assai/assay/testing/testing1/CC/posts.php"+"?un="+something;

	var resGajala = $resource(url, {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});
var input = {"ps":$scope.posts};
resGajala.save(input,function(response){
console.log($scope.posts);
});
	    $location.url('/log');

}

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


	
	
	
	
$scope.logout = function() {
	 
	localStorage.clear();
    $location.url('/');
 
}


	
	
}]);
})();