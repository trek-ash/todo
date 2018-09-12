var app=angular.module('todoapp',['ngMaterial']);
app.controller('Todoctrl',($scope)=>{
	$scope.todolist=[];	
	if ($scope.todolist.length==0) {
		$scope.noitemmsg='No task to do';
	}else $scope.noitemmsg='';
	$scope.addtask=()=>{
		$scope.err='';
		if ($scope.addthis) {
		if ($scope.todolist.indexOf($scope.addthis)==-1 ) {
		$scope.todolist.push($scope.addthis);
		}else $scope.err="Task already exists";
		}else $scope.err="Huh!!!What to add??";
		$scope.addthis='';
		if ($scope.todolist.length==0) {
			$scope.noitemmsg='No task to do';
		}else $scope.noitemmsg='';

	}
	$scope.remove=(x)=>{
		$scope.todolist.splice(x,1);
		if ($scope.todolist.length==0) {
			$scope.noitemmsg='No task to do';
		}else $scope.noitemmsg='';		
	}
	$scope.done=(x,sel)=>{
		var thisclass='#item'+x;
		if (sel==true) {
			angular.element(thisclass).addClass("done");
		}else angular.element(thisclass).removeClass("done");
	}


})