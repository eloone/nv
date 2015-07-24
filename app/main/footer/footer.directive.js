(function(angular) {
  angular.module('nvision.main.footer', [])
.directive('nvFooter', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/main/footer/footer.html'
	};
});
	
})(window.angular);