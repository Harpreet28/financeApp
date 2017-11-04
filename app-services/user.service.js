﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetUserTickersDetails = GetUserTickersDetails;
        service.UpdateTickerSymbols = UpdateTickerSymbols;
        service.GetUserDetailsByUserName = GetUserDetailsByUserName;
        service.RegisterUser = RegisterUser;
        service.GetSecurityQuestions = GetSecurityQuestions;
        
        return service;

        function RegisterUser(user) {
            console.log("RegisterUser API call");
            console.log(JSON.stringify(user));
                return $http({  
                    method: 'POST',
                    dataType:'json',
                    url: "http://13.92.135.96/FinancePortfolioAPI/api/User/RegisterUser",
                    data: user, 
                    }) .then(success, error('Failed to get user by username'));
        }
        
        function GetSecurityQuestions(){
        		return $http({  
	    			method: 'GET',
	    			dataType:'json',
	    			url: "http://13.92.135.96/FinancePortfolioAPI/api/user/GetSecurityQuestions",
	    			}) .then(success, error('Failed to get security questions'));     	
        }
        
        function GetUserTickersDetails(userId) {
	        	return $http({  
	    			method: 'GET',
	    			dataType:'json',
	    			url: "http://13.92.135.96/FinancePortfolioAPI/api/User/GetUserTickersDetails/" + userID
	    			}) .then(success, error('Failed to get ticker symbols for the user'));          
        }

        function UpdateTickerSymbols(userId, tickerSymbolId, tickerSymbolName, active) {
	        	return $http({  
	    			method: 'POST',
	    			dataType:'json',
	    			data: { UserId: userID, TickerSymbolId: tickerSymbolId, TickerSymbolName: tickerSymbolName, Active: active },
	    			url: "http://13.92.135.96/FinancePortfolioAPI/api/User/UpdateTickerSymbols" 
	    			}) .then(success, error('Failed to get ticker symbols for the user'));          
	    }
        
        function GetUserDetailsByUserName(username){
        		return $http({  
        			method: 'GET',
        			dataType:'json',
        			url: "http://13.92.135.96/FinancePortfolioAPI/api/user/GetUserDetailsByUserName/" + username
        			}) .then(success, error('Failed to get user by username'));
        }

        // private functions

        function success(res) {
            return { success: true, data:res.data};
        }

        function error(error) {
            return function () {
            	console.log("errorrrr");
                return { success: false, message: error };
            };
        }
    }

})();
