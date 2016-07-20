'use strict';

var fs = require('fs');
var webdriver = require('selenium-webdriver');

var platform = process.env.PLATFORM || "CHROME";

var buildChromeDriver = function() {
	return new webdriver.Builder().withCapabilities(
			webdriver.Capabilities.chrome()).build();
};

var buildChromeMDriver = function() {
	return new webdriver.Builder().withCapabilities(
			webdriver.Capabilities.chrome()).build();
};

var buildFirefoxDriver = function() {
	return new webdriver.Builder().withCapabilities(
			webdriver.Capabilities.firefox()).build();
};

var buildBsDriver_PC1 = function() {
	var capabilities = {
		'browserName' : 'IE',
		'browser_version' : '11.0',
		'os' : 'Windows',
		'os_version' : '10',
		'resolution' : '1920x1200',
		 'browserstack.user' : process.env.USERNAME,
		 'browserstack.key' : process.env.AUTOMATE_KEY,		
		'browserstack.debug' : 'true',
		'CapabilityType.ACCEPT_SSL_CERTS': 'true'
	};
	return new webdriver.Builder().usingServer(
			'http://hub.browserstack.com/wd/hub')
			.withCapabilities(capabilities).build();
};

var buildBsDriver_M1 = function() {
	var capabilities = {	 
		'browserName' : 'Chrome',
		'browser_version' : '51.0',
		'os' : 'OS X',
		'os_version' : 'El Capitan',
		'resolution' : '1024x768',		
		'browserstack.user' : process.env.USERNAME,
		'browserstack.key' : process.env.AUTOMATE_KEY,
		'browserstack.debug' : 'true',
		'CapabilityType.ACCEPT_SSL_CERTS': 'true'
	};
	return new webdriver.Builder().usingServer(
			'http://hub.browserstack.com/wd/hub')
			.withCapabilities(capabilities).build();
};

switch (platform) {
case 'FIREFOX':
	var driver = buildFirefoxDriver();
	break;
case 'CHROME':
	var driver = buildChromeDriver();
	driver.manage().window().setSize(1366, 768);
	break;
case 'CHROME_M':
	var driver = buildChromeMDriver();
	driver.manage().window().setSize(466, 768);
	break;
case 'BROWSERSTACK_PC1':
	var driver = buildBsDriver_PC1();
	break;
case 'BROWSERSTACK_M1':
	var driver = buildBsDriver_M1();
	driver.manage().window().setSize(466, 768);
	break;
default:
	var driver = buildChromeDriver();
}

var getDriver = function() {
	return driver;
};

var World = function World() {

	var defaultTimeout = 60000;
	var screenshotPath = "screenshots";
	driver.manage().timeouts().implicitlyWait(5000);

	this.webdriver = webdriver;
	this.driver = driver;

	if (!fs.existsSync(screenshotPath)) {
		fs.mkdirSync(screenshotPath);
	}

	this.waitForId = function(idLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.';  
		return driver.wait(function() {
			return driver.isElementPresent({ id : idLocator }) && 
				   driver.findElement({ id : idLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return driver.findElement({ id : idLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
	this.waitForCss = function(cssLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.'; 
		return driver.wait(function() {
			return driver.isElementPresent({ css : cssLocator }) && 
				   driver.findElement({ css : cssLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return driver.findElement({ css : cssLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
	this.waitForXpath = function(xpathLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.'; 
		return driver.wait(function() {
			return driver.isElementPresent({ xpath : xpathLocator }) && 
				   driver.findElement({ xpath : xpathLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return driver.findElement({ xpath : xpathLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
};

module.exports.World = World;
module.exports.getDriver = getDriver;
