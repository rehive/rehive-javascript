"use strict";

window.onload = function(){

    window.rehive = new Rehive({apiVersion: 3});
};

function convertToText(data) {
    if(!data){
        return '';
    }

    var dataString = JSON.stringify(data, null, 1);
    dataString = dataString.replace(/[{",\\}]/g, '').trim();
    return dataString;
}

function register(first_name,last_name,email,company,password1,password2){
    rehive.auth.register(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company: company,
            password1: password1,
            password2: password2
        }).then(function(user){
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        },function(err){
            console.log(err);
        });
}

function registerCompany(first_name,last_name,email,company,password1,password2){
    rehive.auth.registerCompany(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company: company,
            password1: password1,
            password2: password2
        }).then(function(user){
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        },function(err){
            console.log(err);
        });
}

function login(user,company,password){
    rehive.auth.login({
            user: user,
            company: company,
            password: password
        }).then(function(user){
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
            },function(err){
            console.log(err);
        })
}

function logout(){
    rehive.auth.logout().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = res.message;
    },function(err){
        console.log(err);
    })
}

function logoutAll(){
    rehive.auth.logoutAll()
        .then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = res.message;
    }, function (err) {
            console.log(err);
        })
}

function changePassword(old_password,new_password1,new_password2){
    rehive.auth.changePassword(
        {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password2
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        },function(err){
            console.log(err);
    })
}

function resetPassword(user,company){
    rehive.auth.resetPassword(
        {
            user: user,
            company: company
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        }, function (err) {
            console.log(err);
    })
}

function resetConfirmPassword(new_password1,new_password2,uid,token){
    rehive.auth.resetConfirmPassword(
        {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        },function(err){
            console.log(err);
    })
}

function resendEmailVerification(email,company){
    rehive.auth.resendEmailVerification(
        {
            email: email,
            company: company
        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    },function(err){
        console.log(err);
    })
}

function resendMobileVerification(mobile,company){
    rehive.auth.resendMobileVerification(
        {
            mobile: mobile,
            company: company
        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    },function(err){
        console.log(err);
    })
}

function verifyMobile(otp){
    rehive.auth.verifyMobile(
        {
            otp: otp
        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    },function(err){
        console.log(err);
    })
}

function getTokensList(){
    rehive.token.getTokensList().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getToken(tokenKey){
    rehive.token.getToken(tokenKey).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    })
}

function createToken(password){
    rehive.token.createToken(
        {
            password: password
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.user);
        },function(err){
        console.log(err);
    })
}

function deleteToken(tokenKey){
    rehive.token.deleteToken(tokenKey).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    },function(err){
        console.log(err);
    })
}

function getUserProfile(){
    rehive.user.getUserProfile().then(function(user){
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    },function(err){
        console.log(err);
    })
}

function updateUserProfile(data){
    rehive.user.updateUserProfile(data).then(function(user){
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    },function(err){
        console.log(err);
    })
}

function getUserAddress(){
    rehive.user.getUserAddress().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    })
}


function updateUserAddress(data){
    rehive.user.updateUserAddress(data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    })
}

function getUserBankAccounts(){
    rehive.user.getUserBankAccounts().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getUserBankAccount(bankId){
    rehive.user.getUserBankAccount(bankId).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createUserBankAccount(name,number,type,bank_name,bank_code,branch_code,swift,iban,bic){
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
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
            console.log(err);
        });
}

function updateUserBankAccount(accountId, data){
    rehive.user.updateUserBankAccount(accountId,data).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
        console.log(err);
    });
}

