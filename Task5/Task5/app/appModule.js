var app=angular.module('myapp',['dragularModule']);
 app.controller('myctrl', ['$element','$scope', 'dragularService',
 				function TodoCtrl($element,$scope,dragularService,$drake) {

    dragularService('.wrapper', {
      scope: $scope      
    });


    $scope.$on('dragulardrag', function(e, el) {
      e.stopPropagation();
    });
    $scope.$on('dragulardrop', function(e, el, attr, target, source) {
      e.stopPropagation();
      var a = angular.element(el).attr('name');
      var b = angular.element(attr).attr('name');
      console.log(a);      	
      console.log(b);
        if(a == b){
      		console.log("load");
      	}
      	else{ 
      		angular.element(el).remove();
       		angular.element(document.getElementById('maincontainer')).append(el);
       		alert("Please check the shape before dragging!!!");
      	}
    });   
  }]);