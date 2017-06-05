"use strict";

function Rehive(config){

    this.auth = {};
    this.token = {};
    this.user = {};
    this.transactions = {};
    this.accounts = {};
    this.company = {};
    var apiVersion = '3',
      baseAPI = 'https://rehive.com/api/'+ apiVersion +'/',
      registerAPI = 'auth/register/',
      registerCompanyAPI = 'auth/company/register/',
      loginAPI = 'auth/login/',
      logoutAPI = 'auth/logout/',
      logoutAllAPI = 'auth/logout/all/',
      changePasswordAPI = 'auth/password/change/',
      resetPasswordAPI = 'auth/password/reset/',
      resetConfirmPasswordAPI = 'auth/password/reset/confirm/',
      resendEmailVerificationAPI = 'auth/email/verify/resend/',
      resendMobileVerificationAPI = 'auth/mobile/verify/resend/',
      verifyMobileAPI = 'auth/mobile/verify/',
      tokensAPI = 'auth/tokens/',
      userProfileAPI = 'user/',
      userAddressAPI = 'user/address/',
      userBankAccountsAPI = 'user/bank_accounts/',
      userBitcoinAccountsAPI = 'user/bitcoin_accounts/',
      userCreateDocumentAPI = 'user/document/',
      userEmailAddressesAPI = 'user/emails/',
      userMobileNumbersAPI = 'user/mobiles/',
      userNotificationsAPI = 'user/notifications/',
      transactionsAPI = 'transactions/',
      totalTransactionsListAPI = 'totals/',
      withdrawalAPI = 'transactions/withdraw/',
      depositAPI = 'transactions/deposit/',
      accountsAPI = 'accounts/',
      accountCurrenciesAPI = '/currencies/',
      companyAPI = 'company/',
      companyCurrenciesAPI = 'company/currencies/',
      companyBanksAPI = 'company/bank/',
      headers = {'Content-Type': 'application/json'};

    if(config){
        config.apiVersion ? apiVersion = config.apiVersion : apiVersion = '3';
        config.authToken ? setToken(config.authToken) : setToken('');

    } else {
        apiVersion = '3';
        setToken('');
    }

    function setToken(newToken){
      sessionStorage.setItem("token",newToken);
    }

    function getToken(){
    return sessionStorage.getItem("token") || '';
    }

    function removeToken(){
      delete headers['Authorization'];
      sessionStorage.removeItem("token");
    }

    function parseJSON(response) {
        return response.json()
    }

    var httpPostRehive = function(url,data,cb){
        var token = getToken();

        if(token){
            headers['Authorization'] = 'Token ' + token;
        } else {
            delete headers['Authorization'];
        }

        fetch(baseAPI + url,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    if(response.data && response.data.data){
                        cb(null,response.data.data);
                    } else if(response.data) {
                        cb(null,response.data);
                    } else{
                        cb(null,response);
                    }
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    var httpGetRehive = function(url,params,cb){

      var token = getToken();

      if(token){
          headers['Authorization'] = 'Token ' + token;
      } else {
          delete headers['Authorization'];
      }

        fetch(baseAPI + url,{
            method: 'GET',
            headers: headers
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    if(response.data && response.data.data){
                        cb(null,response.data.data);
                    } else if(response.data) {
                        cb(null,response.data);
                    } else{
                        cb(null,response);
                    }
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    var httpPatchRehive = function(url,data,cb){

        var token = getToken();

        if(token){
            headers['Authorization'] = 'Token ' + token;
        } else {
            delete headers['Authorization'];
        }

        fetch(baseAPI + url,{
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    if(response.data && response.data.data){
                        cb(null,response.data.data);
                    } else if(response.data) {
                        cb(null,response.data);
                    } else{
                        cb(null,response);
                    }
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    var httpDeleteRehive = function(url,data,cb){

        var token = getToken();

        if(token){
            headers['Authorization'] = 'Token ' + token;
        } else {
            delete headers['Authorization'];
        }

        fetch(baseAPI + url,{
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    if(response.data && response.data.data){
                        cb(null,response.data.data);
                    } else if(response.data) {
                        cb(null,response.data);
                    } else{
                        cb(null,response);
                    }
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    //public functions

    this.auth.register = function (credentials,cb){
        fetch(baseAPI + registerAPI,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(credentials)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    setToken(response.data.token);
                    cb(null,response.data.user);
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    this.auth.registerCompany = function(credentials,cb){
        fetch(baseAPI + registerCompanyAPI,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(credentials)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    setToken(response.data.token);
                    cb(null,response.data.user);
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    this.auth.login = function (credentials,cb){
        fetch(baseAPI + loginAPI,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(credentials)
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    setToken(response.data.token);
                    cb(null,response.data.user);
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            })
    };

    this.auth.logout = function (cb){

      var token = getToken();

        if(token){
            headers['Authorization'] = 'Token ' + token;
        } else {
            delete headers['Authorization'];
        }

        fetch(baseAPI + logoutAPI,{
            method: 'POST',
            headers: headers
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    removeToken();
                    cb(null,response);
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    this.auth.logoutAll = function (cb){

      var token = getToken();

        if(token){
            headers['Authorization'] = 'Token ' + token;
        } else {
            delete headers['Authorization'];
        }

        fetch(baseAPI + logoutAllAPI,{
            method: 'POST',
            headers: headers
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    removeToken();
                    cb(null,response);
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    this.auth.changePassword = function (data,cb){
      httpPostRehive(changePasswordAPI,data,cb);
    };

    this.auth.resetPassword = function (data,cb){
      httpPostRehive(resetPasswordAPI,data,cb);
    };

    this.auth.resetConfirmPassword = function (data,cb){
      httpPostRehive(resetConfirmPasswordAPI,data,cb);
    };

    this.auth.resendEmailVerification = function (data,cb){
      httpPostRehive(resendEmailVerificationAPI,data,cb);
    };

    this.auth.resendMobileVerification = function (data,cb){
      httpPostRehive(resendMobileVerificationAPI,data,cb);
    };

    this.auth.verifyMobile = function (data,cb){
      httpPostRehive(verifyMobileAPI,data,cb);
    };

    this.token.getTokensList = function (cb){
      httpGetRehive(tokensAPI,{},cb);
    };

    this.token.createToken = function (data,cb){
      httpPostRehive(tokensAPI,data,cb);
    };

    this.token.deleteToken = function (tokenKey,cb){
      httpDeleteRehive(tokensAPI + tokenKey,{},cb);
    };

    this.user.getUserProfile = function (cb){
      httpGetRehive(userProfileAPI,{},cb);
    };

    this.user.updateUserProfile = function (data,cb){
      httpPatchRehive(userProfileAPI,data,cb);
    };

    this.user.getUserAddress = function (cb){
      httpGetRehive(userAddressAPI,{},cb);
    };

    this.user.updateUserAddress = function (data,cb){
      httpPatchRehive(userAddressAPI,data,cb);
    };

    this.user.getUserBankAccounts = function (cb){
      httpGetRehive(userBankAccountsAPI,{},cb);
    };

    this.user.createUserBankAccount = function (data,cb){
      httpPostRehive(userBankAccountsAPI,data,cb);
    };

    this.user.updateUserBankAccount = function (accountId,data,cb){
      httpPatchRehive(userBankAccountsAPI + accountId,data,cb);
    };

    this.user.getUserBitcoinAccounts = function (cb){
      httpGetRehive(userBitcoinAccountsAPI,{},cb);
    };

    this.user.createUserBitcoinAccount = function (data,cb){
      httpPostRehive(userBitcoinAccountsAPI,data,cb);
    };

    this.user.updateUserBitcoinAccount = function (accountId,data,cb){
      httpPatchRehive(userBitcoinAccountsAPI + accountId,data,cb);
    };

    this.user.createDocument = function (data,cb){
        var token = getToken();
        var header = {};

        if(token){
            header['Authorization'] = 'Token ' + token;
        } else {
            delete header['Authorization'];
        }

        fetch(baseAPI + userCreateDocumentAPI,{
            method: 'POST',
            headers: header,
            body: data
        })
            .then(parseJSON)
            .then(function(response) {
                if(response.status == 'success'){
                    if(response.data && response.data.data){
                        cb(null,response.data.data);
                    } else if(response.data) {
                        cb(null,response.data);
                    } else{
                        cb(null,response);
                    }
                } else if(response.status == 'error'){
                    cb(response,null);
                }
            });
    };

    this.user.getUserEmailAddresses = function (cb){
      httpGetRehive(userEmailAddressesAPI,{},cb);
    };

    this.user.createUserEmailAddress = function (data,cb){
      httpPostRehive(userEmailAddressesAPI,data,cb);
    };

    this.user.updateUserEmailAddress = function (emailId,data,cb){
      httpPatchRehive(userEmailAddressesAPI + emailId,data,cb);
    };

    this.user.getUserMobileNumbers = function (cb){
      httpGetRehive(userMobileNumbersAPI,{},cb);
    };

    this.user.createUserMobileNumbers = function (data,cb){
      httpPostRehive(userMobileNumbersAPI,data,cb);
    };

    this.user.updateUserMobileNumbers = function (mobileNumberId,data,cb){
      httpPatchRehive(userMobileNumbersAPI + mobileNumberId,data,cb);
    };

    this.user.getUserNotifications = function (cb){
      httpGetRehive(userNotificationsAPI,{},cb);
    };

    this.user.updateUserNotifications = function (notificationsId,data,cb){
      httpPatchRehive(userNotificationsAPI + notificationsId,data,cb);
    };

    this.transactions.getListTransactions = function (filters,cb){
      if(filters){
          filters = '?' + filters;
      } else {
          filters = '';
      }
      httpGetRehive(transactionsAPI + filters,{},cb);
    };

    this.transactions.getTotalTransactionsList = function (filters,cb){
      if(filters){
          filters = '?' + filters;
      } else {
          filters = '';
      }
      httpGetRehive(transactionsAPI + totalTransactionsListAPI + filters,{},cb);
    };

    this.transactions.getTransaction = function (tx_code,cb){
      httpGetRehive(transactionsAPI + tx_code + '/',{},cb);
    };

    this.transactions.createWithdrawal = function (data,cb){
    httpPostRehive(withdrawalAPI,data,cb);
    };

    this.transactions.createDeposit = function (data,cb){
    httpPostRehive(depositAPI,data,cb);
    };

    this.accounts.getAccountsList = function (filter,cb){
      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + filter,{},cb);
    };

    this.accounts.getAccount = function (reference,filter,cb){

      reference = reference + '/';

      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + reference + filter,{},cb);
    };

    this.accounts.getAccountCurrenciesList = function (reference,filter,cb){
      if(filter){
          filter = '?' + filter;
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + filter,{},cb);
    };

    this.accounts.getAccountCurrency =function (reference,code,cb){
      httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + code + '/',{},cb);
    };

    this.accounts.updateAccountCurrency = function (reference,code,data,cb){
      httpPatchRehive(accountsAPI + reference + accountCurrenciesAPI + code + '/',data,cb);
    };

    this.company.getCompanyDetails = function getCompanyDetails(cb){
      httpGetRehive(companyAPI,{},cb);
    };

    this.company.getCompanyCurrencies = function getCompanyCurrencies(code,cb){
    if(code){
      code = code + '/';
    } else {
      code = '';
    }
      httpGetRehive(companyCurrenciesAPI + code,{},cb);
    };

    this.company.getCompanyBanks = function getCompanyBanks(cb){
      httpGetRehive(companyBanksAPI,{},cb);
    };


    //public functions end

    return this;
}
