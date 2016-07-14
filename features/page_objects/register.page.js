'use strict';

module.exports = {
		
	/* 
	 *    Web Elements
	 */
	
	pageTitle : function(my) {
		return my.driver.getTitle();          
	},
	
	nameBox : function(my) {
		return my.driver.findElement({ id : 'user_name' }); 	
	},
	
	emailBox : function(my) {
		return my.driver.findElement({ id : 'save_user_properties_email' }); 	
	},
	
	emailBox2 : function(my) {
		return my.driver.findElement({ id : 'save_user_properties_confirmemail' }); 	
	},
	
	countryDdl : function(my) {
		return my.driver.findElement({ id : 'save_user_properties_country' }); 
	},
	
	countryDdlOption : function(my, order) {
		return my.driver.findElement({ xpath : '//*[@id="save_user_properties_country"]/option[@value="GBR"]' }); 
	},
	
	usernameBox : function(my) {
		return my.driver.findElement({ id : 'username' }); 	
	},
	
	passwordBox : function(my) {
		return my.driver.findElement({ id : 'password' }); 	
	},
	
	passwordBox2 : function(my) {
		return my.driver.findElement({ id : 'retypepassword' }); 	
	},
	
	termAgree : function(my) {
		return my.driver.findElement({ id : 'termsandconditions' }); 	
	},
	
	notRobot : function(my) {
		return my.driver.findElement({ id : 'timer_id' }); 
	},
	
	registerButton : function(my) {
		return my.driver.findElement({ xpath : '//*[@id="regForm"]/div[7]/input' }); 	
	}
	
};