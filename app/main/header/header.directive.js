(function(angular) {
  angular.module('nvision.main.header', ['nvision.main.header.menu'])
.directive('nvHeader', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/main/header/header.html'
	};
});
	
})(window.angular);