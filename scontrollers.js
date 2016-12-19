(function(){
var module = angular.module('settingsmodule',['ngFileUpload']);
app.controller('settings', ['$scope', '$resource','$location','Upload','$timeout', function ($scope, $resource, $location, Upload, $timeout) {
	
	var something = localStorage.getItem("un");
	if(!something)
	{
	    $location.url('/');

	}
	
var url="http://www.bringmyweb.com/assai/assay/testing/testing1/CC/accSet.php"+"?un="+something;


var url1="http://www.bringmyweb.com/assai/assay/testing/testing1/CC/imgret.php"+"?un="+something;1



var dp = $resource(url1,{},{
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
		console.log($scope.data)
	});


$scope.uploadFiles = function(file, errFiles) {

	
            $scope.f = file;
            $scope.errFile = errFiles && errFiles[0];
            if (file) {
                file.upload = Upload.upload({
                    url: url,
                    data: {
						file: file
					}
                });

                file.upload.then(function (response) {
					console.log(response.data);
                    $timeout(function () {
                        file.result = response.data;
                    });
					        $scope.myImg = "Profile Picture Uploaded";					
                }, function (response) {
					
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
                }, function (evt) {
                    file.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
                });
            }

        }	
		
	
$scope.logout = function() {
	 
	localStorage.clear();
    $location.url('/');
 
}	
	
	
}]);
})();