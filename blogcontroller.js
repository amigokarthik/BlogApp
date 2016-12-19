var app = angular.module('blogApp', ['ngResource','ngRoute','blogmodule','gajalamodule','homemodule','settingsmodule'])
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "blog.html",
		controller : 'blog'
    })
	.when("/log", {
        templateUrl : "run.html",
		controller : 'gajala'
    })
	.when("/home", {
        templateUrl : "home.html",
		controller : 'home'
    })
	.when("/settings", {
        templateUrl : "settings.html",
		controller : 'settings'
    });
	});
