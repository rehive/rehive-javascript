"use strict";

window.onload = function () {

    window.rehive = new Rehive({apiVersion: 3});
};

function convertToText(data) {
    if (!data) {
        return '';
    }

    var dataString = JSON.stringify(data, null, 1);
    dataString = dataString.replace(/[{",\\}]/g, '').trim();
    return dataString;
}

function register(first_name, last_name, email, mobile, company, password1, password2,terms_and_conditions) {
    rehive.auth.register(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            mobile: mobile,
            company: company,
            password1: password1,
            password2: password2,
            terms_and_conditions: terms_and_conditions
        }).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function registerCompany(first_name, last_name, email, company, password1, password2,terms_and_conditions) {
    rehive.auth.registerCompany(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company: company,
            password1: password1,
            password2: password2,
            terms_and_conditions: terms_and_conditions
        }).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function login(user, company, password) {
    rehive.auth.login({
        user: user,
        company: company,
        password: password
    }).then(function (user) {
        document.getElementById('result').innerHTML = convertToText(user);
        console.log(user);
    }, function (err) {
        console.log(err);
    });
}

function logout() {
    rehive.auth.logout().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = res.message;
    }, function (err) {
        console.log(err);
    });
}

function logoutAll() {
    rehive.auth.logoutAll()
        .then(function (res) {
            console.log(res);
            document.getElementById('result').innerHTML = res.message;
        }, function (err) {
            console.log(err);
        });
}

function changePassword(old_password, new_password1, new_password2) {
    rehive.auth.password.change(
        {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password2
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resetPassword(user, company) {
    rehive.auth.password.reset(
        {
            user: user,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resetConfirmPassword(new_password1, new_password2, uid, token) {
    rehive.auth.password.resetConfirm(
        {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.message);
    }, function (err) {
        console.log(err);
    });
}

function resendEmailVerification(email, company) {
    rehive.auth.email.resendEmailVerification(
        {
            email: email,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function resendMobileVerification(mobile, company) {
    rehive.auth.mobile.resendMobileVerification(
        {
            mobile: mobile,
            company: company
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyMobile(otp) {
    rehive.auth.mobile.verify(
        {
            otp: otp
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyEmail(key) {
    rehive.auth.email.verify(
        {
            key: key
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function getTokensList() {
    rehive.auth.tokens.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getToken(tokenKey) {
    rehive.auth.tokens.get(tokenKey).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createToken(password) {
    rehive.auth.tokens.create(
        {
            password: password
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.user);
    }, function (err) {
        console.log(err);
    });
}

function deleteToken(tokenKey) {
    rehive.auth.tokens.delete(tokenKey).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyToken(tokenKey) {
    rehive.auth.tokens.verify({token: tokenKey}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function twoFactorAuthStatus() {
    rehive.auth.mfa.status.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function viewMultiAuthSms() {
    rehive.auth.mfa.sms.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function activateTwoFactorSMSAuth(mobile_no) {
    rehive.auth.mfa.sms.enable({
        mobile_number: mobile_no
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function sendTwoFactorSMSAuth() {
    rehive.auth.mfa.sms.send().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function deactivateTwoFactorSMSAuth() {
    rehive.auth.mfa.sms.disable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function viewMultiAuthToken() {
    rehive.auth.mfa.token.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function activateTwoFactorTokenAuth() {
    rehive.auth.mfa.token.enable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function deactivateTwoFactorTokenAuth() {
    rehive.auth.mfa.token.disable().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err);
    });
}

function verifyMultiFactorOTP(token) {
    rehive.auth.mfa.verify({token: token}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    }, function (err) {
        console.log(err)
    })
}

function getUserProfile() {
    rehive.user.getUserProfile().then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function updateUserProfile(data) {
    rehive.user.updateUserProfile(data).then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function getUserTiers() {
    rehive.user.getUserTiers().then(function (user) {
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    }, function (err) {
        console.log(err);
    });
}

function getUserAddress() {
    rehive.user.getUserAddress().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function updateUserAddress(data) {
    rehive.user.updateUserAddress(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserBankAccounts() {
    rehive.user.getUserBankAccounts().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserBankAccount(bankId) {
    rehive.user.getUserBankAccount(bankId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUserBankAccount(name, number, type, bank_name, bank_code, branch_code, swift, iban, bic) {
    rehive.user.createUserBankAccount(
        {
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserBankAccount(accountId, data) {
    rehive.user.updateUserBankAccount(accountId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function deleteUserBankAccount(bankId) {
    rehive.user.deleteUserBankAccount(bankId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserCryptoAccounts() {
    rehive.user.getUserCryptoAccounts().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getUserCryptoAccount(cryptoAccountId) {
    rehive.user.getUserCryptoAccount(cryptoAccountId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function createUserCryptoAccounts(address, crypto_type, metadata) {
    rehive.user.createUserCryptoAccounts(
        {
            address: address,
            crypto_type: crypto_type,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserCryptoAccounts(cryptoAccountId, data) {
    rehive.user.updateUserCryptoAccounts(cryptoAccountId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserCryptoAccounts(cryptoAccountId) {
    rehive.user.deleteUserCryptoAccounts(cryptoAccountId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserDocuments() {
    rehive.user.getUserDocuments().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getUserDocument(documentId) {
    rehive.user.getUserDocument(documentId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function createDocument(document_type,metadata) {
    var fileSelected = document.getElementById("fileInput").files[0],
        formData = new FormData;

    formData.append('file', fileSelected);
    formData.append('document_type', document_type);
    formData.append('metadata', JSON.stringify(metadata));

    rehive.user.createDocument(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserEmailAddresses() {
    rehive.user.getUserEmailAddresses().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserEmailAddress(id) {
    rehive.user.getUserEmailAddress(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUserEmailAddress(email, primary) {
    rehive.user.createUserEmailAddress(
        {
            email: email,
            primary: primary
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserEmailAddress(emailId, data) {
    rehive.user.updateUserEmailAddress(emailId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserEmailAddress(emailId) {
    rehive.user.deleteUserEmailAddress(emailId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserMobileNumbers() {
    rehive.user.getUserMobileNumbers().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserMobileNumber(id) {
    rehive.user.getUserMobileNumber(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function createUserMobileNumber(number, primary) {
    rehive.user.createUserMobileNumber(
        {
            number: number,
            primary: primary
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function updateUserMobileNumber(mobileNumberId, data) {
    rehive.user.updateUserMobileNumber(mobileNumberId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteUserMobileNumber(mobileNumberId) {
    rehive.user.deleteUserMobileNumber(mobileNumberId).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getUserNotifications() {
    rehive.user.getUserNotifications().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateUserNotifications(notificationsId, data) {
    rehive.user.updateUserNotifications(notificationsId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionsList(filters) {
    rehive.transactions.getTransactionsList(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionListNext() {
    rehive.transactions.getTransactionsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransactionListPrevious() {
    rehive.transactions.getTransactionsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTotalTransactionsList(filters) {
    rehive.transactions.getTotalTransactionsList(filters).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getTransaction(tx_code) {
    rehive.transactions.getTransaction(tx_code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function createDebit(amount, account, reference, subtype, note, metadata) {
    rehive.transactions.createDebit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createCredit(amount, account, reference, subtype, note, metadata) {
    rehive.transactions.createCredit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createTransfer(transferData) {
    rehive.transactions.createTransfer(
        transferData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function getAccountsList(filter) {
    rehive.accounts.getAccountsList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAccount(name, primary) {
    rehive.accounts.createAccount({
        name: name,
        primary: primary
    }).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err)
    })
}

function getAccountsListNext() {
    rehive.accounts.getAccountsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountsListPrevious() {
    rehive.accounts.getAccountsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccount(reference, filter) {
    rehive.accounts.getAccount(reference, filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesList(reference, filter) {
    rehive.accounts.getAccountCurrenciesList(reference, filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesListNext() {
    rehive.accounts.getAccountCurrenciesList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAccountCurrenciesListPrevious() {
    rehive.accounts.getAccountCurrenciesList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}


function getAccountCurrency(reference, currencyCode) {
    rehive.accounts.getAccountCurrency(reference, currencyCode).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAccountCurrency(reference, currencyCode, data) {
    rehive.accounts.updateAccountCurrency(reference, currencyCode, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyDetails() {
    rehive.company.getCompanyDetails().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyCurrencies() {
    rehive.company.getCompanyCurrencies().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getCompanyCurrency(currencyCode) {
    rehive.company.getCompanyCurrency(currencyCode).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getCompanyBanks() {
    rehive.company.getCompanyBanks().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getAdminUsersList(filter) {
    rehive.admin.users.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersListNext() {
    rehive.admin.users.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getAdminUsersListPrevious() {
    rehive.admin.users.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    })
}

function getAdminUsersOverview() {
    rehive.admin.users.getOverview().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createUser(first_name, last_name, email, id_number, language, nationality, metadata, mobile_number, timezone) {
    var fileSelected = document.getElementById("userProfile").files[0],
        formData = new FormData();


    formData.append('profile', fileSelected);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('id_number', id_number);
    formData.append('language', language);
    formData.append('nationality', nationality);
    formData.append('metadata', metadata);
    formData.append('mobile_number', mobile_number);
    formData.append('timezone', timezone);


    rehive.admin.users.create(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUser(uuid) {
    rehive.admin.users.get(uuid).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUser(uuid, data) {
    var fileSelected = document.getElementById("userUpdateProfile").files[0],
        formData = new FormData();

    formData.append('profile', fileSelected);

    for (var key in data) {
        if (data[key]) {
            formData.append(key, data[key]);
        }
    }

    rehive.admin.users.update(uuid, formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserTiers(uuid) {
    rehive.admin.users.getTiers(uuid).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserSwitchesList(uuid) {
    rehive.admin.users.getSwitchesList(uuid).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserSwitch(uuid, tx_type, subtype, enabled) {
    rehive.admin.users.createSwitch(uuid, {tx_type: tx_type, subtype: subtype, enabled: enabled}).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserSwitch(uuid, id) {
    rehive.admin.users.getSwitch(uuid, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserSwitch(uuid, id, data) {
    rehive.admin.users.updateSwitch(uuid, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserSwitch(uuid, id) {
    rehive.admin.users.deleteSwitch(uuid, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsList(uuid,filter) {
    rehive.admin.users.getPermissionsList(uuid,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsListNext() {
    rehive.admin.users.getPermissionsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionsListPrevious() {
    rehive.admin.users.getPermissionsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserPermission(uuid,type,level) {
    rehive.admin.users.createPermission(uuid, {
        type: type,
        level: level
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermission(uuid,id) {
    rehive.admin.users.getPermission(uuid,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserPermission(uuid,id) {
    rehive.admin.users.deletePermission(uuid,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsList(uuid,filter) {
    rehive.admin.users.getPermissionGroupsList(uuid,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsListNext() {
    rehive.admin.users.getPermissionGroupsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroupsListPrevious() {
    rehive.admin.users.getPermissionGroupsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function addAdminUserPermissionGroup(uuid,group) {
    rehive.admin.users.addPermissionGroup(uuid, {
        group: group
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserPermissionGroup(uuid,name) {
    rehive.admin.users.getPermissionGroup(uuid,name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserPermissionGroup(uuid,name) {
    rehive.admin.users.deletePermissionGroup(uuid,name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesList(filter) {
    rehive.admin.users.getAddressesList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesListNext() {
    rehive.admin.users.getAddressesList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddressesListPrevious() {
    rehive.admin.users.getAddressesList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserAddress(uuid, line_1, line_2, city, state_province, country, postal_code, status) {
    rehive.admin.users.createAddress(
        {
            user: uuid,
            line_1: line_1,
            line_2: line_2,
            city: city,
            state_province: state_province,
            country: country,
            postal_code: postal_code,
            status: status

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserAddress(id) {
    rehive.admin.users.getAddress(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserAddress(id, data) {
    rehive.admin.users.updateAddress(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserAddress(id) {
    rehive.admin.users.deleteAddress(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsList(filter) {
    rehive.admin.users.getBankAccountsList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsListNext() {
    rehive.admin.users.getBankAccountsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccountsListPrevious() {
    rehive.admin.users.getBankAccountsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserBankAccount(uuid, name, number, type, bank_name, bank_code, branch_code, swift, iban, bic, status) {
    rehive.admin.users.createBankAccount(
        {
            user: uuid,
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic,
            status: status
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserBankAccount(id) {
    rehive.admin.users.getBankAccount(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserBankAccount(id, data) {
    rehive.admin.users.updateBankAccount(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserBankAccount(id) {
    rehive.admin.users.deleteBankAccount(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsList(filter) {
    rehive.admin.users.getCryptoAccountsList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsListNext() {
    rehive.admin.users.getCryptoAccountsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccountsListPrevious() {
    rehive.admin.users.getCryptoAccountsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserCryptoAccount(user, crypto_type, address, metadata, status) {
    rehive.admin.users.createCryptoAccount(
        {
            user: user,
            crypto_type: crypto_type,
            address: address,
            metadata: metadata,
            status: status
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserCryptoAccount(id) {
    rehive.admin.users.getCryptoAccount(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserCryptoAccount(id, data) {
    rehive.admin.users.updateCryptoAccount(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserCryptoAccount(id) {
    rehive.admin.users.deleteCryptoAccount(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsList(filter) {
    rehive.admin.users.getDocumentsList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsListNext() {
    rehive.admin.users.getDocumentsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocumentsListPrevious() {
    rehive.admin.users.getDocumentsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserDocument(user, document_type, metadata, note, status) {
    var fileSelected = document.getElementById("adminUserDocument").files[0],
        formData = new FormData();


    formData.append('file', fileSelected);
    formData.append('user', user);
    formData.append('document_type', document_type);
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('note', note);
    formData.append('status', status);

    rehive.admin.users.createDocument(formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserDocument(id) {
    rehive.admin.users.getDocument(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserDocument(id, data) {
    var fileSelected = document.getElementById("updateAdminUserDocument").files[0],
        formData = new FormData();

    if (fileSelected) {
        formData.append('file', fileSelected);
    }

    for (var key in data) {
        if (data[key]) {
            formData.append(key, data[key]);
        }
    }

    rehive.admin.users.updateDocument(id, formData).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserDocument(id) {
    rehive.admin.users.deleteDocument(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsList(filter) {
    rehive.admin.users.getEmailsList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsListNext() {
    rehive.admin.users.getEmailsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmailsListPrevious() {
    rehive.admin.users.getEmailsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserEmail(user, email, primary, verified) {
    rehive.admin.users.createEmail(
        {
            user: user,
            email: email,
            primary: primary,
            verified: verified
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserEmail(id) {
    rehive.admin.users.getEmail(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserEmail(id, data) {
    rehive.admin.users.updateEmail(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserEmail(id) {
    rehive.admin.users.deleteEmail(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesList(filter) {
    rehive.admin.users.getMobilesList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesListNext() {
    rehive.admin.users.getMobilesList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobilesListPrevious() {
    rehive.admin.users.getMobilesList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUserMobile(user, number, primary, verified) {
    rehive.admin.users.createMobile(
        {
            user: user,
            number: number,
            primary: primary,
            verified: verified
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUserMobile(id) {
    rehive.admin.users.getMobile(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUserMobile(id, data) {
    rehive.admin.users.updateMobile(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUserMobile(id) {
    rehive.admin.users.deleteMobile(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsList(filter) {
    rehive.admin.transactions.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsListNext() {
    rehive.admin.transactions.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsListPrevious() {
    rehive.admin.transactions.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsTotal(filter) {
    rehive.admin.transactions.getTotal(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransaction(id) {
    rehive.admin.transactions.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminTransaction(id, data) {
    rehive.admin.transactions.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminCreditTransaction(user, currency, amount, subtype, account, reference, metadata, note, confirm_on_create) {
    rehive.admin.transactions.createCredit(
        {
            user: user,
            currency: currency,
            amount: amount,
            subtype: subtype,
            account: account,
            reference: reference,
            metadata: metadata,
            note: note,
            confirm_on_create: confirm_on_create
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminDebitTransaction(user, currency, amount, subtype, account, reference, metadata, note, confirm_on_create) {
    rehive.admin.transactions.createDebit(
        {
            user: user,
            currency: currency,
            amount: amount,
            subtype: subtype,
            account: account,
            reference: reference,
            metadata: metadata,
            note: note,
            confirm_on_create: confirm_on_create
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminTransferTransaction(user, recipient, currency, amount, debit_subtype, debit_account,
                                        debit_note, debit_metadata, debit_reference, credit_subtype, credit_reference,
                                        credit_metadata, credit_note) {
    rehive.admin.transactions.createTransfer(
        {
            user: user,
            recipient: recipient,
            currency: currency,
            amount: amount,
            debit_subtype: debit_subtype,
            debit_account: debit_account,
            debit_note: debit_note,
            debit_metadata: debit_metadata,
            debit_reference: debit_reference,
            credit_subtype: credit_subtype,
            credit_reference: credit_reference,
            credit_metadata: credit_metadata,
            credit_note: credit_note
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsSwitchesList() {
    rehive.admin.transactions.getSwitchesList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminTransactionsSwitch(tx_type, subtype, enabled) {
    rehive.admin.transactions.createSwitch(
        {
            tx_type: tx_type,
            subtype: subtype,
            enabled: enabled
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsSwitch(id) {
    rehive.admin.transactions.getSwitch(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminTransactionsSwitch(id, data) {
    rehive.admin.transactions.updateSwitch(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminTransactionsSwitch(id) {
    rehive.admin.transactions.deleteSwitch(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsWebhooksList() {
    rehive.admin.transactions.getWebhooksList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminTransactionsWebhook(tx_type, event, url, secret) {
    rehive.admin.transactions.createWebhook(
        {
            tx_type: tx_type,
            event: event,
            url: url,
            secret: secret
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTransactionsWebhook(id) {
    rehive.admin.transactions.getWebhook(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminTransactionsWebhook(id, data) {
    rehive.admin.transactions.updateWebhook(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminTransactionsWebhook(id) {
    rehive.admin.transactions.deleteWebhook(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsList(filter) {
    rehive.admin.accounts.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsListNext() {
    rehive.admin.accounts.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountsListPrevious() {
    rehive.admin.accounts.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccount(user, name, primary, reference) {
    rehive.admin.accounts.create(
        {
            user: user,
            name: name,
            primary: primary,
            reference: reference
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccount(reference) {
    rehive.admin.accounts.get(reference).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccount(reference, data) {
    rehive.admin.accounts.update(reference, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesList(reference, filter) {
    rehive.admin.accounts.getCurrenciesList(reference, filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesListNext() {
    rehive.admin.accounts.getCurrenciesList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrenciesListPrevious() {
    rehive.admin.accounts.getCurrenciesList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrency(reference, code) {
    rehive.admin.accounts.getCurrency(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrency(reference, code, data) {
    rehive.admin.accounts.updateCurrency(reference, code, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyLimitsList(reference, code) {
    rehive.admin.accounts.getCurrencyLimitsList(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencyLimit(reference, code, tx_type, value, type, subtype) {
    rehive.admin.accounts.createCurrencyLimit(reference, code, {
        tx_type: tx_type,
        value: value,
        type: type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyLimit(reference, code, id) {
    rehive.admin.accounts.getCurrencyLimit(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencyLimit(reference, code, id, data) {
    rehive.admin.accounts.updateCurrencyLimit(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencyLimit(reference, code, id) {
    rehive.admin.accounts.deleteCurrencyLimit(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyFeesList(reference, code) {
    rehive.admin.accounts.getCurrencyFeesList(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencyFee(reference, code, tx_type, value, percentage, subtype) {
    rehive.admin.accounts.createCurrencyFee(reference, code, {
        tx_type: tx_type,
        value: value,
        percentage: percentage,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencyFee(reference, code, id) {
    rehive.admin.accounts.getCurrencyFee(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencyFee(reference, code, id, data) {
    rehive.admin.accounts.updateCurrencyFee(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencyFee(reference, code, id) {
    rehive.admin.accounts.deleteCurrencyFee(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencySwitchesList(reference, code) {
    rehive.admin.accounts.getCurrencySwitchesList(reference, code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminUsersAccountCurrencySwitch(reference, code, tx_type, subtype, enabled) {
    rehive.admin.accounts.createCurrencySwitch(reference, code, {
        tx_type: tx_type,
        subtype: subtype,
        enabled: enabled
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminUsersAccountCurrencySwitch(reference, code, id) {
    rehive.admin.accounts.getCurrencySwitch(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminUsersAccountCurrencySwitch(reference, code, id, data) {
    rehive.admin.accounts.updateCurrencySwitch(reference, code, id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminUsersAccountCurrencySwitch(reference, code, id) {
    rehive.admin.accounts.deleteCurrencySwitch(reference, code, id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesList(filter) {
    rehive.admin.currencies.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesListNext() {
    rehive.admin.currencies.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrenciesListPrevious() {
    rehive.admin.currencies.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminCurrency(code, description, symbol, unit, divisibility) {
    rehive.admin.currencies.create(
        {
            code: code,
            description: description,
            symbol: symbol,
            unit: unit,
            divisibility: divisibility
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrency(code) {
    rehive.admin.currencies.get(code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCurrency(code, data) {
    rehive.admin.currencies.update(code, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsList(code,filter) {
    rehive.admin.currencies.getBankAccountsList(code,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsListNext() {
    rehive.admin.currencies.getBankAccountsList.next().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccountsListPrevious() {
    rehive.admin.currencies.getBankAccountsList.previous().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyBankAccount(code,id) {
    rehive.admin.currencies.getBankAccount(code,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function addAdminCurrencyBankAccount(code,data) {
    rehive.admin.currencies.addBankAccount(code,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminCurrencyBankAccount(code,id) {
    rehive.admin.currencies.deleteBankAccount(code,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCurrencyOverview(code) {
    rehive.admin.currencies.getOverview(code).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCompany() {
    rehive.admin.company.get().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCompany(data) {
    rehive.admin.company.update(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminCompanyAddress() {
    rehive.admin.company.getAddress().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminCompanyAddress(data) {
    rehive.admin.company.updateAddress(data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}
function getAdminGeneralWebhooksList() {
    rehive.admin.webhooks.getList().then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err);
    })
}

function createAdminGeneralWebhooks(url, event, secret) {
    rehive.admin.webhooks.create({
        url: url,
        event: event,
        secret: secret
    }).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err);
    })
}

function getAdminGeneralWebhooks(webhooksId) {
    rehive.admin.webhooks.get(webhooksId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err);
    })
}

function updateAdminGeneralWebhooks(webhooksId, data) {
    rehive.admin.webhooks.update(webhooksId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminGeneralWebhooks(id) {
    rehive.admin.webhooks.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminSubtypesList() {
    rehive.admin.subtypes.getList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminSubtype(tx_type, name, label, description) {
    rehive.admin.subtypes.create(
        {
            tx_type: tx_type,
            name: name,
            label: label,
            description: description
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminSubtype(id) {
    rehive.admin.subtypes.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminSubtype(id, data) {
    rehive.admin.subtypes.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminSubtype(id) {
    rehive.admin.subtypes.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminNotificationsList() {
    rehive.admin.notifications.getList().then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err)
    })
}

function getAdminNotification(notificationid) {
    rehive.admin.notifications.get(notificationid).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (err) {
        console.log(err)
    })
}

function updateAdminNotification(notificationId, data) {
    rehive.admin.notifications.update(notificationId, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTiersList() {
    rehive.admin.tiers.getList().then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function createAdminTier(currency, level, name, description) {
    rehive.admin.tiers.create(
        {
            currency: currency,
            level: level,
            name: name,
            description: description
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTier(tierId) {
    rehive.admin.tiers.get(tierId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function updateAdminTier(tierId, data) {
    rehive.admin.tiers.update(tierId, data).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function deleteAdminTier(tierId) {
    rehive.admin.tiers.delete(tierId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function getAdminTiersRequirementsList(tiersId) {
    rehive.admin.tiers.getRequirementsList(tiersId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function createAdminTierRequirements(tiersId, requirement) {
    rehive.admin.tiers.createRequirements(tiersId, {
        requirement: requirement
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierRequirement(tierId, requirementId) {
    rehive.admin.tiers.getRequirement(tierId, requirementId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function updateAdminTierRequirement(tierId, requirementId, data) {
    rehive.admin.tiers.updateRequirement(tierId, requirementId, data).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function deleteAdminTierRequirement(tierId,requirementId) {
    rehive.admin.tiers.deleteRequirement(tierId,requirementId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}


function getAdminTiersLimitsList(tiersId) {
    rehive.admin.tiers.getLimitsList(tiersId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function createAdminTierLimit(tiersId, value, type, tx_type, subtype) {
    rehive.admin.tiers.createLimit(tiersId, {
        value: value,
        type: type,
        tx_type: tx_type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierLimit(tierId, limitId) {
    rehive.admin.tiers.getLimit(tierId, limitId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function updateAdminTierLimit(tierId, limitId,data) {
    rehive.admin.tiers.updateLimit(tierId, limitId,data).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function deleteAdminTierLimit(tierId, limitId) {
    rehive.admin.tiers.deleteLimit(tierId, limitId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}


function getAdminTiersFeesList(tiersId) {
    rehive.admin.tiers.getFeesList(tiersId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function createAdminTierFee(tiersId, value, percentage, tx_type, subtype) {
    rehive.admin.tiers.createFee(tiersId, {
        value: value,
        percentage: percentage,
        tx_type: tx_type,
        subtype: subtype
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierFee(tierId, feeId) {
    rehive.admin.tiers.getFee(tierId, feeId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function updateAdminTierFee(tierId, feeId,data) {
    rehive.admin.tiers.updateFee(tierId, feeId,data).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function deleteAdminTierFee(tierId, feeId) {
    rehive.admin.tiers.deleteFee(tierId, feeId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}


function getAdminTiersSwitchesList(tiersId) {
    rehive.admin.tiers.getSwitchesList(tiersId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function createAdminTierSwitch(tiersId, tx_type, subtype, enabled) {
    rehive.admin.tiers.createSwitch(tiersId, {
        tx_type: tx_type,
        subtype: subtype,
        enabled:enabled
    }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminTierSwitch(tierId, switchId) {
    rehive.admin.tiers.getSwitch(tierId, switchId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function updateAdminTierSwitch(tierId, switchId, data) {
    rehive.admin.tiers.updateSwitch(tierId, switchId,data).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function deleteAdminTierSwitch(tierId, switchId) {
    rehive.admin.tiers.deleteSwitch(tierId, switchId).then(function (res) {
        console.log(res)
        document.getElementById('result').innerHTML = convertToText(res)
    }, function (error) {
        console.log(error)
    })
}

function getAdminGlobalSwitchesList() {
    rehive.admin.switches.getList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminGlobalSwitch(switch_type, enabled) {
    rehive.admin.switches.create(
        {
            switch_type: switch_type,
            enabled: enabled
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminGlobalSwitch(id) {
    rehive.admin.switches.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminGlobalSwitch(id, data) {
    rehive.admin.switches.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminGlobalSwitch(id) {
    rehive.admin.switches.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminBankAccountsList() {
    rehive.admin.bankAccounts.getList().then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminBankAccount(name, number,type, bank_name, bank_code, branch_code, swift, iban, bic) {
    rehive.admin.bankAccounts.create(
        {
            name: name,
            number: number,
            type: type,
            bank_name: bank_name,
            bank_code: bank_code,
            branch_code: branch_code,
            swift: swift,
            iban: iban,
            bic: bic
        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminBankAccount(id) {
    rehive.admin.bankAccounts.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminBankAccount(id, data) {
    rehive.admin.bankAccounts.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminBankAccount(id) {
    rehive.admin.bankAccounts.delete(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesList(filter) {
    rehive.admin.services.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesListNext() {
    rehive.admin.services.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminServicesListPrevious() {
    rehive.admin.services.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminService(id) {
    rehive.admin.services.get(id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminService(id, data) {
    rehive.admin.services.update(id, data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsList(filter) {
    rehive.admin.permissionGroups.getList(filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsListNext() {
    rehive.admin.permissionGroups.getList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupsListPrevious() {
    rehive.admin.permissionGroups.getList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.create(
        {
            name: name

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.get(name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function updateAdminPermissionGroup(name, data) {
    rehive.admin.permissionGroups.update(name,data).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminPermissionGroup(name) {
    rehive.admin.permissionGroups.delete(name).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsList(name,filter) {
    rehive.admin.permissionGroups.getPermissionsList(name,filter).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsListNext() {
    rehive.admin.permissionGroups.getPermissionsList.next().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermissionsListPrevious() {
    rehive.admin.permissionGroups.getPermissionsList.previous().then(function (res) {

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function createAdminPermissionGroupPermission(name,type,level) {
    rehive.admin.permissionGroups.createPermission(name,
        {
            type: type,
            level: level

        }).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function getAdminPermissionGroupPermission(name,id) {
    rehive.admin.permissionGroups.getPermission(name,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}

function deleteAdminPermissionGroupPermission(name,id) {
    rehive.admin.permissionGroups.deletePermission(name,id).then(function (res) {
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    }, function (err) {
        console.log(err);
    });
}