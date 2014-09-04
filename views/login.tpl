<!DOCTYPE html>
<html ng-app="nokiaCares">
<head>
	<title>Login page</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<link href="bootstrap.css" rel="stylesheet">
	<link href="bootstrap-theme.css" rel="stylesheet">
	<script src="angular.js"></script>
	<script>
		var nokiaCaresApp = angular.module("todoApp", []);

		nokiaCaresApp.controller("nokiaCaresCtrl", function ($scope) {
			$scope.userName = [];
			$scope.userPassword = [];

			$scope.loginUser = function ( user ) {
				// TODO: dodać logowanie przez http
			}
		});


	</script>
</head>
<body>
	<div class="panel" ng-controller="nokiaCaresCtrl">
		<div class="container-fluid">
			<div class="row">
				<div class="well">
					<form name="loginForm" ng-submit="loginUser(newUser)">
						<div class="form-group">
							<label>User name</label>
							<input name="userName" type="text" class="form-control" required ng-model="newUser.name">
						</div>
						<div class="form-group">
							<label>User password</label>
							<input name="userPassword" type="text" class="form-control" required ng-model="newUser.password">
						</div>
					</form>
				</div>
			</div>
		</div>
		
	</div>

</body>
</html>

