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
      userBankAccountsAPI = 'user/bank-accounts/',
      userBitcoinAccountsAPI = 'user/bitcoin-accounts/',
      userCreateDocumentAPI = 'user/document/',
      userEmailAddressesAPI = 'user/emails/',
      userMobileNumbersAPI = 'user/mobiles/',
      userNotificationsAPI = 'user/notifications/',
      transactionsAPI = 'transactions/',
      totalTransactionsListAPI = 'totals/',
      debitAPI = 'transactions/debit/',
      creditAPI = 'transactions/credit/',
      transferAPI = 'transactions/transfer/',
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

     function serialize(obj) {
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
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

    var httpPostRehive = function(url,data){
        return new Promise(function(resolve,reject){
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
                            resolve(response.data.data);
                        } else if(response.data) {
                            resolve(response.data);
                        } else{
                            resolve(response);
                        }
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    var httpGetRehive = function(url){
        return new Promise(function(resolve,reject){
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
                            resolve(response.data.data);
                        } else if(response.data) {
                            resolve(response.data);
                        } else{
                            resolve(response);
                        }
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    var httpPatchRehive = function(url,data){
        return new Promise(function(resolve,reject){
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
                            resolve(response.data.data);
                        } else if(response.data) {
                            resolve(response.data);
                        } else{
                            resolve(response);
                        }
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    var httpDeleteRehive = function(url,data){
        return new Promise(function(resolve,reject){
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
                            resolve(response.data.data);
                        } else if(response.data) {
                            resolve(response.data);
                        } else{
                            resolve(response);
                        }
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    //public functions

    this.auth.register = function (credentials){
        return new Promise(function(resolve,reject){
            fetch(baseAPI + registerAPI,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function(response) {
                    if(response.status == 'success'){
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        });
    };

    this.auth.registerCompany = function(credentials){
        return new Promise(function(resolve,reject){
            fetch(baseAPI + registerCompanyAPI,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function(response) {
                    if(response.status == 'success'){
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    this.auth.login = function (credentials){
        return new Promise(function(resolve,reject){
            fetch(baseAPI + loginAPI,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function(response) {
                    if(response.status == 'success'){
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                })
        });
    };

    this.auth.logout = function (){
        return new Promise(function(resolve,reject){
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
                        resolve(response);
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    this.auth.logoutAll = function (){
        return new Promise(function(resolve,reject){
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
                        resolve(response);
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        })
    };

    this.auth.changePassword = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(changePasswordAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        })
    };

    this.auth.resetPassword = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(resetPasswordAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.auth.resetConfirmPassword = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(resetConfirmPasswordAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.auth.resendEmailVerification = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(resendEmailVerificationAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.auth.resendMobileVerification = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(resendMobileVerificationAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.auth.verifyMobile = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(verifyMobileAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.token.getTokensList = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(tokensAPI).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.token.getToken = function (tokenKey){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'A token is required'};

            if(tokenKey){
                url = tokensAPI + tokenKey
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function(response){
               resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.token.createToken = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(tokensAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.token.deleteToken = function (tokenKey){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'A token is required'};

            if(tokenKey){
                url = tokensAPI + tokenKey
            } else {
                reject(error);
            }
            httpDeleteRehive(url,{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserProfile = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userProfileAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserProfile = function (data){
        return new Promise(function(resolve,reject){
            httpPatchRehive(userProfileAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserAddress = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userAddressAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserAddress = function (data){
        return new Promise(function(resolve,reject){
            httpPatchRehive(userAddressAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserBankAccounts = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userBankAccountsAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserBankAccount = function (bankId,cb){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Bank id is required'};

            if(bankId && (typeof(bankId) == 'string')){
                url = userBankAccountsAPI + bankId + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createUserBankAccount = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(userBankAccountsAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserBankAccount = function (accountId,data){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if(accountId && (typeof(accountId) == 'string')){
                url = userBankAccountsAPI + accountId;
            } else {
                reject(error);
                return;
            }
            httpPatchRehive(url,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserBitcoinAccounts = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userBitcoinAccountsAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserBitcoinAccount = function (bitcoinAccountId){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if(bitcoinAccountId && (typeof(bitcoinAccountId) == 'string')){
                url = userBitcoinAccountsAPI + bitcoinAccountId + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createUserBitcoinAccount = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(userBitcoinAccountsAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.updateUserBitcoinAccount = function (accountId,data){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if(accountId && (typeof(accountId) == 'string')){
                url = userBitcoinAccountsAPI + accountId;
            } else {
                reject(error);
                return;
            }

            httpPatchRehive(url,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createDocument = function (data){
        return new Promise(function(resolve,reject){
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
                            resolve(response.data.data);
                        } else if(response.data) {
                            resolve(response.data);
                        } else{
                            resolve(response);
                        }
                    } else if(response.status == 'error'){
                        reject(response);
                    }
                });
        });
    };

    this.user.getUserEmailAddresses = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userEmailAddressesAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.createUserEmailAddress = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(userEmailAddressesAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserEmailAddress = function (emailId,data){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Email address id is required'};

            if(emailId && (typeof(emailId) == 'string')){
                url = userEmailAddressesAPI + emailId;
            } else {
                reject(error,null);
                return;
            }
            httpPatchRehive(url,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserMobileNumbers = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userMobileNumbersAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.createUserMobileNumber = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(userMobileNumbersAPI,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserMobileNumber = function (mobileNumberId,data){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Mobile number id is required'};

            if(mobileNumberId && (typeof(mobileNumberId) == 'string')){
                url = userMobileNumbersAPI + mobileNumberId;
            } else {
                reject(error);
                return;
            }
            httpPatchRehive(url,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserNotifications = function (){
        return new Promise(function(resolve,reject){
            httpGetRehive(userNotificationsAPI).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserNotifications = function (notificationsId,data){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Notification id is required'};

            if(notificationsId && (typeof(notificationsId) == 'string')){
                url = userNotificationsAPI + notificationsId;
            } else {
                reject(error,null);
                return;
            }
            httpPatchRehive(url,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.getTransactionsList = function (filters){
        return new Promise(function(resolve,reject){
            if(filters){
                filters = '?' + serialize(filters);
            } else {
                filters = '';
            }

            httpGetRehive(transactionsAPI + filters).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.getTotalTransactionsList = function (filters){
        return new Promise(function(resolve,reject){
            if(filters){
                filters = '?' + serialize(filters);
            } else {
                filters = '';
            }
            httpGetRehive(transactionsAPI + totalTransactionsListAPI + filters).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.transactions.getTransaction = function (txCode){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Transaction code is required'};

            if(txCode && (typeof(txCode) == 'string')){
                url = transactionsAPI + txCode + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.transactions.createDebit = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(debitAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.createCredit = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(creditAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.createTransfer = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(transferAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.getAccountsList = function (filter,cb){
      if(filter){
          filter = '?' + serialize(filter);
      } else {
          filter = '';
      }
      httpGetRehive(accountsAPI + filter);
    };

    this.accounts.getAccount = function (reference,filter,cb){
        var error = {status: 'error', message: 'Reference is required'};

        if(reference && (typeof(reference) == 'string')){
            reference = reference + '/';
        } else {
            cb(error,null);
            return;
        }

        if(filter){
            filter = '?' + serialize(filter);
        } else {
            filter = '';
        }

        httpGetRehive(accountsAPI + reference + filter);
    };

    this.accounts.getAccountCurrenciesList = function (reference,filter,cb){
        var error = {status: 'error', message: 'Reference is required'};

        if(!reference || !(typeof(reference) == 'string')){
            cb(error,null);
            return;
        }

        if(filter){
            filter = '?' + serialize(filter);
        } else {
            filter = '';
        }

        httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + filter);
    };

    this.accounts.getAccountCurrency =function (reference,currencyCode,cb){
        var error = {status: 'error', message: 'Reference is required'},
            error2 = {status: 'error', message: 'Currency code is required'};

        if(!reference || !(typeof(reference) == 'string')){
            cb(error,null);
            return;
        }

        if(!currencyCode || !(typeof(currencyCode) == 'string')){
            cb(error2,null);
            return;
        }
      httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + currencyCode + '/');
    };

    this.accounts.updateAccountCurrency = function (reference,currencyCode,data,cb){
        var error = {status: 'error', message: 'Reference is required'},
            error2 = {status: 'error', message: 'Currency Code is required'};

        if(!reference || !(typeof(reference) == 'string')){
            cb(error,null);
            return;
        }

        if(!currencyCode || !(typeof(currencyCode) == 'string')){
            cb(error2,null);
            return;
        }

      httpPatchRehive(accountsAPI + reference + accountCurrenciesAPI + currencyCode + '/',data,cb);
    };

    this.company.getCompanyDetails = function getCompanyDetails(cb){
      httpGetRehive(companyAPI);
    };

    this.company.getCompanyCurrencies = function getCompanyCurrencies(cb){
      httpGetRehive(companyCurrenciesAPI);
    };

    this.company.getCompanyCurrency = function (currencyCode,cb){
        var url,
            error = {status: 'error', message: 'Currency code is required'};

        if(currencyCode && (typeof(currencyCode) == 'string')){
            url = companyCurrenciesAPI + currencyCode + '/';
        } else {
            cb(error,null);
            return;
        }
        httpGetRehive(url);
    };

    this.company.getCompanyBanks = function getCompanyBanks(cb){
      httpGetRehive(companyBanksAPI);
    };


    //public functions end

    return this;
}
