"use strict";
var isNode = false;
var fetch;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Rehive;
    if (global.fetch && !process.env.IS_BROWSER) {
      fetch = global.fetch;
    } else {
      fetch = require('node-fetch');
      isNode = true;
    }
  } else {
    window.this;
    isNode = false;
    fetch = window.fetch;
  }

function Rehive(config) {
    this.public = {
        companies: []
    }
    this.auth = {
        password: {},
        email: {},
        mobile: {},
        tokens: {},
        mfa: {
            sms: {},
            token: {},
            status: {}
        }
    };

    this.user = {
        addresses: [],
        bankAccounts: {},
        cryptoAccounts: {},
        documents: {},
        emails: {},
        mobiles: {}
    };

    this.transactions = {
        totals: {}
    };

    this.transaction_collections = {};

    this.accounts = {
        currencies: {}
    };

    this.company = {
        currencies: {},
        bankAccounts: {}
    };

    this.groups = {};

    this.permissions = {};

    this.admin = {
        accessControlRules: {},
        users: {
            overview: {},
            tiers: {},
            addresses: {},
            bankAccounts: {},
            settings: {},
            cryptoAccounts: {},
            documents: {},
            emails: {},
            mobiles: {},
            permissions: {},
            groups: {},
            kyc: {},
            mfa: {
                token: {},
                sms: {}
            }
        },
        requests: {},
        transactions: {
            sets: {},
            totals: {}
        },
        transaction_collections: {},
        accounts: {
            currencies: {
                limits: {},
                fees: {},
                settings: {}
            },
            sets: {}
        },
        account: {
            currencies: {
                sets: {},
            }
        },
        currencies: {
            overview: {},
            bankAccounts: {}
        },
        company: {
            settings: {},
            address: {}
        },
        bankAccounts: {
            currencies: {}
        },
        webhooks: {},
        subtypes: {},
        notifications: {},
        services: {},
        groups: {
            tiers: {
                requirements: {},
                limits: {},
                fees: {},
                settings: {}
            },
            permissions: {},
            accountConfigurations: {
                currencies: {}
            },
            settings: {}
        },
        webhookTasks: {
            requests: {}
        }
    };

    var apiVersion = '3',
        publicCompaniesAPI = 'public/companies/',
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
        verifyEmailAPI = 'auth/email/verify/',
        multiFactorAuthStatusAPI = 'auth/mfa/',
        multiFactorAuthSmsAPI = 'auth/mfa/sms/',
        multiFactorAuthSendSmsAPI = 'auth/mfa/sms/send/',
        multiFactorApiTokenAPI = 'auth/mfa/token/',
        multiFactorAuthVerifyAPI = 'auth/mfa/verify/',
        tokensAPI = 'auth/tokens/',
        tokensVerifyAPI = 'auth/tokens/verify/',
        userProfileAPI = 'user/',
        userAddressAPI = 'user/addresses/',
        userBankAccountsAPI = 'user/bank-accounts/',
        userCryptoAccountsAPI = 'user/crypto-accounts/',
        userCreateDocumentAPI = 'user/documents/',
        userEmailAddressesAPI = 'user/emails/',
        userMobileNumbersAPI = 'user/mobiles/',
        transactionsAPI = 'transactions/',
        totalTransactionsListAPI = 'totals/',
        transactionCollectionsAPI = 'transaction-collections/',
        debitAPI = 'transactions/debit/',
        creditAPI = 'transactions/credit/',
        transferAPI = 'transactions/transfer/',
        accountsAPI = 'accounts/',
        accountCurrenciesAPI = '/currencies/',
        companyAPI = 'company/',
        companyCurrenciesAPI = 'company/currencies/',
        companyBanksAPI = 'company/bank-accounts/',
        permissionsAPI = 'permissions/',
        groupsAPI = 'groups/',
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json' };

    var adminUsersAPI = 'admin/users/',
        adminAccessControlRulesAPI = 'admin/access-control-rules/',
        adminUserKYCAPI = '/kyc/',
        adminUserMFAAPI = '/mfa/',
        adminUserMFASMSAPI = '/mfa/sms/',
        adminUserMFATokenAPI = '/mfa/token/',
        adminUsersSettingsAPI = '/settings/',
        adminUsersOverviewAPI = 'admin/users/overview/',
        adminUserPermissionsAPI = '/permissions/',
        adminUserGroupsAPI = '/groups/',
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
        // adminTransactionsSetsAPI = 'admin/transactions/sets/',
        adminTransactionsSetsAPI = 'admin/transactions/exports/',
        adminTransactionCollectionsAPI = 'admin/transaction-collections/',
        adminAccountsAPI = 'admin/accounts/',
        adminAccountSetsAPI = 'admin/accounts/exports/',
        adminAccountsCurrenciesAPI = '/currencies/',
        adminAccountsCurrencyLimitsAPI = '/limits/',
        adminAccountsCurrencyFeesAPI = '/fees/',
        adminAccountsCurrencySettingsAPI = '/settings/',
        adminAccountExportCurrenciesAPI = 'admin/account-currencies/',
        adminAccountExportCurrencySetsAPI = 'admin/account-currencies/exports/',
        adminCurrenciesAPI = 'admin/currencies/',
        adminCurrenciesBankAccountsAPI = '/bank-accounts/',
        adminCurrenciesOverviewAPI = '/overview/',
        adminCompanyAPI = 'admin/company/',
        adminCompanySettingsAPI = 'settings/',
        adminCompanyAddressAPI = 'address/',
        adminWebhooksAPI = 'admin/webhooks/',
        adminWebhookTasksAPI = 'admin/webhook-tasks/',
        adminWebhookTaskRequestsAPI = '/requests/',
        adminSubtypesAPI = 'admin/subtypes/',
        adminNotificationsAPI = 'admin/notifications/',
        adminTiersRequirementsAPI='/requirements/',
        adminTiersLimitsAPI='/limits/',
        adminTiersFeesAPI='/fees/',
        adminBankAccountsAPI = 'admin/bank-accounts/',
        adminServicesAPI = 'admin/services/',
        adminGroupsAPI = 'admin/groups/',
        adminRequestsAPI = 'admin/requests/',
        adminGroupsPermissionsAPI = '/permissions/',
        adminGroupsSettingsAPI = '/settings/',
        adminGroupsTiersAPI = '/tiers/',
        adminGroupsAccountConfigurationsAPI = '/account-configurations/',
        adminGroupsAccountConfigurationsCurrenciesAPI = '/currencies/',
        adminGroupsTiersSettingsAPI = '/settings/';

    var baseAPI;

    if(!config){
        config = {};
    }

    if (Object.keys(config).length > 0) {
        if (config.customAPIURL) {
            baseAPI = config.customAPIURL;
        } else {
            config.apiVersion ? apiVersion = config.apiVersion : apiVersion = '3';
            config.apiToken ? setToken(config.apiToken) : null // setToken('');

            config.network ? (config.network == 'staging' ?
            config.network = 'api.staging.rehive.com' : config.network = 'api.rehive.com') : config.network = 'api.rehive.com';
    
            baseAPI = 'https://' + config.network + '/' + apiVersion + '/';
        }
    } else {
        apiVersion = '3';
        config.network = 'api.rehive.com'
        baseAPI = 'https://' + config.network + '/' + apiVersion + '/';
    // setToken('');
    }

    
    var token,
        nextFilterForLists,
        previousFilterForLists,
        nextFilter = {},
        previousFilter = {};

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
        if (config && config.storageMethod) {
            if (sessionStorage !== undefined && localStorage !== undefined) {
							if (config.storageMethod === 'local') {
								localStorage.setItem('token', newToken);
							} else if (config.storageMethod === 'session') {
								sessionStorage.setItem('token', newToken)
							}
            } else {
                console.log("sessionStorage and localStorage not supported.");
                return;
            }
        }
        token = newToken;
    }

    function getToken() {
        if (config && config.storageMethod === 'local') {
            token = localStorage.getItem('token');
        } else if (config && config.storageMethod === 'session') {
            token = sessionStorage.getItem('token');
        }

        return token || '';
    }

    function removeToken() {
        if (config && config.storageMethod === 'local') {
            token = localStorage.removeItem('token');
        } else if (config && config.storageMethod === 'session') {
            token = sessionStorage.removeItem('token');
        }
        delete headers['Authorization'];
        token = '';
    }

    function parseJSON(response) {
        return response.json().then(function (json) {
            return new Promise(function (resolve) {
                if(response.ok){
                    resolve(json);
                } else{
                    json.status_code = response.status;
                    json.ok = response.ok;
                    resolve(json);
                }
            })
        })
    }

    function saveFilter(response) {
        if (response.next) {
			nextFilterForLists = response.next;
        } else {
			nextFilterForLists = null;
        }
        if (response.previous) {
			previousFilterForLists = response.previous;
        } else {
			previousFilterForLists = null;
        }
    }

    function saveUserApiFilter(response, key) {
        if (response.next) {
						nextFilter[key] = response.next;
        } else {
						delete nextFilter[key];
        }
        if (response.previous) {
						previousFilter[key] = response.previous;
        } else {
						delete previousFilter[key];
        }
    }

    var httpPostRehive = function (url, data, noAuth) {
        return new Promise(function (resolve, reject) {
            var token = getToken();

            if (token && !noAuth) {
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
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
            
            if (!isNode && data instanceof FormData) {
                delete headers['Content-Type']
            } else {
                headers['Content-Type'] = 'application/json'
                data = JSON.stringify(data)
            }

            fetch(baseAPI + url, {
                method: 'PATCH',
                headers: headers,
                body: data
            })
                .then(parseJSON)
                .then(function (response) {
                    headers['Content-Type'] = 'application/json'
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
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };
 
    this.removeToken = function () {
        if (config && config.storageMethod === 'local') {
            token = localStorage.removeItem('token');
        } else if (config && config.storageMethod === 'session') {
            token = sessionStorage.removeItem('token');
        }
        delete headers['Authorization'];
        token = '';
        return "Token removed"
    }

    //public functions

    this.public.companies.get = function (id) {
        return new Promise(function (resolve, reject) {
            var url
            if (id) {
                url = publicCompaniesAPI + id + '/';
            } else {
                url = publicCompaniesAPI;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };


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
                        resolve({
                            user: response.data.user,
                            token: response.data.token
                        });
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                        resolve({
                            user: response.data.user,
                            token: response.data.token
                        });
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                        resolve({});
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject(response.data);
                        } else {
                            reject({ status: response.status_code, message: response.message});
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
                        resolve({});
                    } else if (response.status == 'error') {
                        if (response.data) {
                            reject({ status: response.status_code, message: response.message, data: response.data});
                        } else {
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.auth.password.change = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(changePasswordAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.password.reset = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resetPasswordAPI, data, true).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.password.resetConfirm = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resetConfirmPasswordAPI, data, true).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.email.resendEmailVerification = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resendEmailVerificationAPI, data, true).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mobile.resendMobileVerification = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(resendMobileVerificationAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mobile.verify = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(verifyMobileAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.email.verify = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(verifyEmailAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.tokens.get = function (tokenKey) {
        var url
        if (tokenKey) {
            url = tokensAPI + tokenKey;
        } else {
            url = tokensAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.tokens.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(tokensAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.tokens.delete = function (tokenKey) {
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

    this.auth.tokens.verify = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(tokensVerifyAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.status.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthStatusAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.sms.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorAuthSmsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.sms.enable = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthSmsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.sms.send = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthSendSmsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.sms.disable = function (data) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(multiFactorAuthSmsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.token.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(multiFactorApiTokenAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.token.enable = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorApiTokenAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.token.disable = function () {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(multiFactorApiTokenAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.auth.mfa.verify = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(multiFactorAuthVerifyAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(userProfileAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.update = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(userProfileAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.addresses.get = function (id) {
        return new Promise(function (resolve, reject) {
            var url
            if (id) {
                url = userAddressAPI + id;
            } else {
                url = userAddressAPI;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.addresses.update = function (data) {
        return new Promise(function (resolve, reject) {
            var url
            if (data.id) {
                url = userAddressAPI + data.id + '/';
            } else {
                reject({ status: 400, message: 'No id has been given' });
            }
            httpPatchRehive(url, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.addresses.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userAddressAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.addresses.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(userAddressAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.bankAccounts.get = function (bankId) {
        return new Promise(function (resolve, reject) {
            var url;

            if (bankId) {
                url = userBankAccountsAPI + bankId + '/';
            } else {
                url = userBankAccountsAPI;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.bankAccounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userBankAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.bankAccounts.update = function (bankId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Account id is required'};

            if (bankId) {
                url = userBankAccountsAPI + bankId + '/';
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

    this.user.bankAccounts.delete = function(bankId) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Bank id is required'};

            if (bankId) {
                url = userBankAccountsAPI + bankId + '/';
            } else {
                reject(error);
                return;
            }

            httpDeleteRehive(url, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.cryptoAccounts.get = function (cryptoAccountId) {
        return new Promise(function (resolve, reject) {
            var url;

            if (cryptoAccountId) {
                url = userCryptoAccountsAPI + cryptoAccountId + '/';
            } else {
                url = userCryptoAccountsAPI;
            }
            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.cryptoAccounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userCryptoAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.cryptoAccounts.update = function (accountId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Crypto account id is required'};

            if (accountId) {
                url = userCryptoAccountsAPI + accountId + '/';
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

    this.user.cryptoAccounts.delete = function (id) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Crypto account id is required'};

            if (id) {
                url = userCryptoAccountsAPI + id + '/';
            } else {
                reject(error);
                return;
            }

            httpDeleteRehive(url, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.documents.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = userCreateDocumentAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = userCreateDocumentAPI + filters;
            } else {
                url = userCreateDocumentAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Documents');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.documents.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['Documents'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Documents');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.user.documents.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['Documents'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Documents');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.user.documents.create = function (data) {
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
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.user.emails.get = function (id) {
        return new Promise(function (resolve, reject) {
            var url;

            if (id) {
                url = userEmailAddressesAPI + id + '/';
            } else {
                url = userEmailAddressesAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.emails.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userEmailAddressesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.emails.update = function (emailId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Email address id is required'};

            if (emailId && data) {
                url = userEmailAddressesAPI + emailId + '/';
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

    this.user.emails.delete = function (id) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Email address id is required'};

            if (id) {
                url = userEmailAddressesAPI + id + '/';
            } else {
                reject(error);
                return;
            }

            httpDeleteRehive(url, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.mobiles.get = function (id) {
        return new Promise(function (resolve, reject) {
            var url;

            if (id) {
                url = userMobileNumbersAPI + id + '/';
            } else {
                url = userMobileNumbersAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.mobiles.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(userMobileNumbersAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.user.mobiles.update = function (mobileNumberId, data) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Mobile number id is required'};

            if (mobileNumberId && data) {
                url = userMobileNumbersAPI + mobileNumberId + '/';
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

    this.user.mobiles.delete = function (id) {
        return new Promise(function (resolve, reject) {
            var url,
                error = {status: 'error', message: 'Mobile number id is required'};

            if (id) {
                url = userMobileNumbersAPI + id + '/';
            } else {
                reject(error);
                return;
            }

            httpDeleteRehive(url, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = transactionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = transactionsAPI + filters;
            } else {
                url = transactionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Transaction');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transactions.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['Transaction'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Transaction');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.transactions.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['Transaction'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Transaction')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.transactions.totals.get = function (filters) {
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
        });
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

    this.transaction_collections.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = transactionCollectionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = transactionCollectionsAPI + filters;
            } else {
                url = transactionCollectionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Transaction Collection');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.transaction_collections.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['Transaction Collection'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Transaction Collection');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.transaction_collections.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['Transaction Collection'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Transaction Collection')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.transaction_collections.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(transactionCollectionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.reference) {
                url = accountsAPI + obj.reference + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = accountsAPI + filters;
            } else {
                url = accountsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Account');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['Account'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Account');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.accounts.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['Account'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Account')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.accounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(accountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.currencies.get = function (reference, obj) {
        return new Promise(function (resolve, reject) {
            var url,filters,error = {status: 'error', message: 'Reference is required'};

            if (!reference || !(typeof(reference) == 'string')) {
                reject(error);
                return;
            }

            if(obj && obj.code) {
                url = accountsAPI + reference + accountCurrenciesAPI + obj.code + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = accountsAPI + reference + accountCurrenciesAPI + filters;
            } else {
                url = accountsAPI + reference + accountCurrenciesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'AccountCurrencies');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.accounts.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['AccountCurrencies'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'AccountCurrencies');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.accounts.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['AccountCurrencies'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'AccountCurrencies')
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.accounts.currencies.update = function (reference, currencyCode, data) {
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

    this.company.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(companyAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.currencies.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.code) {
                url = companyCurrenciesAPI + obj.code + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = companyCurrenciesAPI + filters;
            } else {
                url = companyCurrenciesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'CompanyCurrencies');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.company.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['CompanyCurrencies'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'CompanyCurrencies');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.company.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['CompanyCurrencies'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'CompanyCurrencies');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.company.bankAccounts.get = function() {
        return new Promise(function (resolve, reject) {
            httpGetRehive(companyBanksAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.permissions.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = permissionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = permissionsAPI + filters;
            } else {
                url = permissionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Permissions');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.permissions.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilter['Permissions'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Permissions');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.permissions.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilter['Permissions'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Permissions');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.groups.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.name) {
                url = groupsAPI + obj.name + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = groupsAPI + filters;
            } else {
                url = groupsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveUserApiFilter(response, 'Groups');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.groups.getNext = function () {
        return new Promise(function (resolve, reject) {
			var url = nextFilter['Groups'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'Groups');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.groups.getPrevious = function () {
        return new Promise(function (resolve, reject) {
			var url = previousFilter['Groups'], mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveUserApiFilter(response, 'CompanyCurrencies');
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accessControlRules.get = function (obj) {
        return new Promise(function (resolve, reject) {

            var url,filters;

            if(obj && obj.id) {
                url = adminAccessControlRulesAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccessControlRulesAPI + filters;
            } else {
                url = adminAccessControlRulesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accessControlRules.getNext = function () {
        return new Promise(function (resolve, reject) {
			var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accessControlRules.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accessControlRules.create = function (data) {
        return new Promise(function (resolve, reject) {
            if(!data){
                reject({ status: 400, message: 'No data has been given' });
                return;
            }
            httpPostRehive(adminAccessControlRulesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accessControlRules.update = function (id,data) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpPatchRehive(adminAccessControlRulesAPI + id, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accessControlRules.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpDeleteRehive(adminAccessControlRulesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.overview.get = function (obj) {
        return new Promise(function (resolve, reject) {
             var url,filters;

            if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUsersOverviewAPI + filters;
            } else {
                url = adminUsersOverviewAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.settings.get = function (id) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpGetRehive(adminUsersAPI + id + adminUsersSettingsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.settings.update = function (id,data) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpPatchRehive(adminUsersAPI + id + adminUsersSettingsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.kyc.get = function (id) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpGetRehive(adminUsersAPI + id + adminUserKYCAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.kyc.update = function (id,data) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpPatchRehive(adminUsersAPI + id + adminUserKYCAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.get = function (obj) {
        return new Promise(function (resolve, reject) {

            var url,filters;

            if(obj && obj.id) {
                url = adminUsersAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUsersAPI + filters;
            } else {
                url = adminUsersAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.getNext = function () {
        return new Promise(function (resolve, reject) {
            var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.create = function (data) {
        return new Promise(function (resolve, reject) {
            var token = getToken();


            if (token) {
                headers['Authorization'] = 'Token ' + token;
            } else {
                delete headers['Authorization'];
            }

            if (!isNode && data instanceof FormData) {
                delete headers['Content-Type']
            } else {
                data = JSON.stringify(data)
            }

            fetch(baseAPI + adminUsersAPI, {
                method: 'POST',
                headers: headers,
                body: data
            })
            .then(parseJSON)
                .then(function (response) {
                    headers['Content-Type'] = 'application/json'
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
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.update = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject({ status: 400, message: 'No id has been given' });
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
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.delete = function (uuid) {
        return new Promise(function (resolve, reject) {
            if(!uuid){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpDeleteRehive(adminUsersAPI + uuid + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.permissions.get = function (uuid, obj) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            var url, filters;

            if(obj && obj.id) {
                url = adminUsersAPI + uuid + adminUserPermissionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUsersAPI + uuid + adminUserPermissionsAPI + filters;
            } else {
                url = adminUsersAPI + uuid + adminUserPermissionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.permissions.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.permissions.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.permissions.create = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserPermissionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.permissions.delete = function (uuid, id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminUsersAPI + uuid + adminUserPermissionsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.groups.get = function (uuid,obj) {
        return new Promise(function (resolve, reject) {
            if (!uuid) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            var url, filters;

            if(obj && obj.name) {
                url = adminUsersAPI + uuid + adminUserGroupsAPI + obj.name + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUsersAPI + uuid + adminUserGroupsAPI + filters;
            } else {
                url = adminUsersAPI + uuid + adminUserGroupsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.groups.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.groups.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.groups.create = function (uuid, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUsersAPI + uuid + adminUserGroupsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.groups.delete = function (uuid, name) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminUsersAPI + uuid + adminUserGroupsAPI + name + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.addresses.get = function (obj) {
        return new Promise(function (resolve, reject) {

            var url,filters;

            if(obj && obj.id) {
                url = adminUserAddressesAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserAddressesAPI + filters;
            } else {
                url = adminUserAddressesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.addresses.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.addresses.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.addresses.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserAddressesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.addresses.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpPatchRehive(adminUserAddressesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.addresses.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserAddressesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.bankAccounts.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminUserBankAccountsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserBankAccountsAPI + filters;
            } else {
                url = adminUserBankAccountsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.bankAccounts.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.bankAccounts.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.bankAccounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserBankAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.bankAccounts.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpPatchRehive(adminUserBankAccountsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.bankAccounts.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserBankAccountsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.cryptoAccounts.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminUserCryptoAccountsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserCryptoAccountsAPI + filters;
            } else {
                url = adminUserCryptoAccountsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.cryptoAccounts.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.cryptoAccounts.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.cryptoAccounts.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserCryptoAccountsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.cryptoAccounts.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpPatchRehive(adminUserCryptoAccountsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.cryptoAccounts.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserCryptoAccountsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.documents.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminUserDocumentsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserDocumentsAPI + filters;
            } else {
                url = adminUserDocumentsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.documents.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.documents.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.documents.create = function (data) {
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
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.documents.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
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
                            reject({ status: response.status_code, message: response.message});
                        }
                    }
                });
        });
    };

    this.admin.users.documents.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserDocumentsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.emails.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminUserEmailsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserEmailsAPI + filters;
            } else {
                url = adminUserEmailsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.emails.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.emails.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.emails.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserEmailsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.emails.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpPatchRehive(adminUserEmailsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.emails.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserEmailsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mobiles.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminUserMobilesAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminUserMobilesAPI + filters;
            } else {
                url = adminUserMobilesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mobiles.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.mobiles.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.users.mobiles.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminUserMobilesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mobiles.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpPatchRehive(adminUserMobilesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mobiles.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUserMobilesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mfa.get = function (id) {
        return new Promise(function (resolve, reject) {
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }
            httpGetRehive(adminUsersAPI + id + adminUserMFAAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mfa.sms.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUsersAPI + id + adminUserMFASMSAPI, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.users.mfa.token.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminUsersAPI + id + adminUserMFATokenAPI, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminTransactionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminTransactionsAPI + filters;
            } else {
                url = adminTransactionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.getNext = function () {
        return new Promise(function (resolve, reject) {

						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transactions.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transactions.sets.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminTransactionsSetsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminTransactionsSetsAPI + filters;
            } else {
                url = adminTransactionsSetsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.sets.getNext = function () {
        return new Promise(function (resolve, reject) {

						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transactions.sets.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transactions.sets.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTransactionsSetsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.sets.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminTransactionsSetsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.totals.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var filter;

            if (obj) {
                filter = '?' + serialize(obj.filters);
            } else {
                filter = '';
            }

            httpGetRehive(adminTransactionsTotalAPI + filter).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transactions.update = function (id, data) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
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

    this.admin.transaction_collections.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminTransactionCollectionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminTransactionCollectionsAPI + filters;
            } else {
                url = adminTransactionCollectionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transaction_collections.getNext = function () {
        return new Promise(function (resolve, reject) {

						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transaction_collections.getPrevious = function () {
        return new Promise(function (resolve, reject) {
						var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.transaction_collections.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminTransactionCollectionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transaction_collections.update = function (reference, data) {
        return new Promise(function (resolve, reject) {
            if (!reference) {
                reject({ status: 400, message: 'No reference has been given' });
                return;
            }

            httpPatchRehive(adminTransactionCollectionsAPI + reference + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.transaction_collections.delete = function(id){
        return new Promise(function(resolve, reject){
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminTransactionCollectionsAPI + id + '/', {}).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };
   
    this.admin.accounts.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.reference) {
                url = adminAccountsAPI + obj.reference + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccountsAPI + filters;
            } else {
                url = adminAccountsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.sets.get = function(obj){
        return new Promise(function(resolve, reject){
            var url,filters;
            if(obj && obj.id){
                url = adminAccountSetsAPI + obj.id + '/';
            }
            else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccountSetsAPI + filters;
            }
            else {
                url = adminAccountSetsAPI;
            }

            httpGetRehive(url).then(function (response){
                saveFilter(response);
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.admin.accounts.sets.getNext = function(){
        return new Promise(function(resolve, reject){
            var url = nextFilterForLists, mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function(response){
                    saveFilter(response);
                    resolve(response);
                }, function(error){
                    reject(error);
                });
            }
            else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.sets.getPrevious = function(){
        return new Promise(function (resolve, reject){
            var url = previousFilterForLists, mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response){
                    saveFilter(response);
                    resolve(response);
                }, function(error) {
                    reject(error);
                });
            }
            else{
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.sets.create = function (data){
        return new Promise(function(resolve, reject){
            httpPostRehive(adminAccountSetsAPI, data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.admin.accounts.sets.delete = function(id){
        return new Promise(function(resolve, reject){
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminAccountSetsAPI + id + '/', {}).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.admin.account.currencies.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.reference) {
                url = adminAccountExportCurrenciesAPI + obj.reference + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccountExportCurrenciesAPI + filters;
            } else {
                url = adminAccountExportCurrenciesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.account.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.account.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.account.currencies.sets.get = function(obj){
        return new Promise(function(resolve, reject){
            var url,filters;
            if(obj && obj.id){
                url = adminAccountExportCurrencySetsAPI + obj.id + '/';
            }
            else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccountExportCurrencySetsAPI + filters;
            }
            else {
                url = adminAccountExportCurrencySetsAPI;
            }

            httpGetRehive(url).then(function (response){
                saveFilter(response);
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.admin.account.currencies.sets.getNext = function(){
        return new Promise(function(resolve, reject){
            var url = nextFilterForLists, mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function(response){
                    saveFilter(response);
                    resolve(response);
                }, function(error){
                    reject(error);
                });
            }
            else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.account.currencies.sets.getPrevious = function(){
        return new Promise(function (resolve, reject){
            var url = previousFilterForLists, mainUrl;
            if(url){
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response){
                    saveFilter(response);
                    resolve(response);
                }, function(error) {
                    reject(error);
                });
            }
            else{
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.account.currencies.sets.create = function (data){
        return new Promise(function(resolve, reject){
            httpPostRehive(adminAccountExportCurrencySetsAPI, data).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
        });
    };

    this.admin.account.currencies.sets.delete = function(id){
        return new Promise(function(resolve, reject){
            if(!id){
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminAccountExportCurrencySetsAPI + id + '/', {}).then(function(response){
                resolve(response);
            }, function(error){
                reject(error);
            });
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

    this.admin.accounts.update = function (reference, data) {
        return new Promise(function (resolve, reject) {
            if (!reference) {
                reject({ status: 400, message: 'No reference has been given' });
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.get = function (reference, obj) {
        return new Promise(function (resolve, reject) {
            if (!reference) {
                reject({ status: 400, message: 'No reference has been given' });
                return;
            }

            var url,filters;

            if(obj && obj.code) {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + obj.code + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + filters;
            } else {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.accounts.currencies.create = function (reference, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.update = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject({ status: 400, message: 'No reference or code has been given' });
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.limits.get = function (reference, code , obj) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject({ status: 400, message: 'No reference or code has been given' });
                return;
            }

            var url;

            if(obj && obj.id) {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + obj.id + '/';
            }  else {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.limits.create = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.limits.update = function (reference, code, id, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject({ status: 400, message: 'No reference or code or id has been given' });
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.limits.delete = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject({ status: 400, message: 'No reference or code or id has been given' });
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyLimitsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.fees.get = function (reference, code, obj) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject({ status: 400, message: 'No reference or code has been given' });
                return;
            }

            var url;

            if(obj && obj.id) {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + obj.id + '/';
            }  else {
                url = adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.fees.create = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.fees.update = function (reference, code, id, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject({ status: 400, message: 'No reference or code or id has been given' });
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.fees.delete = function (reference, code, id) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code || !id) {
                reject({ status: 400, message: 'No reference or code or id has been given' });
                return;
            }

            httpDeleteRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencyFeesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.settings.get = function (reference, code) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject({ status: 400, message: 'No reference or code has been given' });
                return;
            }

            httpGetRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySettingsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.accounts.currencies.settings.update = function (reference, code, data) {
        return new Promise(function (resolve, reject) {
            if (!reference || !code) {
                reject({ status: 400, message: 'No reference or code has been given' });
                return;
            }

            httpPatchRehive(adminAccountsAPI + reference + adminAccountsCurrenciesAPI + code + adminAccountsCurrencySettingsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.code) {
                url = adminCurrenciesAPI + obj.code + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminCurrenciesAPI + filters;
            } else {
                url = adminCurrenciesAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
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

    this.admin.currencies.update = function (code, data) {
        return new Promise(function (resolve, reject) {
            if (!code) {currencies.update
                reject({ status: 400, message: 'No code has been given' });
                return;
            }

            httpPatchRehive(adminCurrenciesAPI + code + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.delete = function (code) {
        return new Promise(function (resolve, reject) {
            if (!code) {
                reject({ status: 400, message: 'No code has been given' });
                return;
            }

            httpDeleteRehive(adminCurrenciesAPI + code + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.overview.get = function (code) {
        return new Promise(function (resolve, reject) {
            if (!code) {
                reject({ status: 400, message: 'No code provided' });
            }

            httpGetRehive(adminCurrenciesAPI + code + adminCurrenciesOverviewAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.bankAccounts.get = function (code,obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + filters;
            } else {
                url = adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.bankAccounts.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.currencies.bankAccounts.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response)
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.currencies.bankAccounts.create = function (code,data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI,data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.currencies.bankAccounts.delete = function (code,id) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminCurrenciesAPI + code + adminCurrenciesBankAccountsAPI + id + '/').then(function (response) {
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

    this.admin.company.settings.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminCompanyAPI + adminCompanySettingsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.settings.update = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminCompanyAPI + adminCompanySettingsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.address.get = function () {
        return new Promise(function (resolve, reject) {
            httpGetRehive(adminCompanyAPI + adminCompanyAddressAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.company.address.update = function (data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminCompanyAPI + adminCompanyAddressAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.get = function (obj) {
        var url;

        if(obj && obj.id) {
            url = adminBankAccountsAPI + obj.id + '/';
        } else {
            url = adminBankAccountsAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
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

    this.admin.bankAccounts.currencies.get = function (bankId, currency) {
        return new Promise(function (resolve, reject) {
            if (!bankId) {
                reject({ status: 400, message: 'No bank ID has been given' });
                return;
            }

            var url = adminBankAccountsAPI + bankId + '/currencies/';

            if (currency) {
                url += currency
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
            var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    if (response.next) {
                        saveFilter(response);
                    }
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.bankAccounts.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.bankAccounts.currencies.create = function (bankId, data) {
        if (!data.currency) {
            reject({ status: 400, message: 'No currency has been given' });
            return;
        }
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminBankAccountsAPI + bankId + '/currencies/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.bankAccounts.currencies.delete = function (bankId, currency) {
        if (!bankId) {
            reject({ status: 400, message: 'No bank ID has been given' });
            return;
        }

        if (!currency) {
            reject({ status: 400, message: 'No currency has been given' });
            return;
        }

        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminBankAccountsAPI + bankId + '/currencies/' + currency, {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.webhooks.get = function (obj) {
        var url,filters;

        if(obj && obj.id) {
            url = adminWebhooksAPI + obj.id + '/';
        } else if(obj && obj.filters){
            filters = '?' + serialize(obj.filters);
            url = adminWebhooksAPI + filters;
        } else {
            url = adminWebhooksAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.webhooks.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.webhooks.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.webhooks.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminWebhooksAPI, data).then(function (response) {
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

    this.admin.webhookTasks.get = function (obj) {
        var url,filters;

        if(obj && obj.id) {
            url = adminWebhookTasksAPI + obj.id + '/';
        } else if(obj && obj.filters){
            filters = '?' + serialize(obj.filters);
            url = adminWebhookTasksAPI + filters;
        } else {
            url = adminWebhookTasksAPI;
        }

        if(obj && obj.id){
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
                            if (response.data) {
                                resolve(response.data);
                            }
                        } else if (response.status == 'error') {
                            if (response.data) {
                                reject(response.data);
                            } else {
                                reject({ status: response.status_code, message: response.message});
                            }
                        }
                    });
            });
        } else {
            return new Promise(function (resolve, reject) {
                httpGetRehive(url).then(function (response) {
                    saveFilter(response);
                    resolve(response)
                }, function (err) {
                    reject(err)
                })
            })
        }
    };



    this.admin.webhookTasks.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.webhookTasks.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.webhookTasks.requests.get = function (webhookTaskID,obj) {
        var url,filters;

        if(obj && obj.id) {
            url = adminWebhookTasksAPI + webhookTaskID + adminWebhookTaskRequestsAPI + obj.id +  '/';
        } else if(obj && obj.filters){
            filters = '?' + serialize(obj.filters);
            url = adminWebhookTasksAPI + webhookTaskID + adminWebhookTaskRequestsAPI + filters;
        } else {
            url = adminWebhookTasksAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.webhookTasks.requests.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.webhookTasks.requests.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.subtypes.get = function (obj) {
        var url;

        if(obj && obj.id) {
            url = adminSubtypesAPI + obj.id + '/';
        } else {
            url = adminSubtypesAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
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

    this.admin.notifications.get = function (obj) {
        var url;

        if(obj && obj.id) {
            url = adminNotificationsAPI + obj.id + '/';
        } else {
            url = adminNotificationsAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };


    this.admin.notifications.update = function (notificationId, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminNotificationsAPI + notificationId + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        })
    };

    this.admin.services.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminServicesAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminServicesAPI + filters;
            } else {
                url = adminServicesAPI;
            }


            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.services.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.services.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
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

    this.admin.services.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminServicesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.services.delete = function (id) {
        return new Promise(function (resolve, reject) {
            if (!id) {
                reject({ status: 400, message: 'No id has been given' });
                return;
            }

            httpDeleteRehive(adminServicesAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.requests.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminRequestsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminRequestsAPI + filters;
            } else {
                url = adminRequestsAPI;
            }


            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.requests.getNext = function () {
        return new Promise(function (resolve, reject) {
            var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    if (response.next) {
                        saveFilter(response);
                    }
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.requests.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.get = function (obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.name) {
                url = adminGroupsAPI + obj.name + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminGroupsAPI + filters;
            } else {
                url = adminGroupsAPI;
            }


            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.create = function (data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminGroupsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.update = function (name, data) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpPatchRehive(adminGroupsAPI + name + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.delete = function (name) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpDeleteRehive(adminGroupsAPI + name + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.permissions.get = function (name,obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.id) {
                url = adminGroupsAPI + name + adminGroupsPermissionsAPI + obj.id + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminGroupsAPI + name + adminGroupsPermissionsAPI + filters;
            } else {
                url = adminGroupsAPI + name + adminGroupsPermissionsAPI;
            }

            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.permissions.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.permissions.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.permissions.create = function (name,data) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }


            httpPostRehive(adminGroupsAPI + name + adminGroupsPermissionsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.permissions.delete = function (name,id) {
        return new Promise(function (resolve, reject) {
            if (!name || !id) {
                reject({ status: 400, message: 'No group name or permission id has been given' });
                return;
            }

            httpDeleteRehive(adminGroupsAPI + name + adminGroupsPermissionsAPI + id + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.settings.get = function (name) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpGetRehive(adminGroupsAPI + name + adminGroupsSettingsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.settings.update = function (name, data) {
        if (!name) {
            reject({ status: 400, message: 'No group name has been given' });
            return;
        }

        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminGroupsAPI + name + adminGroupsSettingsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.tiers.get = function (name,obj) {
        var url;

        if(obj && obj.id) {
            url = adminGroupsAPI + name + adminGroupsTiersAPI + obj.id + '/';
        } else {
            url = adminGroupsAPI + name + adminGroupsTiersAPI;
        }

        return new Promise(function (resolve, reject) {
            httpGetRehive(url).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.groups.tiers.create = function (name,data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminGroupsAPI + name + adminGroupsTiersAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.update = function (name,tierId, data) {
        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.delete = function (name,tierId) {
        return new Promise(function (resolve, reject) {
            httpDeleteRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + '/',{}).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.groups.tiers.requirements.get = function (name,tierId,obj) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }

            var url;

            if(obj && obj.id) {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersRequirementsAPI + obj.id + '/';
            } else {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersRequirementsAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.groups.tiers.requirements.create = function (name,tiersId,data) {
        return new Promise(function (resolve, reject) {
            if (!tiersId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }
            httpPostRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tiersId + adminTiersRequirementsAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.requirements.update = function (name,tierId, requirementId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No  tier id is provided' });
                return
            }
            if (!requirementId) {
                reject({ status: 400, message: 'No  requirement id is provided' });
                return
            }
            httpPatchRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersRequirementsAPI + requirementId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.requirements.delete = function (name,tierId,requirementId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No  tier id is provided' });
                return
            }
            if (!requirementId) {
                reject({ status: 400, message: 'No  requirement id is provided' });
                return
            }
            httpDeleteRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersRequirementsAPI + requirementId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };


    this.admin.groups.tiers.fees.get = function (name,tierId,obj) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }

            var url;

            if(obj && obj.id) {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersFeesAPI + obj.id + '/';
            } else {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersFeesAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.groups.tiers.fees.create = function (name,tierId,data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }
            httpPostRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersFeesAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.fees.update = function (name,tierId, feeId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }
            if (!feeId) {
                reject({ status: 400, message: 'No fee id is provided' });
                return
            }
            httpPatchRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersFeesAPI + feeId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.fees.delete = function (name,tierId,feeId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }
            if (!feeId) {
                reject({ status: 400, message: 'No fee id is provided' });
                return
            }
            httpDeleteRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersFeesAPI + feeId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.limits.get = function (name,tierId,obj) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }

            var url;

            if(obj && obj.id) {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersLimitsAPI + obj.id + '/';
            } else {
                url = adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersLimitsAPI;
            }

            httpGetRehive(url).then(function (response) {
                resolve(response)
            }, function (err) {
                reject(err)
            })
        })
    };

    this.admin.groups.tiers.limits.create = function (name,tierId,data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No tier id is provided' });
                return
            }
            httpPostRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersLimitsAPI, data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.limits.update = function (name,tierId, limitId, data) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No  tier id is provided' });
                return
            }
            if (!limitId) {
                reject({ status: 400, message: 'No limit id is provided' });
                return
            }
            httpPatchRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersLimitsAPI + limitId + '/', data).then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.limits.delete = function (name,tierId,limitId) {
        return new Promise(function (resolve, reject) {
            if (!tierId) {
                reject({ status: 400, message: 'No  tier id is provided' });
                return
            }
            if (!limitId) {
                reject({ status: 400, message: 'No  limit id is provided' });
                return
            }
            httpDeleteRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminTiersLimitsAPI + limitId + '/').then(function (res) {
                resolve(res)
            }, function (error) {
                reject(error)
            })
        })
    };

    this.admin.groups.tiers.settings.get = function (name,tierId) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpGetRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminGroupsTiersSettingsAPI).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.tiers.settings.update = function (name,tierId, data) {
        if (!name) {
            reject({ status: 400, message: 'No group name has been given' });
            return;
        }

        return new Promise(function (resolve, reject) {
            httpPatchRehive(adminGroupsAPI + name + adminGroupsTiersAPI + tierId + adminGroupsTiersSettingsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.get = function (name,obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.name) {
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + obj.name + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + filters;
            } else {
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI;
            }


            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.accountConfigurations.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.accountConfigurations.create = function (name,data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.update = function (name, accConfigName, data) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpPatchRehive(adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + accConfigName + '/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.delete = function (name, accConfigName) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpDeleteRehive(adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + accConfigName + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.currencies.get = function (name,accConfigName,obj) {
        return new Promise(function (resolve, reject) {
            var url,filters;

            if(obj && obj.code) {
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + accConfigName + adminGroupsAccountConfigurationsCurrenciesAPI + obj.code + '/';
            } else if(obj && obj.filters){
                filters = '?' + serialize(obj.filters);
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + accConfigName + adminGroupsAccountConfigurationsCurrenciesAPI + filters;
            } else {
                url = adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI + accConfigName + adminGroupsAccountConfigurationsCurrenciesAPI;
            }


            httpGetRehive(url).then(function (response) {
                saveFilter(response);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.currencies.getNext = function () {
        return new Promise(function (resolve, reject) {
						var url = nextFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.accountConfigurations.currencies.getPrevious = function () {
        return new Promise(function (resolve, reject) {
            var url = previousFilterForLists, mainUrl;
            if (url) {
                var urlArray = url.split(baseAPI);
                mainUrl = urlArray[1];

                httpGetRehive(mainUrl).then(function (response) {
                    saveFilter(response);
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            } else {
                reject({ status: 400, message: 'Not allowed' });
            }
        });
    };

    this.admin.groups.accountConfigurations.currencies.create = function (name,accConfigName,data) {
        return new Promise(function (resolve, reject) {
            httpPostRehive(adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI  + accConfigName + adminGroupsAccountConfigurationsCurrenciesAPI, data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    this.admin.groups.accountConfigurations.currencies.delete = function (name, accConfigName,currencyCode) {
        return new Promise(function (resolve, reject) {
            if (!name) {
                reject({ status: 400, message: 'No group name has been given' });
                return;
            }

            httpDeleteRehive(adminGroupsAPI + name + adminGroupsAccountConfigurationsAPI  + accConfigName + adminGroupsAccountConfigurationsCurrenciesAPI + currencyCode + '/', {}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };

    //public functions end
}


