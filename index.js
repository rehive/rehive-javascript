"use strict";

function Rehive(config) {

    this.auth = {};
    this.token = {};
    this.multiAuth = {
        sms: {},
        token: {}
    };
    this.authVerify = {};
    this.user = {};
    this.transactions = {};
    this.accounts = {};
    this.company = {};
    this.admin = {
        users: {},
        transactions: {},
        accounts: {},
        currencies: {},
        company: {},
        bankAccounts: {},
        webhooks: {},
        subtypes: {},
        notifications: {},
        tiers: {},
        switches: {},
        services: {},
        permissionGroups: {}
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
        multiFactorAuthStatusAPI = 'auth/mfa/',
        multiFactorAuthSmsAPI = 'auth/mfa/sms/',
        multiFactorAuthTokenAPI = 'auth/mfa/token/',
        multiFactorAuthVerifyAPI = 'auth/mfa/verify/',
        tokensAPI = 'auth/tokens/',
        userProfileAPI = 'user/',
        userTiersAPI = 'user/tiers/',
        userAddressAPI = 'user/address/',
        userBankAccountsAPI = 'user/bank-accounts/',
        userCryptoAccountsAPI = 'user/crypto-accounts/',
        userBitcoinAccountsAPI = 'user/bitcoin-accounts/',
        userCreateDocumentAPI = 'user/documents/',
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
        adminUsersTiersAPI = '/tiers/',
        adminUsersOverviewAPI = 'admin/users/overview/',
        adminUserSwitchesAPI = '/switches/',
        adminUserPermissionsAPI = '/permissions/',
        adminUserPermissionGroupsAPI = '/permission-groups/',
        adminUserAddressesAPI = 'admin/users/addresses/',
        adminUserBankAccountsAPI = 'admin/users/bank-accounts/',
        adminUserCryptoAccountsAPI = 'admin/users/crypto-accounts/',
        adminUserDocumentsAPI = 'admin/users/documents/',
        adminUserEmailsAPI = 'admin/users/emails/',
        adminUserMobilesAPI = 'admin/users/mobiles/',
        adminTransactionsAPI = 'admin/transactions/',
        adminTransactionsTotalAPI = 'admin/transactions/totals/',
        adminCreditTransactionsAPI = 'admin/transactions/credit/',
        adminDebitTransactionsAPI = 'admin/transactions/debit/',
        adminTransferTransactionsAPI = 'admin/transactions/transfer/',
        adminTransactionsSwitchesAPI = 'admin/transactions/switches/',
        adminTransactionsWebhooksAPI = 'admin/transactions/webhooks/',
        adminAccountsAPI = 'admin/accounts/',
        adminAccountsCurrenciesAPI = '/currencies/',
        adminAccountsCurrencyLimitsAPI = '/limits/',
        adminAccountsCurrencyFeesAPI = '/fees/',
        adminAccountsCurrencySwitchesAPI = '/switches/',
        adminCurrenciesAPI = 'admin/currencies/',
        adminCurrenciesBankAccountsAPI = '/bank-accounts/',
        adminCurrenciesOverviewAPI = '/overview/',
        adminCompanyAPI = 'admin/company/',
        adminCompanyAddressAPI = 'address/',
        adminWebhooksAPI = 'admin/webhooks/',
        adminSubtypesAPI = 'admin/subtypes/',
        adminNotificationsAPI = 'admin/notifications/',
        adminTiersAPI = 'admin/tiers/',
        adminTiersRequirementsAPI='/requirements/',
        adminTiersLimitsAPI='/limits/',
        adminTiersFeesAPI='/fees/',
        adminTiersSwitchesAPI='/switches/',
        adminSwitchesAPI = 'admin/switches/',
        adminBankAccountsAPI = 'admin/bank-accounts/',
        adminServicesAPI = 'admin/services/',
        adminPermissionGroupsAPI = 'admin/permission-groups/',
        adminPermissionGroupsPermissionsAPI = '/permissions/';

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
        });
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
        });
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
                });
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
        });
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
        });
    };

    this.auth.changePassword = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(changePasswordAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.multiAuth.multiFactorAuthStatus = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthStatusAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.multiFactorAuthGetStatus = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthSmsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.multiFactorAuthSMSPost = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthSmsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.token.multiFactorAuthGetTokenStatus = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthTokenAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.authVerify.verification = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthVerifyAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.sms.delete = function (data) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(multiFactorAuthSmsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

    this.multiAuth.token.delete = function () {
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
                url = tokensAPI + tokenKey;
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
        });
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

    this.user.getUserTiers = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userTiersAPI).then(function (response) {
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
    this.accounts.createAccount = function (data) {
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

            httpGetRehive(adminUsersAPI + filter).then(function (response) {
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

    this.admin.users.getOverview = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminUsersOverviewAPI).then(function (response) {
                saveFilterInSessionStorage(response)
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.create = function (data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();
            var header = {};

            if (token) {
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUsersAPI, {
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

    this.admin.users.get = function (uuid) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
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

    this.admin.users.update = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject('No identifier has been given');
                return;
            }

            var token = getToken();
            var header = {};

            if (token) {
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUsersAPI + uuid + '/', {
                method: 'PATCH',
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

    this.admin.users.getTiers = function (uuid) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject('No identifier has been given');
                return;
            }

            httpGetRehive(adminUsersAPI + uuid + adminUsersTiersAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getSwitchesList = function (uuid) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
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

    this.admin.users.createSwitch = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserSwitchesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getSwitch = function (uuid, id) {
        return new Promise(function (resolve, reject) {
            if (!uuid || !id) {
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

    this.admin.users.updateSwitch = function (uuid, id, data) {
        return new Promise(function (resolve, reject) {
            if (!uuid || !id) {
                reject('No identifier or id has been given');
                return;
            }

            httpPatchRehive(adminUsersAPI + uuid + adminUserSwitchesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteSwitch = function (uuid, id) {
        return new Promise(function (resolve, reject) {
            if (!uuid || !id) {
                reject('No identifier or id has been given');
                return;
            }

            httpDeleteRehive(adminUsersAPI + uuid + adminUserSwitchesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermissionsList = function (uuid,filter) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject('No identifier has been given');
                return;
            }

            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUsersAPI + uuid + adminUserPermissionsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermissionsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.getPermissionsList.previous = function () {
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

    this.admin.users.createPermission = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserPermissionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermission = function (uuid, id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminUsersAPI + uuid + adminUserPermissionsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deletePermission = function (uuid, id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminUsersAPI + uuid + adminUserPermissionsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermissionGroupsList = function (uuid,filter) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject('No identifier has been given');
                return;
            }

            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUsersAPI + uuid + adminUserPermissionGroupsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermissionGroupsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.getPermissionGroupsList.previous = function () {
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

    this.admin.users.addPermissionGroup = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserPermissionGroupsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getPermissionGroup = function (uuid, name) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminUsersAPI + uuid + adminUserPermissionGroupsAPI + name + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deletePermissionGroup = function (uuid, name) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminUsersAPI + uuid + adminUserPermissionGroupsAPI + name + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddressesList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }


            httpGetRehive(adminUserAddressesAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddressesList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createAddress = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserAddressesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getAddress = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminUserAddressesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateAddress = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserAddressesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteAddress = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserAddressesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccountsList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUserBankAccountsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccountsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createBankAccount = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserBankAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getBankAccount = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminUserBankAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateBankAccount = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserBankAccountsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteBankAccount = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserBankAccountsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccountsList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUserCryptoAccountsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccountsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createCryptoAccount = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserCryptoAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getCryptoAccount = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminUserCryptoAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateCryptoAccount = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserCryptoAccountsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteCryptoAccount = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserCryptoAccountsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getDocumentsList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUserDocumentsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getDocumentsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createDocument = function (data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();
            var header = {};

            if (token) {
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUserDocumentsAPI, {
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

    this.admin.users.getDocument = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id provided');
            }

            httpGetRehive(adminUserDocumentsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateDocument = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            var token = getToken();
            var header = {};

            if (token) {
                header['Authorization'] = 'Token ' + token;
            } else {
                delete header['Authorization'];
            }

            fetch(baseAPI + adminUserDocumentsAPI + id + '/', {
                method: 'PATCH',
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

    this.admin.users.deleteDocument = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserDocumentsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmailsList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUserEmailsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmailsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createEmail = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserEmailsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getEmail = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminUserEmailsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateEmail = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserEmailsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteEmail = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserEmailsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobilesList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminUserMobilesAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobilesList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.users.createMobile = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserMobilesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getMobile = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminUserMobilesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.updateMobile = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminUserMobilesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.deleteMobile = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpDeleteRehive(adminUserMobilesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
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
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.transactions.getTotal = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
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

    this.admin.transactions.get = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminTransactionsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No id has been given');
                return;
            }

            httpPatchRehive(adminTransactionsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createCredit = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminCreditTransactionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createDebit = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminDebitTransactionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createTransfer = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTransferTransactionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getSwitchesList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTransactionsSwitchesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createSwitch = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTransactionsSwitchesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getSwitch = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTransactionsSwitchesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.updateSwitch = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminTransactionsSwitchesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.deleteSwitch = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminTransactionsSwitchesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getWebhooksList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTransactionsWebhooksAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.createWebhook = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTransactionsWebhooksAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getWebhook = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTransactionsWebhooksAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.updateWebhook = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminTransactionsWebhooksAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.deleteWebhook = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminTransactionsWebhooksAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminAccountsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.accounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.get = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject('No address id provided');
            }

            httpGetRehive(adminAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.update = function (reference, data) {
        return new Promise(function (resolve, reject) {
            if (!reference) {
                reject('No reference has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrenciesList = function (reference, filter) {
        return new Promise(function (resolve, reject) {
            if (!reference) {
                reject('No reference has been given');
                return;
            }

            if (filter) {
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
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.accounts.getCurrency = function (reference, code) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject('No reference or code has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrency = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject('No reference or code has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyLimitsList = function (reference, code) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
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

    this.admin.accounts.createCurrencyLimit = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyLimit = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencyLimit = function (reference, code, id, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencyLimit = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyFeesList = function (reference, code) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
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

    this.admin.accounts.createCurrencyFee = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencyFee = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencyFee = function (reference, code, id, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencyFee = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencySwitchesList = function (reference, code) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
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

    this.admin.accounts.createCurrencySwitch = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getCurrencySwitch = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.updateCurrencySwitch = function (reference, code, id, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.deleteCurrencySwitch = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject('No reference or code or id has been given');
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySwitchesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminCurrenciesAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.currencies.getList.previous = function () {
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

    this.admin.currencies.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminCurrenciesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.get = function (code) {
        return new Promise(function (resolve, reject) {
            if (!code) {
                reject('No code provided');
            }

            httpGetRehive(adminCurrenciesAPI + code + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.update = function (code, data) {
        return new Promise(function (resolve, reject) {
            if (!code) {
                reject('No code has been given');
                return;
            }

            httpPatchRehive(adminCurrenciesAPI + code + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getBankAccountsList = function (code,filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getBankAccountsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.currencies.getBankAccountsList.previous = function () {
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

    this.admin.currencies.getBankAccount = function (code,id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.addBankAccount = function (code,data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.deleteBankAccount = function (code,id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getOverview = function (code) {
        return new Promise(function (resolve, reject) {
            if (!code) {
                reject('No code provided');
            }

            httpGetRehive(adminCurrenciesAPI + code + adminCurrenciesOverviewAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminCompanyAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.update = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminCompanyAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.getAddress = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminCompanyAPI + adminCompanyAddressAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.updateAddress = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminCompanyAPI + adminCompanyAddressAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.webhooks.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminWebhooksAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    }

    this.admin.webhooks.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminWebhooksAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.admin.webhooks.get = function (webhooksId) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'webhooks id is required'};

            if (webhooksId && (typeof(webhooksId) == 'string')) {
                url = adminWebhooksAPI + webhooksId + '/';
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

    this.admin.webhooks.update = function (webhooksId, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminWebhooksAPI + webhooksId + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.admin.webhooks.delete = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminWebhooksAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.subtypes.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminSubtypesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.subtypes.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminSubtypesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.subtypes.get = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminSubtypesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.subtypes.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminSubtypesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.subtypes.delete = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminSubtypesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.notifications.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminNotificationsAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    }

    this.admin.notifications.get = function (notificationId) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Notifications id is required'}
            if (notificationId && (typeof (notificationId) == 'string')) {
                url = adminNotificationsAPI + notificationId + '/'
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error)
            })
        })
    }

    this.admin.notifications.update = function (notificationId, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminNotificationsAPI + notificationId + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.admin.tiers.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTiersAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    }

    this.admin.tiers.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTiersAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.get = function (tierId) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminTiersAPI + tierId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.update = function (tierId, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminTiersAPI + tierId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.delete = function (tierId) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminTiersAPI + tierId + '/',{}).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.tiers.getRequirementsList = function (tiersId) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tiersId + adminTiersRequirementsAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.tiers.createRequirements = function (tiersId,data) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpPostRehive(adminTiersAPI + tiersId + adminTiersRequirementsAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.getRequirement = function (tierId,requirementId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!requirementId) {
                reject('No  requirement id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tierId + adminTiersRequirementsAPI + requirementId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.updateRequirement = function (tierId, requirementId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!requirementId) {
                reject('No  requirement id is provided');
                return
            }
            httpPatchRehive(adminTiersAPI + tierId + adminTiersRequirementsAPI + requirementId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.deleteRequirement = function (tierId,requirementId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!requirementId) {
                reject('No  requirement id is provided');
                return
            }
            httpDeleteRehive(adminTiersAPI + tierId + adminTiersRequirementsAPI + requirementId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.tiers.getFeesList = function (tiersId) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tiersId + adminTiersFeesAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    }

    this.admin.tiers.createFee = function (tiersId,data) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpPostRehive(adminTiersAPI + tiersId + adminTiersFeesAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.getFee = function (tierId,feeId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!feeId) {
                reject('No  fee id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tierId + adminTiersFeesAPI + feeId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.updateFee = function (tierId, feeId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!feeId) {
                reject('No  fee id is provided');
                return
            }
            httpPatchRehive(adminTiersAPI + tierId + adminTiersFeesAPI + feeId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.deleteFee = function (tierId,feeId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!feeId) {
                reject('No  fee id is provided');
                return
            }
            httpDeleteRehive(adminTiersAPI + tierId + adminTiersFeesAPI + feeId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.tiers.getSwitchesList = function (tiersId) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tiersId + adminTiersSwitchesAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.tiers.createSwitch = function (tiersId,data) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpPostRehive(adminTiersAPI + tiersId + adminTiersSwitchesAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.getSwitch = function (tierId,switchId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!switchId) {
                reject('No  switch id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tierId + adminTiersSwitchesAPI + switchId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.updateSwitch = function (tierId, switchId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!switchId) {
                reject('No  switch id is provided');
                return
            }
            httpPatchRehive(adminTiersAPI + tierId + adminTiersSwitchesAPI + switchId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.deleteSwitch = function (tierId,switchId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!switchId) {
                reject('No  switch id is provided');
                return
            }
            httpDeleteRehive(adminTiersAPI + tierId + adminTiersSwitchesAPI + switchId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.tiers.getLimitsList = function (tiersId) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tiersId + adminTiersLimitsAPI).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    }

    this.admin.tiers.createLimit = function (tiersId,data) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject('No Id is provided');
                return
            }
            httpPostRehive(adminTiersAPI + tiersId + adminTiersLimitsAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.getLimit = function (tierId,limitId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!limitId) {
                reject('No  requirement id is provided');
                return
            }
            httpGetRehive(adminTiersAPI + tierId + adminTiersLimitsAPI + limitId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.updateLimit = function (tierId, limitId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!limitId) {
                reject('No  requirement id is provided');
                return
            }
            httpPatchRehive(adminTiersAPI + tierId + adminTiersLimitsAPI + limitId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.tiers.deleteLimit = function (tierId,limitId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject('No  tier id is provided');
                return
            }
            if (!limitId) {
                reject('No  requirement id is provided');
                return
            }
            httpDeleteRehive(adminTiersAPI + tierId + adminTiersLimitsAPI + limitId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.switches.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminSwitchesAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.switches.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminSwitchesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.switches.get = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminSwitchesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.switches.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminSwitchesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.switches.delete = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminSwitchesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.getList = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminBankAccountsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminBankAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.get = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminBankAccountsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminBankAccountsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.delete = function (id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminBankAccountsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.services.getList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }

            httpGetRehive(adminServicesAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.services.getList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.services.getList.previous = function () {
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

    this.admin.services.get = function (id) {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminServicesAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.services.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminServicesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.getList = function (filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }


            httpGetRehive(adminPermissionGroupsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.getList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.permissionGroups.getList.previous = function () {
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

    this.admin.permissionGroups.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminPermissionGroupsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.get = function (name) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject('No permission group name provided');
            }

            httpGetRehive(adminPermissionGroupsAPI + name + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.update = function (name, data) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject('No permission group name has been given');
                return;
            }

            httpPatchRehive(adminPermissionGroupsAPI + name + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.delete = function (name) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject('No permission group name has been given');
                return;
            }

            httpDeleteRehive(adminPermissionGroupsAPI + name + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.getPermissionsList = function (name,filter) {
        return new Promise(function (resolve, reject) {
            if (filter) {
                filter = '?' + serialize(filter);
            } else {
                filter = '';
            }


            httpGetRehive(adminPermissionGroupsAPI + name + adminPermissionGroupsPermissionsAPI + filter).then(function (response) {
                saveFilterInSessionStorage(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.getPermissionsList.next = function () {
        return new Promise(function (resolve, reject) {
            var url = sessionStorage.getItem('nextFilterForLists'), mainUrl;
            if (url) {
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

    this.admin.permissionGroups.getPermissionsList.previous = function () {
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

    this.admin.permissionGroups.createPermission = function (name,data) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject('No permission group name has been given');
                return;
            }


            httpPostRehive(adminPermissionGroupsAPI + name + adminPermissionGroupsPermissionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.getPermission = function (name,id) {
        return new Promise(function (resolve, reject) {
            if (!name || !id) {
                reject('No permission group name or permission id has been given');
                return;
            }

            httpGetRehive(adminPermissionGroupsAPI + name + adminPermissionGroupsPermissionsAPI + id + '/').then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.permissionGroups.deletePermission = function (name,id) {
        return new Promise(function (resolve, reject) {
            if (!name || !id) {
                reject('No permission group name or permission id has been given');
                return;
            }

            httpDeleteRehive(adminPermissionGroupsAPI + name + adminPermissionGroupsPermissionsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    //public functions end

    if(typeof process === 'object' && process + '' === '[object process]'){
        // is node
        module.exports = this;
    }
    else{
        // not node
        return this;
    }
}
