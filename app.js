window.onload = function(){

    window.rehive = new Rehive({apiVersion: 3});
};

function convertToText(data) {
    if(!data) return '';

    var dataString = JSON.stringify(data, null, 1);
    dataString = dataString.replace(/[{",\\}]/g, '').trim();
    return dataString;
}

function register(first_name,last_name,email,company_id,password1,password2){
    rehive.auth.register(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id,
            password1: password1,
            password2: password2
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        })
}

function registerCompany(first_name,last_name,email,company_id,password1,password2){
    rehive.auth.registerCompany(
        {
            first_name: first_name,
            last_name: last_name,
            email: email,
            company_id: company_id,
            password1: password1,
            password2: password2
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
        })
}

function login(identifier,company_id,password){
    rehive.auth.login(
        {
            identifier: identifier,
            company_id: company_id,
            password: password
        }, function(err,user){
            if(err){
                console.log(err);
                return
            }
            console.log(user);
            document.getElementById('result').innerHTML = convertToText(user);
    })
}

function logout(){
    rehive.auth.logout(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res.message);
        document.getElementById('result').innerHTML = res.message;
    })
}

function logoutAll(){
    rehive.auth.logoutAll(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res.message);
        document.getElementById('result').innerHTML = res.message;
    })
}

function changePassword(old_password,new_password1,new_password2){
    rehive.auth.changePassword(
        {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password2
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function resetPassword(identifier,company_id){
    rehive.auth.resetPassword(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function resetConfirmPassword(new_password1,new_password2,uid,token){
    rehive.auth.resetConfirmPassword(
        {
            new_password1: new_password1,
            new_password2: new_password2,
            uid: uid,
            token: token
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.message);
        })
}

function resendEmailVerification(identifier,company_id){
    rehive.auth.resendEmailVerification(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.status);
        })
}

function resendMobileVerification(identifier,company_id){
    rehive.auth.resendMobileVerification(
        {
            identifier: identifier,
            company_id: company_id
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.status);
        })
}

function verifyMobile(otp){
    rehive.auth.verifyMobile(
        {
            otp: otp
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.status);
        })
}

function getTokensList(){
    rehive.token.getTokensList(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createToken(password){
    rehive.token.createToken(
        {
            password: password
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res.user);
        })
}

function deleteToken(tokenKey){
    rehive.token.deleteToken(tokenKey,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res.status);
    })
}

function getUserProfile(){
    rehive.user.getUserProfile(function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function updateUserProfile(data){
    rehive.user.updateUserProfile(data, function(err,user){
        if(err){
            console.log(err);
            return
        }
        console.log(user);
        document.getElementById('result').innerHTML = convertToText(user);
    })
}

function getUserAddress(){
    rehive.user.getUserAddress(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}


function updateUserAddress(data){
    rehive.user.updateUserAddress(data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserBankAccounts(){
    rehive.user.getUserBankAccounts(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
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
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserBankAccount(accountId, data){
    rehive.user.updateUserBankAccount(accountId,data, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function getUserBitcoinAccounts(){
    rehive.user.getUserBitcoinAccounts(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createUserBitcoinAccount(address){
    rehive.user.createUserBitcoinAccount(
        {
            address: address
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserBitcoinAccount(accountId, data){
    rehive.user.updateUserBitcoinAccount(accountId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createDocument(document_category,document_type){
    var fileSelected = document.getElementById("fileInput").files[0],
        formData =  new FormData;

    if(document_category == undefined || document_category == null){
        document_category = '';
    }

    if(document_type == undefined || document_type == null){
        document_type = '';
    }

    formData.append('file', fileSelected);
    formData.append('document_category', document_category);
    formData.append('document_type', document_type);

    rehive.user.createDocument(formData, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserEmailAddresses(){
    rehive.user.getUserEmailAddresses(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createUserEmailAddress(email,primary){
    rehive.user.createUserEmailAddress(
        {
            email: email,
            primary: primary
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserEmailAddress(emailId, data){
    rehive.user.updateUserEmailAddress(emailId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserMobileNumbers(){
    rehive.user.getUserMobileNumbers(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createUserMobileNumbers(number,primary){
    rehive.user.createUserMobileNumbers(
        {
            number: number,
            primary: primary
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function updateUserMobileNumbers(mobileNumberId, data){
    rehive.user.updateUserMobileNumbers(mobileNumberId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getUserNotifications(){
    rehive.user.getUserNotifications(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function updateUserNotifications(notificationsId, data){
    rehive.user.updateUserNotifications(notificationsId,data, function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getListTransactions(filters){
    rehive.transactions.getListTransactions(filters,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}


function getTotalTransactionsList(filters){
    rehive.transactions.getTotalTransactionsList(filters,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getTransaction(tx_code){
    rehive.transactions.getTransaction(tx_code,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function createWithdrawal(amount,account,reference,subtype,note,metadata){
    rehive.transactions.createWithdrawal(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}

function createDeposit(amount,account,reference,subtype,note,metadata){
    rehive.transactions.createDeposit(
        {
            amount: amount,
            account: account,
            reference: reference,
            subtype: subtype,
            note: note,
            metadata: metadata
        }, function(err,res){
            if(err){
                console.log(err);
                return
            }
            console.log(res);
            document.getElementById('result').innerHTML = convertToText(res);
        })
}
function getAccountsList(filter){
    rehive.accounts.getAccountsList(filter,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getAccount(reference,filter){
    rehive.accounts.getAccount(reference,filter,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getAccountCurrenciesList(reference,filter){
    rehive.accounts.getAccountCurrenciesList(reference,filter,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getAccountCurrency(reference,code){
    rehive.accounts.getAccountCurrency(reference,code,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function updateAccountCurrency(reference,code,filter){
    rehive.accounts.updateAccountCurrency(reference,code,filter,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getCompanyDetails(){
    rehive.company.getCompanyDetails(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getCompanyCurrencies(code){
    rehive.company.getCompanyCurrencies(code,function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}

function getCompanyBanks(){
    rehive.company.getCompanyBanks(function(err,res){
        if(err){
            console.log(err);
            return
        }
        console.log(res);
        document.getElementById('result').innerHTML = convertToText(res);
    })
}