function getUserBitcoinAccounts(){
    rehive.user.getUserBitcoinAccounts().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getUserBitcoinAccount(bitcoinAccountId){
    rehive.user.getUserBitcoinAccount(bitcoinAccountId).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createUserBitcoinAccount(address){
    rehive.user.createUserBitcoinAccount(
        {
            address: address
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
            console.log(err);
        });
}

function updateUserBitcoinAccount(accountId, data){
    rehive.user.updateUserBitcoinAccount(accountId,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createDocument(document_category,document_type){
    var fileSelected = document.getElementById("fileInput").files[0],
        formData =  new FormData()

    if(document_category == undefined || document_category == null){
        document_category = '';
    }

    if(document_type == undefined || document_type == null){
        document_type = '';
    }

    formData.append('file', fileSelected);
    formData.append('document_category', document_category);
    formData.append('document_type', document_type);

    rehive.user.createDocument(formData).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getUserEmailAddresses(){
    rehive.user.getUserEmailAddresses().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createUserEmailAddress(email,primary){
    rehive.user.createUserEmailAddress(
        {
            email: email,
            primary: primary
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
        console.log(err);
    });
}

function updateUserEmailAddress(emailId, data){
    rehive.user.updateUserEmailAddress(emailId,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getUserMobileNumbers(){
    rehive.user.getUserMobileNumbers().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createUserMobileNumber(number,primary){
    rehive.user.createUserMobileNumber(
        {
            number: number,
            primary: primary
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
        console.log(err);
    });
}

function updateUserMobileNumber(mobileNumberId, data){
    rehive.user.updateUserMobileNumber(mobileNumberId,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getUserNotifications(){
    rehive.user.getUserNotifications().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateUserNotifications(notificationsId, data){
    rehive.user.updateUserNotifications(notificationsId,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getTransactionsList(filters){
    rehive.transactions.getTransactionsList(filters).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}


function getTotalTransactionsList(filters){
    rehive.transactions.getTotalTransactionsList(filters).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getTransaction(tx_code){
    rehive.transactions.getTransaction(tx_code).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createDebit(amount,account,reference,subtype,note,metadata){
    rehive.transactions.createDebit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function(res){
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        },function(err){
        console.log(err);
    });
}

function createCredit(amount,account,reference,subtype,note,metadata){
    rehive.transactions.createCredit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createTransfer(transferData){
    rehive.transactions.createTransfer(
        transferData).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}


function getAccountsList(filter){
    rehive.accounts.getAccountsList(filter).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAccount(reference,filter){
    rehive.accounts.getAccount(reference,filter).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAccountCurrenciesList(reference,filter){
    rehive.accounts.getAccountCurrenciesList(reference,filter).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAccountCurrency(reference,currencyCode){
    rehive.accounts.getAccountCurrency(reference,currencyCode).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateAccountCurrency(reference,currencyCode,data){
    rehive.accounts.updateAccountCurrency(reference,currencyCode,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getCompanyDetails(){
    rehive.company.getCompanyDetails().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getCompanyCurrencies(){
    rehive.company.getCompanyCurrencies().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getCompanyCurrency(currencyCode){
    rehive.company.getCompanyCurrency(currencyCode).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getCompanyBanks(){
    rehive.company.getCompanyBanks().then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUsersList(filter){
    rehive.admin.users.getUsersList(filter).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUsersListNext(){
    rehive.admin.users.getUsersList.next().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUsersListPrevious(){
    rehive.admin.users.getUsersList.previous().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createUser(first_name,last_name,email,id_number,language,nationality,metadata,mobile_number,timezone){
    var fileSelected = document.getElementById("userProfile").files[0],
        formData =  new FormData();



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


    rehive.admin.users.createUser(formData).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUser(uuid){
    rehive.admin.users.getUser(uuid).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateAdminUser(uuid,data){
    var fileSelected = document.getElementById("userUpdateProfile").files[0],
        formData =  new FormData();

    formData.append('profile', fileSelected);

    for(var key in data){
        if(data[key]){
            formData.append(key,data[key]);
        }
    }

    rehive.admin.users.updateUser(uuid,formData).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUserSwitchesList(uuid){
    rehive.admin.users.getUserSwitchesList(uuid).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createAdminUserSwitch(uuid,tx_type,subtype,enabled){
    rehive.admin.users.createUserSwitch(uuid,{tx_type: tx_type,subtype: subtype,enabled: enabled}).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUserSwitch(uuid,id){
    rehive.admin.users.getUserSwitch(uuid,id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateAdminUserSwitch(uuid,id,data){
    rehive.admin.users.updateUserSwitch(uuid,id,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function deleteAdminUserSwitch(uuid,id){
    rehive.admin.users.deleteUserSwitch(uuid,id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminAddressesList(uuid){
    rehive.admin.users.getAddressesList(uuid).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminAddressesListNext(){
    rehive.admin.users.getAddressesList.next().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminAddressesListPrevious(){
    rehive.admin.users.getAddressesList.previous().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createAdminUserAddress(uuid,line_1,line_2,city,state_province,country,postal_code,status){
    rehive.admin.users.createUserAddress(
        {
            user: uuid,
            line_1: line_1,
            line_2: line_2,
            city: city,
            state_province:state_province,
            country: country,
            postal_code:postal_code,
            status:status

        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUserAddress(id){
    rehive.admin.users.getUserAddress(id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateAdminUserAddress(id,data){
    rehive.admin.users.updateUserAddress(id,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function deleteAdminUserAddress(id){
    rehive.admin.users.deleteUserAddress(id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminBankAccountsList(uuid){
    rehive.admin.users.getBankAccountsList(uuid).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminBankAccountsListNext(){
    rehive.admin.users.getBankAccountsList.next().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminBankAccountsListPrevious(){
    rehive.admin.users.getBankAccountsList.previous().then(function(res){

        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function createAdminUserBankAccount(uuid,name,number,type,bank_name,bank_code,branch_code,swift,iban,bic,status){
    rehive.admin.users.createUserBankAccount(
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
        }).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function getAdminUserBankAccount(id){
    rehive.admin.users.getUserBankAccount(id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function updateAdminUserBankAccount(id,data){
    rehive.admin.users.updateBankAccount(id,data).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}

function deleteAdminUserBankAccount(id){
    rehive.admin.users.deleteUserBankAccount(id).then(function(res){
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    },function(err){
        console.log(err);
    });
}
