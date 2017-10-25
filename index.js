"use strict";

function Rehive(config) {

    this.auth = {};
    this.token = {};
    this.multiAuth={
        sms:{},
        token:{}
    };
    this.authVerify={};
    this.user = {};
    this.transactions = {};
    this.accounts = {};
    this.company = {};
    this.admin = {
        users: {}
    };
    var apiVersion = '3',
        baseAPI = 'https://rehive.com/api/' + apiVersion + '/',
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
        multiFactorAuthStatusAPI='auth/mfa/',
        multiFactorAuthSmsAPI='auth/mfa/sms/',
        multiFactorAuthTokenAPI='auth/mfa/token/',
        multiFactorAuthVerifyAPI='auth/mfa/verify/',
        tokensAPI = 'auth/tokens/',
        userProfileAPI = 'user/',
        userAddressAPI = 'user/address/',
        userBankAccountsAPI = 'user/bank-accounts/',
        userCryptoAccountsAPI = 'user/crypto-accounts/',
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

    var adminUsersListAPI = 'admin/users/';

    if (config) {
        config.apiVersion ? apiVersion = config.apiVersion : apiVersion = '3';
        config.authToken ? setToken(config.authToken) : setToken('');

    } else {
        apiVersion = '3';
        setToken('');
    }

    function serialize(obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        }
        return str.join("&");
    }

    function setToken(newToken) {
        sessionStorage.setItem("token", newToken);
    }

    function getToken() {
        return sessionStorage.getItem("token") || '';
    }

    function removeToken() {
        delete headers['Authorization'];
        sessionStorage.removeItem("token");
    }

    function parseJSON(response) {
        return response.json()
    }

    function saveFilterInSessionStorage(response) {
        if (response.next) {
            sessionStorage.setItem('nextFilterForLists', response.next);
        } else {
            sessionStorage.removeItem('nextFilterForLists');
        }
        if (response.previous) {
            sessionStorage.setItem('previousFilterForLists', response.previous);
        } else {
            sessionStorage.removeItem('previousFilterForLists');
        }
    }

    function saveUserApiFilterInSessionStorage(response, key) {
        if (response.next) {
            sessionStorage.setItem('next' + key + 'FilterForLists', response.next);
        } else {
            sessionStorage.removeItem('next' + key + 'FilterForLists');
        }
        if (response.previous) {
            sessionStorage.setItem('previous' + key + 'FilterForLists', response.previous);
        } else {
            sessionStorage.removeItem('previous' + key + 'FilterForLists');
        }
    }

    var httpPostRehive = function (url, data) {
        console.log(JSON.stringify(data))
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        if (response.data && response.data.data) {
                            resolve(response.data.data);
                        } else if (response.data) {
                            resolve(response.data);
                        } else if (response.message) {
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    var httpGetRehive = function (url) {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + url, {
                method: 'GET',
                headers: headers
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        if (response.data && response.data.data) {
                            resolve(response.data.data);
                        } else if (response.data) {
                            resolve(response.data);
                        } else if (response.message) {
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    var httpPatchRehive = function (url, data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + url, {
                method: 'PATCH',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        if (response.data && response.data.data) {
                            resolve(response.data.data);
                        } else if (response.data) {
                            resolve(response.data);
                        } else if (response.message) {
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        })
    };

    var httpDeleteRehive = function (url, data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + url, {
                method: 'DELETE',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        if (response.data && response.data.data) {
                            resolve(response.data.data);
                        } else if (response.data) {
                            resolve(response.data);
                        } else if (response.message) {
                            resolve({message: response.message});
                        } else {
                            resolve({});
                        }
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    //public functions

    this.auth.register = function (credentials) {
        return new Promise(function (resolve, reject) {
            fetch(baseAPI + registerAPI, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.auth.registerCompany = function (credentials) {
        return new Promise(function (resolve, reject) {
            fetch(baseAPI + registerCompanyAPI, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        })
    };

    this.auth.login = function (credentials) {
        return new Promise(function (resolve, reject) {
            fetch(baseAPI + loginAPI, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(credentials)
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        setToken(response.data.token);
                        resolve(response.data.user);
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject(response.message);
                        }
                    }
                })
        });
    };

    this.auth.logout = function () {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + logoutAPI, {
                method: 'POST',
                headers: headers
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        removeToken();
                        resolve({message: response.message});
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        })
    };

    this.auth.logoutAll = function () {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            fetch(baseAPI + logoutAllAPI, {
                method: 'POST',
                headers: headers
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        removeToken();
                        resolve({message: response.message});
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        })
    };

    this.auth.changePassword = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(changePasswordAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.multiAuth.multiFactorAuthStatus=function(){
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthStatusAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.multiFactorAuthGetStatus=function(){
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthSmsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.multiFactorAuthSMSPost=function(data){
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthSmsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.token.multiFactorAuthGetTokenStatus=function(data){
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthTokenAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.authVerify.verification=function(data){
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthVerifyAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.delete=function(data){
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(multiFactorAuthSmsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.token.delete=function(){
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(multiFactorAuthTokenAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.auth.resetPassword = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resetPasswordAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.resetConfirmPassword = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resetConfirmPasswordAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.resendEmailVerification = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resendEmailVerificationAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.resendMobileVerification = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resendMobileVerificationAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.verifyMobile = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(verifyMobileAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.token.getTokensList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(tokensAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.token.getToken = function (tokenKey) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'A token is required'};

            if (tokenKey) {
                url = tokensAPI + tokenKey
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

    this.token.createToken = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(tokensAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.token.deleteToken = function (tokenKey) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'A token is required'};

            if (tokenKey) {
                url = tokensAPI + tokenKey
            } else {
                reject(error);
            }
            httpDeleteRehive(url, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserProfile = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userProfileAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserProfile = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(userProfileAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserAddress = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userAddressAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserAddress = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(userAddressAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserBankAccounts = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userBankAccountsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserBankAccount = function (bankId, cb) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Bank id is required'};

            if (bankId && (typeof(bankId) == 'string')) {
                url = userBankAccountsAPI + bankId + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createUserBankAccount = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userBankAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserBankAccount = function (accountId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (accountId && (typeof(accountId) == 'string')) {
                url = userBankAccountsAPI + accountId;
            } else {
                reject(error);
                return;
            }
            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserCryptoAccounts = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userCryptoAccountsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserCryptoAccount = function (cryptoAccountId) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (cryptoAccountId && (typeof(cryptoAccountId) == 'string')) {
                url = userBitcoinAccountsAPI + cryptoAccountId + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createUserCryptoAccounts = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userCryptoAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.updateUserCryptoAccounts = function (accountId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (accountId && (typeof(accountId) == 'string')) {
                url = userCryptoAccountsAPI + accountId;
            } else {
                reject(error);
                return;
            }

            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserBitcoinAccounts = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userBitcoinAccountsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserBitcoinAccount = function (bitcoinAccountId) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (bitcoinAccountId && (typeof(bitcoinAccountId) == 'string')) {
                url = userBitcoinAccountsAPI + bitcoinAccountId + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createUserBitcoinAccount = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userBitcoinAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.updateUserBitcoinAccount = function (accountId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (accountId && (typeof(accountId) == 'string')) {
                url = userBitcoinAccountsAPI + accountId;
            } else {
                reject(error);
                return;
            }

            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.createDocument = function (data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();
            var header = {};

            if (token) {
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + userCreateDocumentAPI, {
                method: 'POST',
                headers: header,
                body: data
            })
                .then(parseJSON)
                .then(function (response) {
                    if (response.status == 'success') {
                        if (response.data && response.data.data) {
                            resolve(response.data.data);
                        } else if (response.data) {
                            resolve(response.data);
                        } else {
                            resolve(response);
                        }
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({message: response.message});
                        }
                    }
                });
        });
    };

    this.user.getUserEmailAddresses = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userEmailAddressesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.createUserEmailAddress = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userEmailAddressesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserEmailAddress = function (emailId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Email address id is required'};

            if (emailId && (typeof(emailId) == 'string')) {
                url = userEmailAddressesAPI + emailId;
            } else {
                reject(error, null);
                return;
            }
            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.user.getUserMobileNumbers = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userMobileNumbersAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.createUserMobileNumber = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userMobileNumbersAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserMobileNumber = function (mobileNumberId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Mobile number id is required'};

            if (mobileNumberId && (typeof(mobileNumberId) == 'string')) {
                url = userMobileNumbersAPI + mobileNumberId;
            } else {
                reject(error);
                return;
            }
            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.getUserNotifications = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userNotificationsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.updateUserNotifications = function (notificationsId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Notification id is required'};

            if (notificationsId && (typeof(notificationsId) == 'string')) {
                url = userNotificationsAPI + notificationsId;
            } else {
                reject(error, null);
                return;
            }
            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.getTransactionsList = function (filters) {
        return new Promise(function (resolve, reject) {
            if (filters) {
                filters = '?' + serialize(filters);
            } else {
                filters = '';
            }

            httpGetRehive(transactionsAPI + filters).then(function (response) {
                saveUserApiFilterInSessionStorage(response, 'Transaction')
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.getTransactionsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextTransactionFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'Transaction')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.transactions.getTransactionsList.previous = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('previousTransactionFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'Transaction')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.transactions.getTotalTransactionsList = function (filters) {
        return new Promise(function (resolve, reject) {
            if (filters) {
                filters = '?' + serialize(filters);
            } else {
                filters = '';
            }
            httpGetRehive(transactionsAPI + totalTransactionsListAPI + filters).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.transactions.getTransaction = function (txCode) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Transaction code is required'};

            if (txCode && (typeof(txCode) == 'string')) {
                url = transactionsAPI + txCode + '/';
            } else {
                reject(error);
                return;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.transactions.createDebit = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(debitAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.createCredit = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(creditAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.createTransfer = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(transferAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.getAccountsList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(accountsAPI + filter).then(function (response) {
                saveUserApiFilterInSessionStorage(response, 'Account')
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    this.accounts.createAccount=function(data){
        return new Promise(function (resolve, reject) {
            httpPostRehive(accountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }
    this.accounts.getAccountsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextAccountFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'Account')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.accounts.getAccountsList.previous = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('previousAccountFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'Account')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.accounts.getAccount = function (reference, filter) {
        return new Promise(function (resolve, reject) {
            var error = {status: 'error', message: 'Reference is required'};

            if (reference && (typeof(reference) == 'string')) {
                reference = reference + '/';
            } else {
                reject(error);
                return;
            }

            if (filter) {
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

    this.accounts.getAccountCurrenciesList = function (reference, filter) {
        return new Promise(function (resolve, reject) {
            var error = {status: 'error', message: 'Reference is required'};

            if (!reference || !(typeof(reference) == 'string')) {
                reject(error);
                return;
            }

            if (filter) {
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

    this.accounts.getAccountCurrenciesList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextAccountCurrenciesFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'AccountCurrencies')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.accounts.getAccountCurrenciesList.previous = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('previousAccountCurrenciesFilterForLists'), mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilterInSessionStorage(response, 'AccountCurrencies')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject('Not allowed');
            }
        });
    };

    this.accounts.getAccountCurrency = function (reference, currencyCode) {
        return new Promise(function (resolve, reject) {
            var error = {status: 'error', message: 'Reference is required'},
                error2 = {status: 'error', message: 'Currency code is required'};

            if (!reference || !(typeof(reference) == 'string')) {
                reject(error);
                return;
            }

            if (!currencyCode || !(typeof(currencyCode) == 'string')) {
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

    this.accounts.updateAccountCurrency = function (reference, currencyCode, data) {
        return new Promise(function (resolve, reject) {
            var error = {status: 'error', message: 'Reference is required'},
                error2 = {status: 'error', message: 'Currency Code is required'};

            if (!reference || !(typeof(reference) == 'string')) {
                reject(error);
                return;
            }

            if (!currencyCode || !(typeof(currencyCode) == 'string')) {
                reject(error2);
                return;
            }

            httpPatchRehive(accountsAPI + reference + accountCurrenciesAPI + currencyCode + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.company.getCompanyDetails = function getCompanyDetails() {
        return new Promise(function (resolve, reject) {
            httpGetRehive(companyAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.getCompanyCurrencies = function getCompanyCurrencies() {
        return new Promise(function (resolve, reject) {
            httpGetRehive(companyCurrenciesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.getCompanyCurrency = function (currencyCode) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Currency code is required'};

            if (currencyCode && (typeof(currencyCode) == 'string')) {
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

    this.company.getCompanyBanks = function getCompanyBanks() {
        return new Promise(function (resolve, reject) {
            httpGetRehive(companyBanksAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getList = function (filter) {
        return new Promise(function (resolve, reject) {

            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUsersListAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response)
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('previousFilterForLists'), mainUrl;
            if (url) {
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


    //public functions end

    return this;
}
