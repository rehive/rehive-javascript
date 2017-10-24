"use strict";

function Rehive(config){

    this.auth = {};
    this.token = {};
    this.user = {};
    this.transactions = {};
    this.accounts = {};
    this.company = {};
    this.admin = {
        users: {},
        transactions: {},
        accounts: {}
    };
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
      companyBanksAPI = 'company/bank-account/',
      headers = {'Content-Type': 'application/json'};

    var adminUsersAPI = 'admin/users/',
        adminUserSwitchesAPI = '/switches/',
        adminUserAddressesAPI = 'admin/users/addresses/',
        adminUserBankAccountsAPI = 'admin/users/bank-accounts/',
        adminUserCryptoAccontsAPI = 'admin/users/crypto-accounts/',
        adminUserDocumentsAPI = 'admin/users/documents/',
        adminUserEmailsAPI = 'admin/users/emails/',
        adminUserMobilesAPI = 'admin/users/mobiles/',
        adminTransactionsAPI = 'admin/transactions/',
        adminTransactionsTotalAPI = 'admin/transactions/totals/',
        adminCreditTransactionsAPI = 'admin/transactions/credit/',
        adminDebitTransactionsAPI = 'admin/transactions/debit/',
        adminTransferTransactionsAPI = 'admin/transactions/transfer/',
        adminAccountsAPI = 'admin/accounts/',
        adminAccountsCurrenciesAPI = '/currencies/',
        adminAccountsCurrencyLimitsAPI = '/limits/',
        adminAccountsCurrencyFeesAPI = '/fees/',
        adminAccountsCurrencySwitchesAPI = '/switches/';

    if(config){
        config.apiVersion ? apiVersion = config.apiVersion : apiVersion = '3';
        config.authToken ? setToken(config.authToken) : setToken('');

    } else {
        apiVersion = '3';
        setToken('');
    }

     function serialize(obj) {
        var str = [];
        for(var p in obj){
            if(obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
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

    function saveFilterInSessionStorage(response){
        if(response.next){
            sessionStorage.setItem('nextFilterForLists',response.next);
        } else {
            sessionStorage.removeItem('nextFilterForLists');
        }
        if(response.previous){
            sessionStorage.setItem('previousFilterForLists',response.previous);
        } else {
            sessionStorage.removeItem('previousFilterForLists');
        }
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
                        } else if(response.message){
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        } else if(response.message){
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        } else if(response.message){
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        } else if(response.message){
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject(response.message);
                        }
                    }
                });
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
                        resolve({message: response.message});
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
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
                        resolve({message: response.message});
                    } else if(response.status == 'error'){
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.auth.changePassword = function (data){
        return new Promise(function(resolve,reject){
            httpPostRehive(changePasswordAPI,data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
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
                url = tokensAPI + tokenKey;
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
        });
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
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

    this.accounts.getAccountsList = function (filter){
        return new Promise(function(resolve,reject) {
            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(accountsAPI + filter).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.getAccount = function (reference,filter){
        return new Promise(function(resolve,reject){
            var error = {status: 'error', message: 'Reference is required'};

            if(reference && (typeof(reference) == 'string')){
                reference = reference + '/';
            } else {
                reject(error);
                return;
            }

            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(accountsAPI + reference + filter).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.accounts.getAccountCurrenciesList = function (reference,filter){
        return new Promise(function(resolve,reject){
            var error = {status: 'error', message: 'Reference is required'};

            if(!reference || !(typeof(reference) == 'string')){
                reject(error);
                return;
            }

            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + filter).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.accounts.getAccountCurrency =function (reference,currencyCode){
        return new Promise(function(resolve,reject){
            var error = {status: 'error', message: 'Reference is required'},
                error2 = {status: 'error', message: 'Currency code is required'};

            if(!reference || !(typeof(reference) == 'string')){
                reject(error);
                return;
            }

            if(!currencyCode || !(typeof(currencyCode) == 'string')){
                reject(error2);
                return;
            }
            httpGetRehive(accountsAPI + reference + accountCurrenciesAPI + currencyCode + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.updateAccountCurrency = function (reference,currencyCode,data){
        return new Promise(function(resolve,reject){
            var error = {status: 'error', message: 'Reference is required'},
                error2 = {status: 'error', message: 'Currency Code is required'};

            if(!reference || !(typeof(reference) == 'string')){
                reject(error);
                return;
            }

            if(!currencyCode || !(typeof(currencyCode) == 'string')){
                reject(error2);
                return;
            }

            httpPatchRehive(accountsAPI + reference + accountCurrenciesAPI + currencyCode + '/',data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.company.getCompanyDetails = function getCompanyDetails(){
        return new Promise(function(resolve,reject) {
            httpGetRehive(companyAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.getCompanyCurrencies = function getCompanyCurrencies(){
        return new Promise(function(resolve,reject) {
            httpGetRehive(companyCurrenciesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.getCompanyCurrency = function (currencyCode){
        return new Promise(function(resolve,reject){
            var url,
                error = {status: 'error', message: 'Currency code is required'};

            if(currencyCode && (typeof(currencyCode) == 'string')){
                url = companyCurrenciesAPI + currencyCode + '/';
            } else {
                reject(error);
                return;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.getCompanyBanks = function getCompanyBanks(){
        return new Promise(function(resolve,reject) {
            httpGetRehive(companyBanksAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getList = function (filter) {
        return new Promise(function(resolve,reject) {

            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUsersAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response)
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.create = function (data){
        return new Promise(function(resolve,reject){
            var token = getToken();
            var header = {};

            if(token){
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUsersAPI,{
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.get = function (uuid) {
        return new Promise(function(resolve,reject) {
            if(!uuid){
                reject('No identifier has been given');
                return;
            }

            httpGetRehive(adminUsersAPI + uuid + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.update = function (uuid,data){
        return new Promise(function(resolve,reject){
            if(!uuid){
                reject('No identifier has been given');
                return;
            }

            var token = getToken();
            var header = {};

            if(token){
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUsersAPI + uuid + '/',{
                method: 'PATCH',
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.getSwitchesList = function (uuid) {
        return new Promise(function(resolve,reject) {
            if(!uuid){
                reject('No identifier has been given');
                return;
            }

            httpGetRehive(adminUsersAPI + uuid + adminUserSwitchesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.createSwitch = function (uuid,data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserSwitchesAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getSwitch = function (uuid,id) {
        return new Promise(function(resolve,reject) {
            if(!uuid || !id){
                reject('No identifier or id has been given');
                return;
            }

            httpGetRehive(adminUsersAPI + uuid + adminUserSwitchesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateSwitch = function (uuid,id,data){
        return new Promise(function(resolve,reject){
            if(!uuid || !id){
                reject('No identifier or id has been given');
                return;
            }

            httpPatchRehive(adminUsersAPI + uuid + adminUserSwitchesAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteSwitch = function (uuid,id){
        return new Promise(function(resolve,reject){
            if(!uuid || !id){
                reject('No identifier or id has been given');
                return;
            }

            httpDeleteRehive(adminUsersAPI + uuid + adminUserSwitchesAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddressesList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserAddressesAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserAddressesAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddressesList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getAddressesList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createAddress = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUserAddressesAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddress = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminUserAddressesAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateAddress = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserAddressesAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteAddress = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserAddressesAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccountsList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserBankAccountsAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserBankAccountsAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccountsList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getBankAccountsList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createBankAccount = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUserBankAccountsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccount = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminUserBankAccountsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateBankAccount = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserBankAccountsAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteBankAccount = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserBankAccountsAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccountsList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserCryptoAccontsAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserCryptoAccontsAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccountsList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getCryptoAccountsList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createCryptoAccount = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUserCryptoAccontsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccount = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminUserCryptoAccontsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateCryptoAccount = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserCryptoAccontsAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteCryptoAccount = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserCryptoAccontsAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getDocumentsList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserDocumentsAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserDocumentsAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getDocumentsList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getDocumentsList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createDocument = function (data){
        return new Promise(function(resolve,reject){
            var token = getToken();
            var header = {};

            if(token){
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUserDocumentsAPI,{
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.getDocument = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id provided');
            }

            httpGetRehive(adminUserDocumentsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateDocument = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            var token = getToken();
            var header = {};

            if(token){
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUserDocumentsAPI + id + '/',{
                method: 'PATCH',
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
                        if(response.data){
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.deleteDocument = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserDocumentsAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmailsList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserEmailsAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserEmailsAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmailsList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getEmailsList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createEmail = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUserEmailsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmail = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminUserEmailsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateEmail = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserEmailsAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteEmail = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserEmailsAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobilesList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminUserMobilesAPI + '?user=' + uuid;
            } else {
                mainUrl = adminUserMobilesAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobilesList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.getMobilesList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.users.createMobile = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminUserMobilesAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobile = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminUserMobilesAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateMobile = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserMobilesAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteMobile = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserMobilesAPI + id + '/',{}).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getList = function (filter) {
        return new Promise(function(resolve,reject) {
            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminTransactionsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.transactions.getList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.transactions.getTotal = function (filter) {
        return new Promise(function(resolve,reject) {
            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminTransactionsTotalAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.get = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminTransactionsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.update = function (id,data){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminTransactionsAPI + id + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createCredit = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminCreditTransactionsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createDebit = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminDebitTransactionsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createTransfer = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminTransferTransactionsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getList = function (uuid) {
        return new Promise(function(resolve,reject) {
            var mainUrl;
            if(uuid){
                mainUrl = adminAccountsAPI + '?user=' + uuid;
            } else {
                mainUrl = adminAccountsAPI;
            }
            httpGetRehive(mainUrl).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.accounts.getList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.accounts.create = function (data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminAccountsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.get = function (id){
        return new Promise(function(resolve,reject){
            if(!id){
                reject('No address id provided');
            }

            httpGetRehive(adminAccountsAPI + id + '/').then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.update = function (reference,data){
        return new Promise(function(resolve,reject){
            if(!reference){
                reject('No reference has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + '/',data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrenciesList = function (reference,filter) {
        return new Promise(function(resolve,reject) {
            if(!reference){
                reject('No reference has been given');
                return;
            }

            if(filter){
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrenciesList.next = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('nextFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.accounts.getCurrenciesList.previous = function () {
        return new Promise(function(resolve,reject) {
            var url = sessionStorage.getItem('previousFilterForLists'),mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilterInSessionStorage(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.admin.accounts.getCurrency = function (reference,code) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code){
                reject('No reference or code has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrency = function (reference,code,data){
        return new Promise(function(resolve,reject){
            if(!reference || !code){
                reject('No reference or code has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyLimitsList = function (reference,code) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code){
                reject('No reference or code has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.createCurrencyLimit = function (reference,code,data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyLimit = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencyLimit = function (reference,code,id,data){
        return new Promise(function(resolve,reject){
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencyLimit = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id,{}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyFeesList = function (reference,code) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code){
                reject('No reference or code has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.createCurrencyFee = function (reference,code,data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyFee = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencyFee = function (reference,code,id,data){
        return new Promise(function(resolve,reject){
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencyFee = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id,{}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencySwitchesList = function (reference,code) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code){
                reject('No reference or code has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.createCurrencySwitch = function (reference,code,data){
        return new Promise(function(resolve,reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencySwitch = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencySwitch = function (reference,code,id,data){
        return new Promise(function(resolve,reject){
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id,data).then(function(response){
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencySwitch = function (reference,code,id) {
        return new Promise(function(resolve,reject) {
            if(!reference || !code || !id){
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id,{}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };



    //public functions end

    return this;
}
