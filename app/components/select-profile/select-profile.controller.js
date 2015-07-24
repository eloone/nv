(function(angular){
	angular.module('nvision.components.selectProfile', [
		'ui.router',
		'ui.bootstrap',
		'nvision.components.profileService',
		'nvision.components.selectProfile.directive'
	])
	.controller('SelectProfileCtrl', [
		'$scope',
		'$modal',
		'ProfileService',
		'$state',
		'User',
		SelectProfileCtrl
	]);

	function SelectProfileCtrl($scope, $modal, ProfileService, $state, User){

		if($state.current.name === 'root.selectProfile') {
			if(User.getProfile()) {
				$state.go('root.welcome');
			}
		}

		var modal = $modal.open({
			templateUrl: 'app/components/select-profile/select-profile.modal.html',
			backdrop: false,
			scope: $scope
		});

		ProfileService.get(function(res){
			$scope.profiles = res.data;
		});

		// Select profile from modal
		$scope.selectProfile = function(profileId) {

			User.setProfile(profileId);

			modal.close();

			// When modal closes
			modal.result.then(function(){
				$state.go('root.welcome');
			});
		};

	}

})(window.angular);