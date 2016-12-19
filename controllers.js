(function(){
var module = angular.module('gajalamodule',[]);
app.controller('gajala', ['$scope', '$resource','$location', function ($scope, $resource, $location) {
	
	var something = localStorage.getItem("un");
		var somethingb = localStorage.getItem("index");
	if(!somethingb){
		 $location.url("/");
	 }
	
	if(something){
		 $location.url("/home");
	 }
	
$scope.createMeetup = function () {
	 
	var resGajala = $resource('http://www.bringmyweb.com/assai/assay/testing/testing1/CC/index.bak.php', {}, {    
    'save': {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
});
var input = {"un":$scope.userName,"pw":$scope.passWord};
resGajala.save(input,function(response){

		var data = Object.keys(response);
$scope.data = "";
		for(var i = 0;i<data.length-2; i++){
			$scope.data = $scope.data+response[data[i]];
		}
		$scope.note=$scope.data;
		console.log($scope.data);
//console.log(response.data);
});
                    

 $scope.userName=" ";
$scope.passWord=" "; 
}

$scope.createMeetupl = function () {
	 
	var dp = $resource('http://www.bringmyweb.com/assai/assay/testing/testing1/CC/lc.php',{},{
	'query' : {
		method : 'GET',
		isArray : false
	}
	});
	var l=0;
	dp.query(function(response){
		var data = Object.keys(response);
		console.log(data[0]);
		$scope.data = [];
		for(var i = 0;i<data.length-2; i++){
			$scope.data.push(response[data[i]]);
		}
		
		for(var i = 0;i<data.length-2; i++){
		if($scope.data[i] == $scope.passWordl)
		{
			l=1;
		}
		}
		//console.log(l);
		if(l == 1)
		{
			        localStorage.setItem("un",$scope.userNamel);
                    $location.url('/home');
			
		}
	});
 
}
}]);
})();