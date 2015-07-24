(function(angular){
	angular.module('nvision.components.administration.menuFormatter', ['ngResource'])
	.factory('AdmMenuFormatter', ['AppConfig', AdmMenuFormatter]);

	function AdmMenuFormatter(AppConfig){

		// For each menu item it sets the item.id property
		// item.id is used only on the front-end to display the menu 
		// to make it collapsible
	 	function setUniqueIds(menuItem){
	    menuItem.id = _.uniqueId();
	    if(menuItem.items && menuItem.items.length) {
	      menuItem.items.map(setUniqueIds);
	    }

	    return menuItem;
	  	}

	  	// For each menu item it sets the item.level property
	  	// item.level indicate the level of the item in the tree
	  	// Levels start at 1, root level is 1
	  	function setItemLevel(menuItem, level){
	    // For root node
	    // Careful level is 0 from the begining because it is the index from the map function
	    if(!level){
	      menuItem.level = 1;
	    } else {
	      menuItem.level = ++level;
	    }

	    if(menuItem.items && menuItem.items.length) {
	      menuItem.items.map(function(node) {
	        return setItemLevel(node, menuItem.level);
	      });
	    }

	    return menuItem;
	  	}

	  // For each menu item it sets the item.state property
	  // item.state is the ui-router state such as "root.administration"
	  	function formMenuState(menuItem, state){
	    
	    // For root node
	    if(!_.isString(state)){
	      menuItem.state = AppConfig.get('rootState') + '.' + menuItem.value;
	    } else {
	      menuItem.state = state + '.' + menuItem.value;
	    }

	    if(menuItem.items && menuItem.items.length) {
	      menuItem.items.map(function(node) {
	        return formMenuState(node, menuItem.state);
	      });
	    }

	    return menuItem;
	  }

	  // Exposes service methods
		return {
			setUniqueIds: setUniqueIds,
			setItemLevel: setItemLevel,
			formMenuState: formMenuState
		};
	}

})(window.angular);