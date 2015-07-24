(function(){
	angular.module('nvision.components.profileService', ['ngResource'])
	.factory('ProfileService', ['$resource', 'AppConfig', ProfileServiceProvider]);

	function ProfileServiceProvider($resource, AppConfig){
		var apiRoutes = AppConfig.get('apiRoutes.user');

		return $resource(apiRoutes.getProfiles);
	}

})(window.angular);