(function(angular) {

angular.module('nvision.lib.user.service', ['ngResource'])
  .value('profileId', null)
  .factory('User', ['$resource', 'profileId', UserServiceProvider]);

  function UserServiceProvider($resource, profileId){

  	function UserService(profileId){
  		this.get = $resource('mocks/user.json').get;

  		this.getProfile = function() {
  			return profileId;
  		};

  		this.setProfile = function(id) {
  			profileId = id;
  		};
  	}

  	return new UserService(profileId);
  }
	
})(window.angular);
