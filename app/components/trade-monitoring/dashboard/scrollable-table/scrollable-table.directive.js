(function(angular) {
  angular.module('nvision.components.tradeMonitoring.dashboard.scrollableTable', [])
.directive('nvScrollableTable', ['$timeout', '$window', function($timeout, $window){
	return {
		restrict: 'A',
		link: function(scope, elt) {
			elt.css({visibility: 'hidden'});

			$timeout(function(){
				adjustMaxHeight();
				elt.css({visibility: 'visible'});
			}, 500, false);

			angular.element($window).bind('resize', function() {
				$timeout(adjustMaxHeight,0, false);
            });

			function adjustMaxHeight() {
				var paddingBottom = 20;
				var footerPosition = $('.nv-footer').position();
				var footerHeight = $('.nv-footer').outerHeight(true);
				var eltPosition = $(elt).position();
				var maxHeight = footerPosition.top - eltPosition.top - paddingBottom;
				$(elt).css({
					'max-height': maxHeight + 'px',
					'overflow-y': 'auto'
				});
			}
		}
	};
}]);
	
})(window.angular);